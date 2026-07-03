import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import sqlite3 from 'sqlite3'

// Setup ESM __dirname equivalent
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

// Express Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to local SQLite Database
const dbPath = path.join(__dirname, 'database.sqlite')
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening SQLite database:', err.message)
  } else {
    console.log('Connected to local SQLite database at:', dbPath)
    initializeDatabase()
  }
})

// Initialize DB Tables & Seed Sample Data
function initializeDatabase() {
  db.serialize(() => {
    // Newsletter subscribers table
    db.run(`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Quiz Results table (new)
    db.run(`
      CREATE TABLE IF NOT EXISTS quiz_results (
        id TEXT PRIMARY KEY,
        email TEXT NOT NULL,
        score INTEGER NOT NULL,
        bucket TEXT NOT NULL,
        answers_json TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        converted_to_blueprint BOOLEAN DEFAULT FALSE,
        converted_to_membership BOOLEAN DEFAULT FALSE
      )
    `)

    // Assessment completions table (original)
    db.run(`
      CREATE TABLE IF NOT EXISTS assessment_completions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        age_group TEXT,
        primary_goal TEXT,
        joint_pain TEXT,
        score INTEGER,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Insert a few mock assessment completions if table is empty
    db.get("SELECT COUNT(*) as count FROM assessment_completions", (err, row) => {
      if (!err && row && row.count === 0) {
        const stmt = db.prepare(`
          INSERT INTO assessment_completions (age_group, primary_goal, joint_pain, score)
          VALUES (?, ?, ?, ?)
        `)
        stmt.run('40 to 55', 'Restore Joint Mobility', 'Yes, shoulders/knees/lower-back', 75)
        stmt.run('40 to 55', 'Build Dense, Hard Muscle', 'Mild/occasional stiffness', 82)
        stmt.run('56 and over', 'Restore Joint Mobility', 'Yes, shoulders/knees/lower-back', 68)
        stmt.finalize()
        console.log('Seeded sample assessment responses into SQLite database.')
      }
    })
  })
}

// API Routes
app.post('/api/quiz-results', (req, res) => {
  const { email, score, bucket, answers_json } = req.body
  if (!email || !score || !bucket) {
    return res.status(400).json({ error: 'Incomplete quiz results.' })
  }

  const id = Date.now().toString() // Simple ID generation
  db.run(
    'INSERT INTO quiz_results (id, email, score, bucket, answers_json) VALUES (?, ?, ?, ?, ?)',
    [id, email, score, bucket, answers_json],
    function (err) {
      if (err) {
        console.error(err)
        return res.status(500).json({ error: 'Failed to save quiz results.' })
      }
      return res.status(201).json({ success: true, id, message: 'Results saved successfully!' })
    }
  )
})

app.post('/api/newsletter', (req, res) => {
  const { email } = req.body
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  db.run(
    'INSERT INTO newsletter_subscribers (email) VALUES (?)',
    [email],
    function (err) {
      if (err) {
        if (err.message.includes('UNIQUE constraint failed')) {
          return res.status(400).json({ error: 'This email is already subscribed!' })
        }
        return res.status(500).json({ error: 'Database error. Please try again later.' })
      }
      return res.status(201).json({ success: true, message: 'Successfully subscribed to the Forge40 newsletter!' })
    }
  )
})

app.post('/api/assessment', (req, res) => {
  const { age, goal, pain, score } = req.body
  if (!age || !goal || !pain) {
    return res.status(400).json({ error: 'Incomplete quiz data.' })
  }

  db.run(
    'INSERT INTO assessment_completions (age_group, primary_goal, joint_pain, score) VALUES (?, ?, ?, ?)',
    [age, goal, pain, score || 75],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to record assessment.' })
      }
      return res.status(201).json({ success: true, id: this.lastID, message: 'Assessment compiled successfully!' })
    }
  )
})

app.get('/api/assessment/stats', (req, res) => {
  db.all('SELECT * FROM assessment_completions ORDER BY created_at DESC LIMIT 50', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database retrieve failed.' })
    }
    
    // Compute simple aggregate stats
    const total = rows.length
    const averageScore = total > 0 ? Math.round(rows.reduce((sum, r) => sum + r.score, 0) / total) : 0
    
    res.json({
      total_completions: total,
      average_longevity_score: averageScore,
      recent_completions: rows
    })
  })
})

// Serve Built Frontend Static Files from /code/frontend/dist
const distPath = path.join(__dirname, '..', 'frontend', 'dist')
app.use(express.static(distPath))

// Catch-all route to serve index.html for Single Page App routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

// Bind and Listen on Port 3000 on all interfaces (0.0.0.0)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Forge40 Web Server is fully live and listening on http://0.0.0.0:${PORT}`)
})
