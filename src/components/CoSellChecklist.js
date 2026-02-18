export function renderCoSellChecklist(container, data) {
  const { coSellLifecycle, coSellRequirements } = data;

  container.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">Co-Sell Readiness</h2>

    <div class="mb-4">
      <h3 class="font-semibold mb-2 text-sm text-gray-700">Lifecycle</h3>
      <ol class="list-decimal list-inside space-y-1 text-sm">
        ${coSellLifecycle
          .map(
            (s) =>
              `<li><span class="font-medium">${s.stage}:</span> ${s.description}</li>`
          )
          .join("")}
      </ol>
    </div>

    <div>
      <h3 class="font-semibold mb-2 text-sm text-gray-700">Eligibility Requirements</h3>
      <ul class="list-disc list-inside space-y-1 text-sm">
        ${coSellRequirements.map((r) => `<li>${r}</li>`).join("")}
      </ul>
    </div>
  `;
}
