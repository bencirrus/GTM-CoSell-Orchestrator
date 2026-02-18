export function renderIncentives(container, data) {
  const { incentives } = data;

  container.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">Incentives & Funding</h2>

    <div class="space-y-3">
      ${incentives
        .map(
          (i) => `
        <div class="bg-white shadow rounded p-3 flex justify-between items-center">
          <div>
            <p class="font-medium text-sm">${i.name}</p>
            <p class="text-xs text-gray-500">${i.type}</p>
          </div>

          <span class="text-xs px-2 py-1 rounded ${
            i.status === "Active" || i.status === "Available"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }">
            ${i.status}
          </span>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}
