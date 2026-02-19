console.log("✅ Co-Sell Readiness Planner Loaded");

/* Readiness Items */
const readinessItems = [
  { title: "Partner Incentives & Funding Approved", weight: 5 },
  { title: "Joint Customer Target Identified", weight: 4 },
  { title: "Microsoft Solution Play Alignment", weight: 3 },
  { title: "Co-Sell Motion + Timeline Defined", weight: 4 },
  { title: "Field Seller Engagement Scheduled", weight: 2 }
];

/* Scoring Models */
const priorityScores = { High: 3, Medium: 2, Low: 1 };
const timelineScores = { Now: 3, "Next 30 Days": 2, "This Quarter": 1 };
const fundingScores = { "Funding Available": 3, "Not Yet": 1 };

const maxScorePerItem = 5 * 3 * 3 * 3; // max possible
const maxTotalScore = readinessItems.length * maxScorePerItem;

/* Calculate Score + Progress */
function calculateScore() {
  let total = 0;

  readinessItems.forEach((item, index) => {
    const priority = document.getElementById(`priority-${index}`).value;
    const timeline = document.getElementById(`timeline-${index}`).value;
    const funding = document.getElementById(`funding-${index}`).value;

    const score =
      item.weight *
      priorityScores[priority] *
      timelineScores[timeline] *
      fundingScores[funding];

    total += score;
  });

  /* Update score display */
  document.getElementById("score").innerText = total;

  /* Progress % */
  const percent = Math.round((total / maxTotalScore) * 100);

  document.getElementById("progress-percent").innerText = percent + "%";
  document.getElementById("progress-fill").style.width = percent + "%";
}

/* Render Planner UI */
function renderReadiness() {
  const container = document.getElementById("readiness-list");

  readinessItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "readiness-item";

    div.innerHTML = `
      <label>${item.title}</label>

      <div class="select-row">
        <select id="priority-${index}">
          <option>High</option>
          <option selected>Medium</option>
          <option>Low</option>
        </select>

        <select id="timeline-${index}">
          <option selected>Now</option>
          <option>Next 30 Days</option>
          <option>This Quarter</option>
        </select>

        <select id="funding-${index}">
          <option selected>Funding Available</option>
          <option>Not Yet</option>
        </select>
      </div>
    `;

    container.appendChild(div);
  });

  /* Add change listeners */
  readinessItems.forEach((_, index) => {
    ["priority", "timeline", "funding"].forEach((type) => {
      document
        .getElementById(`${type}-${index}`)
        .addEventListener("change", calculateScore);
    });
  });

  calculateScore();
}

/* Load after DOM ready */
window.addEventListener("DOMContentLoaded", renderReadiness);
