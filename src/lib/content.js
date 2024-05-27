// file: src/lib/content.js
// version: 1.0.0

import {
    writeFile
} from 'node:fs/promises';
import {
    PUBLIC_UPLOADS_DIR
} from '$env/static/public';

export async function uploadContent(file, filename) {
    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    await writeFile(`${PUBLIC_UPLOADS_DIR}/${filename}`, bytes);
}