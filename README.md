# Forge40 - Strength & Longevity Coaching for 40+

Welcome to the official repository for **Forge40**, an AI-assisted strength and longevity coaching system designed for busy adults aged 40+ who want to build sustainable strength, prevent injury, and optimize their healthspan. 

This repository acts as the core development environment for our web platform, user dashboard, and baseline reporting engine.

---

## 🚀 Value Proposition
Forge40 bridges the gap between static PDFs and expensive personal trainers. We combine interactive AI coaching with tailored workout libraries, mobility templates, and habit tracking, specifically optimized for the physiological needs of adults aged 40–60 (prioritizing joint health, sarcopenia prevention, and metabolic vitality).

## 📊 Product Ecosystem & Revenue Model
Forge40 is structured as a high-converting, tiered stack:
1.  **Free Lead Magnet:** Longevity & Mobility Assessment Quiz (generates personalized baseline reports).
2.  **The Blueprint ($49, One-Time):** Interactive "Forge40 Longevity Dashboard" (Notion/Google Sheets habit tracker, sleep optimization templates, and customized AI meal-planning prompts).
3.  **The Membership ($29/month or $199/year):** Full library access (12-week progressive strength programs, kettlebell/bodyweight tracks, mobility routines, and unlimited access to the **Forge40 AI Coach** web chatbot).
4.  **Hybrid Coaching ($149/month):** Premium tier offering weekly AI-driven check-ins backed by monthly certified human coach form reviews and video consultations.

---

## 🎨 Brand Style Guide & Identity
The Forge40 visual brand is designed around a **modern athletic/medical longevity style**: dark slate green base, clean geometric typography, and vibrant coral accents.

*   **Primary (Dark Slate Green):** `#132E27` (Trust, scientific depth, medical-grade health).
*   **Secondary (Muted Sage Green):** `#EBF1EE` (Clean card backgrounds, borders, and highlights).
*   **Accent (Vibrant Coral/Sunset Orange):** `#FF5A36` (Energy, strength, "forged" vitality).
*   **Typography:** Bold geometric Sans-Serif (e.g., `Montserrat`, `Archivo`, or `Inter` headings) paired with highly readable body text (`Inter` or `Roboto`).

For detailed implementation instructions, see **[BRANDING.md](BRANDING.md)** in this repository or in the shared team directory `/home/team/shared/BRANDING.md`.

---

## 📁 Repository Structure
*   `templates/Forge40_Longevity_Dashboard.xlsx`: The core interactive $49 Blueprint product. This is a highly styled, pre-formulated Excel sheet that clients can import with 1-click into Google Sheets or Excel to track their workouts, log daily recovery habits, and copy advanced meal-prep AI prompts.
*   `BRANDING.md`: Extensive branding guidelines, asset directory, and developer integration steps.
*   `assets/`: (Mocked in the shared folder `/home/team/shared/assets/`) contains generated high-resolution icons, logos, hero banners, and PDF baseline report headers.

---

## 🔧 Developer Integration Checklist
For the web developer (`agent-developer`), please ensure the following when implementing the landing page, quiz flow, and checkout redirects:
1.  **Port binding:** Set up the main production server to serve on **port 3000** bound publicly to all interfaces.
2.  **Asset loading:** Embed branding files directly from the shared assets library:
    *   **Logo:** `logo.png`
    *   **Main Hero Image:** `hero-banner.png`
    *   **Blueprint Product Preview:** `dashboard-preview.png`
    *   **Quiz Baseliner Header:** `quiz-header.png`
3.  **Purchase Redirection:** Ensure that upon successful purchase of "The Blueprint", the server redirects the user to download `Forge40_Longevity_Dashboard.xlsx` instantly.

---
*Created and maintained by the Forge40 Team.*
