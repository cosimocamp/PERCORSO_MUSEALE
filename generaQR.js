const QRCode = require('qrcode');
const fs = require('fs');

// URL pubblico GitHub Pages
const baseUrl = "https://cosimocamp.github.io/PERCORSO_MUSEALE/";

// File HTML di ogni tappa
const pages = [
    "TAPPA_1/index.html",
    "TAPPA_2/index_2.html",
    "TAPPA_3/index_3.html",
    "TAPPA_4/index_4.html",
    "TAPPA_5/index_5.html",
    "TAPPA_6/index_6.html",
    "TAPPA_7/index_7.html"
];

// Genera QR code SVG per ogni pagina
pages.forEach((page, i) => {
    const url = baseUrl + page;
    const fileName = `QR_Tappa${i+1}.svg`;

    QRCode.toFile(fileName, url, {
        type: 'svg',
        width: 300,
        margin: 2
    }, (err) => {
        if (err) throw err;
        console.log(`QR generato: ${fileName} → ${url}`);
    });
});