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

document.getElementById("topLeft").addEventListener("input", applyBorderRadius);
document.getElementById("topRight").addEventListener("input", applyBorderRadius);
document.getElementById("bottomLeft").addEventListener("input", applyBorderRadius);
document.getElementById("bottomRight").addEventListener("input", applyBorderRadius);


function copyToClipboard() {
  let cssText = document.getElementById('cssOutput').textContent;
  navigator.clipboard.writeText(cssText).then(() => {
    alert('コピーしました');
  }).catch((error) => {
    console.error('Failed to copy: ', error);
  });
}

document.getElementById("copyButton").addEventListener("click", copyToClipboard);
