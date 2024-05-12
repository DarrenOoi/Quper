import { NextApiRequest, NextApiResponse } from 'next';

export default async function healthRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const response = await fetch('http://34.28.198.83:8000/health');

      if (response.ok) {
        const responseData = await response.json();
        res.status(200).json({ result: responseData.status });
      }
    } catch (error) {
      console.error('Error fetching from GCP api:', error);
      res.status(500).json({
        error: 'An error occurred while fetching from the GCP API',
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
