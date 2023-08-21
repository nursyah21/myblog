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

  // see css code in /src/styles/base.css
  const lightInput = "lightInput";
  const lightLabel = "lightLabel";
  const darkInput = "darkInput";
  const darkLabel = "darkLabel";

  if (themeValue == "light") {
    ".label .input .textarea".split(" ").forEach(j => {
      document.querySelectorAll(j).forEach(e => {
        if (j == ".label") {
          e.classList.remove(darkLabel);
          e.classList.add(lightLabel);
        } else {
          e.classList.remove(darkInput);
          e.classList.add(lightInput);
        }
      });
    });
  } else {
    ".label .input .textarea".split(" ").forEach(j => {
      document.querySelectorAll(j).forEach(e => {
        if (j == ".label") {
          e.classList.add(darkLabel);
          e.classList.remove(lightLabel);
        } else {
          e.classList.add(darkInput);
          e.classList.remove(lightInput);
        }
      });
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
