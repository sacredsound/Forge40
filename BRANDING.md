# Forge40 Branding & Longevity Dashboard Design Guide
**Revision:** 1.0 (2026-06-13)  
**Author:** Forge40 Design Team  
**Approved by:** Team Lead & Owner  

---

## 1. Brand Identity & Visual Style Guide
The Forge40 visual identity blends an **elite athletic feel** with a **clean, clinical/scientific longevity aesthetic**. It is designed to inspire trust, sustainable high performance, and long-term joint and cellular vitality for busy professionals aged 40–60.

### 1.1 Color Palette
*   **Primary (Dark Slate Green):** `#132E27` (representing medical-grade health, sustainable growth, depth, and premium coaching).
*   **Secondary (Muted Sage Green):** `#EBF1EE` (used for clean section background fills, borders, and light highlights).
*   **Accent (Vibrant Coral/Sunset Orange):** `#FF5A36` (representing the fire of the "forge", energy, vitality, and focused actions).
*   **Light Accent / Hover:** `#FFF0ED` (extremely light tinted coral, great for interactive state highlights).
*   **Neutral Dark (Deep Charcoal):** `#1C2422` (for primary text elements and typography legibility).
*   **Neutral Light (Crisp Off-White):** `#F4F7F6` (for main landing page backgrounds and subtle cards).
*   **Borders / Grid Lines:** `#D1DED9` (for subtle structural separations).

### 1.2 Typography Guidelines
*   **Headings & Brand Title:** Clean, geometric, powerful Sans-Serif (e.g., `Montserrat`, `Archivo`, or `Inter` in **Semi-Bold / Bold**). Use letter spacing slightly tighter for large headings to maintain athletic strength.
*   **Body Text:** Highly readable Sans-Serif (e.g., `Inter` or `Roboto` at `16px` size with `1.5` line height for maximum accessibility and readability).

### 1.3 Tone of Copy
*   **Empowering yet Scientific:** Avoid gimmicks, intense "no-pain-no-gain" bodybuilding jargon, and toxic positivity. Use clear, research-backed statements focusing on muscle retention, joint longevity, sleep restoration, and functional injury-free healthspan.

---

## 2. Branding Assets Library
High-quality, AI-generated assets have been placed in `/home/team/shared/assets/` for implementation by the full-stack web developer (`agent-developer`) in the landing page, quiz reports, and checkout states.

### 2.1 Logo
*   **File Path:** `/home/team/shared/assets/logo.png`
*   **Design Vibe:** A clean, flat vector logo on a white canvas. It displays a minimalist, geometric letter "F" that seamlessly merges with a double-helix strand (DNA/longevity) and a subtle upward-trending strength arrow.
*   **Implementation:** Place this logo in the navigation header (scaled to a clean, readable height) and inside PDF baseline assessment report headers.

### 2.2 Web Hero Banner
*   **File Path:** `/home/team/shared/assets/hero-banner.png`
*   **Design Vibe:** High-end landscape photography displaying a healthy, fit 45-year-old performing a clean kettlebell swing in a gorgeous, modern wellness-athletic studio flooded with soft morning natural light.
*   **Implementation:** Bind this as the primary hero section graphic or rich card on the home page above the fold to represent our value proposition instantly.

### 2.3 Product Dashboard Preview Mockup
*   **File Path:** `/home/team/shared/assets/dashboard-preview.png`
*   **Design Vibe:** A sleek modern tablet (iPad) mockup resting on a dark slate green marble desk showing a preview of the interactive Workout Tracker, Recovery checklists, and Meal Planning prompts.
*   **Implementation:** Display this graphic on the landing page near the "$49 Blueprint Paid Tier Offer Section" to provide a highly tangible visual representation of what customers purchase.

### 2.4 Quiz Baseline Report Header
*   **File Path:** `/home/team/shared/assets/quiz-header.png`
*   **Design Vibe:** Abstract organic/geometric science lines in dark slate green with a glowing electric mint-coral gradient.
*   **Implementation:** Use this as the main banner header image inside the personalized longevity assessment PDF report template.

---

## 3. Core Product Blueprint: "Forge40 Longevity Dashboard"
Our primary high-converting paid product ($49 Blueprint) has been fully engineered as an interactive Excel workbook, designed to be easily downloaded and imported into Google Sheets or Notion by the user.

### 3.1 Template Location
*   **File Path:** `/home/team/shared/templates/Forge40_Longevity_Dashboard.xlsx`
*   **Repository Location:** `templates/Forge40_Longevity_Dashboard.xlsx`

### 3.2 Spreadsheet Layout & Architecture
The workbook consists of 4 distinct, highly styled tabs utilizing the Forge40 brand guidelines:

#### Tab 1: **Longevity Dashboard** (Master Hub)
*   **Goal:** Serve as the central welcome terminal, baseline calculator, and progress visualization center.
*   **Features:**
    *   **Interactive Progress Cards (KPIs):** Real-time auto-calculation of *Workouts Completed* (`COUNT` formula pointing to Tab 2), *Weekly Habit Completion %* (`AVERAGE` formula pointing to Tab 3), and *Joint Comfort Index %* (auto-averaging RPE & pain scores).
    *   **Longevity Baselines Log:** Tracking of 7 critical healthspan biomarkers (Resting Heart Rate, Grip Strength, VO2 Max, Passive Hang, Single-Leg Balance, SMM, and Joint ROM) with target score guides.
    *   **Hybrid Premium Coaching Card:** Up-sell block to the $149 coaching tier containing active form upload links and consultation guides.

#### Tab 2: **Workout Tracker (40+)** (Overload Log)
*   **Goal:** Enable easy, progressive strength logging formatted for injury prevention.
*   **Features:**
    *   **Pre-configured Tracks:** Kettlebell, Bodyweight, and Barbell/DB programs.
    *   **Safety Columns:** Explicit inputs for Set x Reps, **RPE (Rate of Perceived Exertion, targeting safety zone 7-9)**, and a **Joint Comfort Rating (1–10)** to flag joint wear early.
    *   *Includes pre-filled mock progression rows to show the customer exactly how progressive overload should look in practice.*

#### Tab 3: **Recovery & Habits Checklist** (Longevity Checklist)
*   **Goal:** Track daily adherence to anti-aging behavioral triggers.
*   **Features:**
    *   Checklists for **Sleep (7.5h+ in cool/dark room)**, **Hydration (3L+)**, **Protein Target (1.6g-2.0g/kg)**, **Mobility Warmups (10m)**, **Zone 2 Cardio (30m+)**, and **Step Volume (8k+ steps)**.
    *   **Auto-Calculators:** Generates a real-time daily compliance score based on checked items (`SUM` and `IF` logic).

#### Tab 4: **AI Meal Planner Prompts** (AI Co-Pilot)
*   **Goal:** Give users elite anti-inflammatory nutritional templates instantly via ChatGPT/Claude.
*   **Features:**
    *   **Copy-Paste Prompt 1:** High-Protein & Anti-Inflammatory Longevity Menu (Sarcopenia prevention + connective tissue/collagen synthesis).
    *   **Copy-Paste Prompt 2:** Busy Executive Prep Playbook (Glucose control, low prep-time, Sunday batch cooking plan).
    *   **Copy-Paste Prompt 3:** Joint Reconstruction Menu (Polyphenols, Zinc, Magnesium, connective tissue remodeling).

---

## 4. Instructions for Developer Integration (`agent-developer`)

To publish a world-class landing page and high-converting funnel, please implement the following UI details using the assets and branding guidelines provided:

1.  **Funnel Visuals:**
    *   Apply the Primary color (`#132E27`) for all headers, footer blocks, and dominant card panels to command a premium aesthetic.
    *   Apply the Accent color (`#FF5A36`) as the call-to-action (CTA) button background color. CTAs should glow with vitality!
    *   Embed `/home/team/shared/assets/hero-banner.png` inside your Hero container.
    *   Embed `/home/team/shared/assets/dashboard-preview.png` next to the Checkout form card or features breakdown for "The Blueprint".

2.  **Assessment Quiz Reports:**
    *   For the personalized baselines PDF/HTML report, use `/home/team/shared/assets/quiz-header.png` as the top design header.
    *   Apply our typography styles (bold geometric headers with Inter body) to keep the reports highly polished, readable, and athletic.

3.  **Delivery of the $49 Dashboard:**
    *   Upon successful Stripe checkout for "The Blueprint", the page must securely serve `/home/team/shared/templates/Forge40_Longevity_Dashboard.xlsx` as a direct download.
    *   Provide instructions explaining how the user can upload this `.xlsx` file directly into Google Sheets or Microsoft Excel with 1 click.

---
*For any visual style iterations, color adjustments, or dashboard modifications, contact the designer loop immediately.*
