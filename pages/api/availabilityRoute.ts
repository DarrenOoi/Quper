import { NextApiRequest, NextApiResponse } from 'next';

export default async function availabilityRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { url } = req.body;
    const https = require('https');
    const fetch = require('node-fetch');
    const agent = new https.Agent({ rejectUnauthorized: false });
    try {
      const response = await fetch('https://34.28.198.83:8000/availability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
        agent,
        timeout: 30000, // 30 seconds
      });

      if (response.ok) {
        const responseData = await response.json();
        // console.log(
        //   'this is availability from api folder:' + responseData.result
        // );
        res.status(200).json({ result: responseData.result });
      }
    } catch (error) {
      console.error('Error fetching from external api:', error);
      res.status(500).json({
        error: 'An error occurred while fetching from the external API',
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
