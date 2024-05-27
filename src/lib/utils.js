// file: src/lib/utils.js
// version: 1.0.0

import crypto from 'crypto';
import {
    PUBLIC_DOWNLOAD_SECRET
} from '$env/static/public';

export function generateDownloadLink(uploadId, userId) {
    const hash = crypto.createHmac('sha256', PUBLIC_DOWNLOAD_SECRET)
        .update(`${uploadId}-${userId}`)
        .digest('hex');
    return `/downloads/${uploadId}?token=${hash}`;
}