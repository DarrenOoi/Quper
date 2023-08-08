import { NextApiRequest, NextApiResponse } from 'next';
import * as cheerio from 'cheerio';

export default async function getText(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { url } = req.body;
    const response = await fetch(url);
    const fetchedText = await response.text();
    const textContent = cheerio.load(fetchedText)('body').text();
    // console.log(textContent);
    // const $ = cheerio.load(fetchedText);
    // const filteredContent = $('body')
    //   .find('h1, h2, h3, h4, h5, h6, p')
    //   .map((index, element) => $(element).text())
    //   .get();

    res.status(200).json({ message: textContent });
  } catch (error) {
    console.error('Error getting text:', error);
    res.status(500).json({ error: 'An error occurred while getting text' });
  }
}
