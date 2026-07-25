const input = document.getElementById("qr-input");
const generateBtn = document.getElementById("generate-btn");
const downloadBtn = document.getElementById("download-btn");

const qr = new QRious({
    element: document.getElementById("qr-canvas"),
    size: 220,
    value: " "
});

// Generate QR
generateBtn.addEventListener("click", generateQR);

// Enter Key Support
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        generateQR();
    }
});

function generateQR() {

    const text = input.value.trim();

    if (text === "") {
        alert("Please enter text or URL.");
        return;
    }

    qr.value = text;

    downloadBtn.style.display = "block";

}

// Download PNG
downloadBtn.addEventListener("click", function () {

    const canvas = document.getElementById("qr-canvas");

    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");

    link.href = image;

    link.download = "QRCode.png";

    link.click();

});