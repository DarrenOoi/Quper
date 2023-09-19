export const fetchReadability = async (url: string) => {
  try {
    const response = await fetch(
      'https://quper-backend.onrender.com/readability',
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
      console.log('this is readability:' + responseData.result);
      return responseData.result;
    } else {
      console.error(
        'Request failed (readability):',
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
