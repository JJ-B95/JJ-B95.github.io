var previewImages = document.getElementsByClassName('previewImages');

function revealPreview(c) {
  previewImages[c].style.visibility = "visible";
}

function hidePreview(c) {
  previewImages[c].style.visibility = "hidden";
}
