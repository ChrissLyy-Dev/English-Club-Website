const originalText = "Click an image below to display it here.";
const originalAriaLabel = "No photo selected. Click an image below.";

function getImageEls() {
  const imageDiv = document.getElementById("image");
  if (!imageDiv) return null;
  const img = imageDiv.querySelector(".selected-image");
  const label = imageDiv.querySelector(".image-label");
  if (!img || !label) return null;
  return { imageDiv: imageDiv, img: img, label: label };
}

function showImage(previewPic) {
  const els = getImageEls();
  if (!els) return;
  els.img.src = previewPic.src;
  els.img.hidden = false;
  els.label.textContent = previewPic.alt;
  els.imageDiv.classList.add("has-image", "locked");
  els.imageDiv.setAttribute("aria-label", previewPic.alt);
}

function showDefault() {
  const els = getImageEls();
  if (!els) return;
  els.img.hidden = true;
  els.img.removeAttribute("src");
  els.label.textContent = originalText;
  els.imageDiv.classList.remove("has-image", "locked");
  els.imageDiv.setAttribute("aria-label", originalAriaLabel);
}

function selectPreview(preview) {
  showImage(preview);
}

function clearSelection() {
  showDefault();
}

function goToMaterial(preview) {
  const link = preview.dataset.link;
  if (link) {
    window.location.href = link;
  }
}

function handleImageError(event) {
  const imgEl = event.target;
  if (!(imgEl instanceof HTMLImageElement)) return;

  if (imgEl.classList.contains("selected-image")) {
    const imageDiv = imgEl.closest("#image");
    if (!imageDiv) return;
    imgEl.hidden = true;
    imageDiv.classList.remove("has-image", "locked");
    const label = imageDiv.querySelector(".image-label");
    if (label) label.textContent = "Photo pending permission from English Club members.";
    return;
  }

  if (imgEl.classList.contains("preview")) {
    imgEl.hidden = true;
    const card = imgEl.closest(".gallery-item");
    if (card && !card.querySelector(".missing-photo")) {
      const placeholder = document.createElement("div");
      placeholder.className = "missing-photo";
      placeholder.textContent = "Pending permission";
      card.insertBefore(placeholder, imgEl.nextSibling);
    }
  }
}

function initGallery() {
  document.addEventListener("error", handleImageError, true);

  const imageDiv = document.getElementById("image");
  if (imageDiv) {
    imageDiv.setAttribute("aria-label", originalAriaLabel);
  }

  const previews = document.querySelectorAll(".preview");
  previews.forEach(function (preview) {
    preview.setAttribute("tabindex", "0");
    preview.addEventListener("dblclick", function () { goToMaterial(preview); });
    preview.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        goToMaterial(preview);
      } else if (event.key === " " || event.key === "Spacebar") {
        event.preventDefault();
        selectPreview(preview);
      }
    });
  });

  document.addEventListener("click", function (event) {
    const card = event.target.closest(".gallery-item");
    const preview = card ? card.querySelector(".preview") : null;
    if (preview) {
      selectPreview(preview);
    } else {
      clearSelection();
    }
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  const toggleButton = document.getElementById("theme-toggle");
  if (!toggleButton) return;

  const isDark = theme === "dark";
  toggleButton.setAttribute("aria-pressed", String(isDark));
  toggleButton.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  toggleButton.querySelector(".theme-toggle-icon").textContent = isDark ? "☀️" : "🌙";
}

function initThemeToggle() {
  const toggleButton = document.getElementById("theme-toggle");
  if (!toggleButton) return;

  applyTheme(document.documentElement.getAttribute("data-theme") || "light");

  toggleButton.addEventListener("click", function () {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    applyTheme(isDark ? "light" : "dark");
  });
}

window.addEventListener("load", initGallery);
window.addEventListener("load", initThemeToggle);
