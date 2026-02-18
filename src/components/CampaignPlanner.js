export function renderCampaigns(container, data) {
  const { campaigns } = data;

  container.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">GTM Campaigns</h2>
    <div class="space-y-4">
      ${campaigns
        .map((c) => {
          const readinessScore =
            (c.readiness.marketplaceListing ? 1 : 0) +
            (c.readiness.coSellEligible ? 1 : 0) +
            (c.readiness.fieldTrainingComplete ? 1 : 0) +
            (c.readiness.incentivesAligned ? 1 : 0);

          const readinessLabel = `${readinessScore}/4 readiness checks passed`;

          return `
          <div class="bg-white shadow rounded p-4">
            <div class="flex justify-between items-center mb-2">
              <div>
                <h3 class="font-semibold text-lg">${c.name}</h3>
                <p class="text-sm text-gray-500">
                  ${c.solutionArea} • ${c.solutionPlay} • ${c.industry}
                </p>
              </div>
              <span class="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
                Launch: ${c.launchDate}
              </span>
            </div>

            <p class="text-sm mb-2"><strong>Assets:</strong> ${c.assets.join(", ")}</p>
            <p class="text-sm mb-2"><strong>Readiness:</strong> ${readinessLabel}</p>

            <div class="grid grid-cols-2 gap-2 text-xs">
              <span class="px-2 py-1 rounded ${c.readiness.marketplaceListing ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}">
                Marketplace Listing
              </span>
              <span class="px-2 py-1 rounded ${c.readiness.coSellEligible ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}">
                Co-Sell Eligible
              </span>
              <span class="px-2 py-1 rounded ${c.readiness.fieldTrainingComplete ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}">
                Field Training
              </span>
              <span class="px-2 py-1 rounded ${c.readiness.incentivesAligned ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}">
                Incentives Aligned
              </span>
            </div>
          </div>
        `;
        })
        .join("")}
    </div>
  `;
}
