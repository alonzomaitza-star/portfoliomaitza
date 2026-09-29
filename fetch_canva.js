const https = require('https');
const fs = require('fs');

const url = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg';
https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    if (res.statusCode !== 200) {
        console.error('Failed to download: ' + res.statusCode);
        return;
    }
    const file = fs.createWriteStream('c:\\Insano-landing\\public\\images\\canva.svg');
    res.pipe(file);
    file.on('finish', () => {
        file.close();
        console.log('Download completed');
    });
}).on('error', (err) => {
    console.error('Error: ', err.message);
});
