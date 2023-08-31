function applyBorderRadius() {
  let topLeft = document.getElementById("topLeft").value;
  let topRight = document.getElementById("topRight").value;
  let bottomLeft = document.getElementById("bottomLeft").value;
  let bottomRight = document.getElementById("bottomRight").value;

  let box = document.getElementById("previewBox");
  box.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;

  let cssText = `border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;`;
  document.getElementById('cssOutput').textContent = cssText;
}

document.getElementById("applyButton").addEventListener("click", applyBorderRadius);

