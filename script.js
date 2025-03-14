document.getElementById("generate-btn").addEventListener("click", function () {
    let input = document.getElementById("qr-input").value.trim();
    let qrBox = document.getElementById("qr-box");
    let qrImage = document.getElementById("qr-image");
    
    if (input !== "") {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input)}`;
        qrBox.style.display = "block";
        qrBox.style.opacity = "1";
    } else {
        alert("Please enter a valid URL or text!");
    }
});

document.getElementById("copy-btn").addEventListener("click", function () {
    let qrImage = document.getElementById("qr-image");

    fetch(qrImage.src)
        .then(response => response.blob())
        .then(blob => {
            let item = new ClipboardItem({ "image/png": blob });
            navigator.clipboard.write([item]).then(() => {
                alert("QR Code copied to clipboard!");
            });
        })
        .catch(() => {
            alert("Failed to copy QR Code!");
        });
});
