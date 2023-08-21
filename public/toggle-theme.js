const primaryColorScheme = ""; // "light" | "dark"

// Get theme data from local storage
const currentTheme = localStorage.getItem("theme");

function getPreferTheme() {
  // return theme value in local storage if it is set
  if (currentTheme) return currentTheme;

  // return primary color scheme if it is set
  if (primaryColorScheme) return primaryColorScheme;

  // return user device's prefer color scheme
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let themeValue = getPreferTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);
  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);
  console.log(themeValue);
  if (themeValue == "light") {
    const lightClassInput = "text-gray-700 bg-white border-gray-200";
    const lightClassLabel = "text-gray-700";
    document
      .querySelectorAll(".label")
      .forEach(e => e.classList.remove("text-gray-200"));

    document.querySelectorAll(".input").forEach(e => {
      lightClassInput.split(" ").forEach(i => {
        e.classList.add(i);
      });
    });
    document.querySelectorAll(".textarea").forEach(e => {
      lightClassInput.split(" ").forEach(i => {
        e.classList.add(i);
      });
    });
  } else {
    document
      .querySelectorAll(".label")
      .forEach(e => e.classList.add("text-gray-200"));
    document.querySelectorAll(".input").forEach(e => {
      e.classList.add("bg-gray-800");
      e.classList.add("text-gray-300");
      e.classList.add("border-gray-600");
    });
    document.querySelectorAll(".textarea").forEach(e => {
      e.classList.add("bg-gray-800");
      e.classList.add("text-gray-300");
      e.classList.add("border-gray-600");
    });
  }
}

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  // set on load so screen readers can get the latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  document.querySelector("#theme-btn")?.addEventListener("click", () => {
    themeValue = themeValue === "light" ? "dark" : "light";
    setPreference();
  });
};

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });
