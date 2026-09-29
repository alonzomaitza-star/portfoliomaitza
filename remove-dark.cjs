const fs = require('fs');
const files = [
    'c:/Insano-landing/src/components/portfolio-cv/mait/CV-MAIT.astro',
    'c:/Insano-landing/src/components/portfolio-cv/mait/ProjectModal.astro'
];
for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/dark:[^\s\"'>]+/g, '');
    fs.writeFileSync(file, content);
}
