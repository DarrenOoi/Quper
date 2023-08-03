import { NextApiRequest, NextApiResponse } from 'next';

export default async function getText(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const url = 'https://httpbin.org/encoding/utf8';
    const response = await fetch(url);
    const fetchedText = await response.text();

    res.status(200).json({ message: fetchedText });
  } catch (error) {
    console.error('Error getting text:', error);
    res.status(500).json({ error: 'An error occurred while getting text' });
  }
}