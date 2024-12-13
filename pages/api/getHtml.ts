import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { file } = req.query;
  
  if (!file || typeof file !== 'string') {
    return res.status(400).send('File parameter is required');
  }

  try {
    const filePath = path.join(process.cwd(), 'branding', `${file}.html`);
    const html = fs.readFileSync(filePath, 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    res.status(404).send('File not found');
  }
}
