export const fetchTimeliness = async (url: string) => {
  try {
    const response = await fetch(
      'https://34.28.198.83:8000/timeliness',
      // 'https://quper-backend.onrender.com/timeliness',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      console.log('this is timeliness:' + responseData.result);

      const actualData = JSON.parse(responseData.result);
      return actualData;
    } else {
      console.error(
        'Request failed (timeliness):',
        response.status,
        response.statusText
      );
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};
