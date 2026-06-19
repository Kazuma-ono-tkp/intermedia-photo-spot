import { put } from '@vercel/blob';

export const config = {
  api: { bodyParser: false },
};

async function readRequestBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const contentType = req.headers['content-type'] || 'image/png';
    const rawName = req.headers['x-filename'] || `intermedia-photo-${Date.now()}.png`;
    const safeName = String(rawName).replace(/[^a-zA-Z0-9._-]/g, '_');
    const pathname = `intermedia-photo-spot/${Date.now()}-${safeName}`;
    const body = await readRequestBody(req);
    if (!body || body.length === 0) return res.status(400).json({ error: 'No image body received' });
    const maxBytes = 8 * 1024 * 1024;
    if (body.length > maxBytes) return res.status(413).json({ error: 'Image too large. Please reduce output size.' });
    const blob = await put(pathname, body, { access: 'public', contentType, addRandomSuffix: false });
    return res.status(200).json({ url: blob.url, pathname: blob.pathname, size: body.length });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Upload failed', message: error?.message || String(error) });
  }
}
