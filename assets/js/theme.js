(() => {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");
  const label = button?.querySelector("[data-theme-label]");
  if (!button || !label) return;

  const preferenceKey = "portfolio-theme";

  try {
    const savedTheme = localStorage.getItem(preferenceKey);
    if (savedTheme === "light" || savedTheme === "dark") {
      root.dataset.theme = savedTheme;
    }
  } catch {
    // The system color preference remains available if storage is disabled.
  }

  const currentTheme = () =>
    root.dataset.theme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const updateButton = () => {
    const isDark = currentTheme() === "dark";
    button.setAttribute("aria-pressed", String(isDark));
    label.textContent = `Use ${isDark ? "light" : "dark"} mode`;
  };

  updateButton();
  button.addEventListener("click", () => {
    const nextTheme = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    try {
      localStorage.setItem(preferenceKey, nextTheme);
    } catch {
      // The selected theme still applies for the current page.
    }
    updateButton();
  });
})();
