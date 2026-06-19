import QRCode from 'qrcode';

export default async function handler(req, res) {
  try {
    const { data } = req.query;

    if (!data || typeof data !== 'string') {
      res.status(400).setHeader('content-type', 'text/plain; charset=utf-8');
      return res.end('Missing data');
    }

    const png = await QRCode.toBuffer(data, {
      type: 'png',
      width: 320,
      margin: 2,
      errorCorrectionLevel: 'M',
      color: {
        dark: '#111111',
        light: '#ffffff',
      },
    });

    res.setHeader('content-type', 'image/png');
    res.setHeader('cache-control', 'no-store, max-age=0');
    return res.status(200).send(png);
  } catch (error) {
    console.error(error);
    res.status(500).setHeader('content-type', 'text/plain; charset=utf-8');
    return res.end('QR generation failed');
  }
}
