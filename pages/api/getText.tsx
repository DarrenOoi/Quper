import { NextApiRequest, NextApiResponse } from 'next';
import * as cheerio from 'cheerio';

export default async function getText(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const url = 'https://cheerio.js.org/docs/basics/loading';
    const response = await fetch(url);
    const fetchedText = await response.text();
    const textContent = cheerio.load(fetchedText)('body').text();

    const $ = cheerio.load(fetchedText);
    const headers = $('body')
      .find('h1, h2, h3, h4, h5, h6')
      .map((index, element) => $(element).text())
      .get();

    console.log(headers);

    res.status(200).json({ message: textContent });
  } catch (error) {
    console.error('Error getting text:', error);
    res.status(500).json({ error: 'An error occurred while getting text' });
  }
}
