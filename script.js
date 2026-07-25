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

    let qrImage = qrBox.querySelector("img");

    if (qrImage) {

        let link = document.createElement("a");

        link.href = qrImage.src;

        link.download = "QRCode.png";

        link.click();

    }

});