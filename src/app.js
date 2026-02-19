const readinessItems = [
  {
    title: "Partner Incentives & Funding Approved",
    weight: 5
  },
  {
    title: "Joint Customer Target Identified",
    weight: 4
  },
  {
    title: "Microsoft Solution Play Alignment",
    weight: 3
  },
  {
    title: "Co-Sell Motion + Timeline Defined",
    weight: 4
  },
  {
    title: "Field Seller Engagement Scheduled",
    weight: 2
  }
];

const priorityScores = {
  High: 3,
  Medium: 2,
  Low: 1
};

const timelineScores = {
  "Now": 3,
  "Next 30 Days": 2,
  "This Quarter": 1
};

const fundingScores = {
  "Funding Available": 3,
  "Not Yet": 1
};

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

  document.getElementById("score").innerText = total;
}

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
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select id="timeline-${index}">
          <option>Now</option>
          <option>Next 30 Days</option>
          <option>This Quarter</option>
        </select>

        <select id="funding-${index}">
          <option>Funding Available</option>
          <option>Not Yet</option>
        </select>
      </div>
    `;

    container.appendChild(div);
  });

  // Attach listeners
  readinessItems.forEach((_, index) => {
    ["priority", "timeline", "funding"].forEach((type) => {
      document
        .getElementById(`${type}-${index}`)
        .addEventListener("change", calculateScore);
    });
  });

  calculateScore();
}

renderReadiness();
