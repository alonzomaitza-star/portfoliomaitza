/**
 * Post-build script to sanitize Netlify function names.
 * Renames any files/directories containing '@' in their names
 * to prevent Netlify from rejecting them during deployment.
 */
import { readdirSync, renameSync, existsSync } from 'fs';
import { join } from 'path';

function sanitizeName(name) {
    return name.replace(/[^a-zA-Z0-9._-]/g, '-').replace(/-+/g, '-');
}

function sanitizeDirectory(dir) {
    if (!existsSync(dir)) return;

    try {
        const items = readdirSync(dir, { withFileTypes: true });
        for (const item of items) {
            // Check both files and directories for invalid characters
            if (/@/.test(item.name)) {
                const oldPath = join(dir, item.name);
                const newName = sanitizeName(item.name);
                const newPath = join(dir, newName);

                if (!existsSync(newPath)) {
                    renameSync(oldPath, newPath);
                    console.log(`[sanitize] Renamed: ${item.name} → ${newName}`);
                } else {
                    console.log(`[sanitize] Target already exists, skipping: ${item.name}`);
                }
            }

            // Recurse into subdirectories
            if (item.isDirectory()) {
                const subDir = join(dir, item.name);
                if (existsSync(subDir)) {
                    sanitizeDirectory(subDir);
                }
            }
        }
    } catch (err) {
        console.error(`[sanitize] Error processing ${dir}:`, err.message);
    }
}

// Scan all known Netlify function/build output directories
const cwd = process.cwd();
const dirs = [
    join(cwd, '.netlify', 'build'),
    join(cwd, '.netlify', 'v1', 'functions'),
    join(cwd, 'netlify', 'functions'),
    join(cwd, 'dist'),
];

console.log('[sanitize] Scanning for invalid function names...');
for (const dir of dirs) {
    sanitizeDirectory(dir);
}
console.log('[sanitize] Done.');
