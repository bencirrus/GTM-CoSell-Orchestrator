# GTM-CoSell-Orch
GTM & Co‑Sell Orchestration Hub (PWA)
A lightweight Progressive Web App designed to help partners plan, track, and execute Microsoft‑aligned Go‑To‑Market (GTM) and co‑sell motions.
Built using real, publicly available Microsoft partner ecosystem concepts including:

Microsoft Co‑Sell Lifecycle

Azure Marketplace & AppSource GTM requirements

Microsoft Cloud Partner Program (MCPP)

Microsoft Solution Plays

Incentive & funding programs

This project demonstrates how a Partner Development Manager (PDM) can simplify complex partner motions, improve readiness, and accelerate joint execution with partners like Avanade and Accenture.

🎯 Purpose of This Project
This PWA was created to showcase:

Strategic understanding of Microsoft’s partner ecosystem

Familiarity with co‑sell motions, GTM planning, and readiness workflows

Ability to translate partner strategy into actionable tooling

Product thinking and technical execution

A practical example of how a PDM could streamline partner orchestration

It is intentionally lightweight, offline‑capable, and easy to extend — mirroring the kind of internal enablement tools that help partners move faster.

✨ Key Features
1. GTM Campaign Planner
Plan campaigns aligned to Microsoft solution areas and solution plays.
Each campaign includes:

Solution area

Industry focus

Required GTM assets

Readiness checks

Launch timeline

2. Co‑Sell Readiness Checklist
Based on real Microsoft co‑sell requirements:

Marketplace listing

Co‑sell eligibility

Sales collateral

Compliance requirements

Field readiness

3. Incentives & Funding Tracker
Includes real Microsoft incentive categories:

Azure consumption incentives

Modern Work seat incentives

Business Applications incentives

Co‑op marketing funds

Partner Investment Engine (PIE)

4. Launch Excellence Dashboard
Visualizes readiness across:

Assets

Training

Incentives

Marketplace status

Co‑sell eligibility

5. Offline‑First PWA
Service worker caching

Installable on desktop or mobile

Works without network connectivity

/public
  index.html
  manifest.json
  service-worker.js

/src
  app.js
  data/
    sampleData.json
  components/
    CampaignPlanner.js
    CoSellChecklist.js
    IncentivesTracker.js

🧩 Technologies Used
Vanilla JavaScript

TailwindCSS

Service Worker API

IndexedDB‑friendly structure (optional extension)

JSON‑based data model

No backend required — the app runs entirely client‑side.

📊 Sample Data
The app includes real Microsoft partner ecosystem concepts such as:

Solution Areas

Co‑Sell Lifecycle

Co‑Sell Eligibility Requirements

GTM Asset Types

Incentive Programs

Microsoft Solution Plays

Example campaigns for Avanade & Accenture

All sample data is stored in src/data/sampleData.json.

🚀 Running Locally
Clone the repository

Open the project folder

Serve the /public directory using any static server (e.g., VS Code Live Server)

Open http://localhost:5500 (or your server’s port)

Install the PWA if prompted

🧭 Why This Project Matters for a PDM Role
This PWA demonstrates:

Strategic Alignment
It reflects real Microsoft GTM and co‑sell motions, showing understanding of:

Partner Center workflows

Marketplace requirements

Solution area priorities

Incentive alignment

Readiness frameworks

Partner Empathy
It solves real partner pain points:

Fragmented GTM planning

Unclear co‑sell requirements

Difficulty tracking readiness

Incentive confusion

Lack of unified visibility

Operational Excellence
It mirrors the rhythm of business (ROB):

Campaign planning

Readiness tracking

QBR/MBR preparation

Field enablement

Technical Fluency
It shows the ability to:

Build lightweight tools

Structure partner data

Create intuitive workflows

Use modern web capabilities (PWA)

📌 Future Enhancements (Optional Roadmap)
Add localStorage/IndexedDB persistence

Add “New Campaign” creation form

Add partner‑specific dashboards (Avanade, Accenture)

Add exportable QBR summaries

Add notifications for ROB milestones

Add Azure AD authentication (if hosted on Azure Static Web Apps)

📣 Attribution
This project uses publicly available Microsoft partner ecosystem concepts from:

Microsoft Cloud Partner Program documentation

Azure Marketplace & AppSource GTM guides

Microsoft Co‑Sell program documentation

Microsoft Solution Plays (2024–2025)

No proprietary or confidential information is used.
