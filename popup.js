document.addEventListener('DOMContentLoaded', function () {
  const sites = ['reddit', 'facebook', 'twitter', 'x'];

  chrome.storage.local.get(sites, (result) => {
    sites.forEach((site) => {
      const checkbox = document.getElementById(site);
      if (checkbox) {
        checkbox.checked = result[site] !== false; // default to enabled
        checkbox.addEventListener('change', () => {
          chrome.storage.local.set({ [site]: checkbox.checked });
        });
      }
    });
  });
});
