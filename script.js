const input = document.getElementById("qr-input");
const generateBtn = document.getElementById("generate-btn");
const qrBox = document.getElementById("qr-box");
const downloadBtn = document.getElementById("download-btn");

generateBtn.addEventListener("click", () => {

    let text = input.value.trim();

    if (text === "") {
        alert("Please enter text or URL.");
        return;
    }

    qrBox.innerHTML = "";

    new QRCode(qrBox, {
        text: text,
        width: 200,
        height: 200
    });

    downloadBtn.style.display = "block";

});
downloadBtn.addEventListener("click", () => {

    const canvas = qrBox.querySelector("canvas");

    if (!canvas) {
        alert("Please generate a QR Code first.");
        return;
    }

    const link = document.createElement("a");

    link.download = "QRCode.png";

    link.href = canvas.toDataURL("image/png");

    link.click();

});