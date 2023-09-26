export const fetchCompleteness = async (url: string) => {
  try {
    const response = await fetch(
      'https://34.123.198.64:8000/completeness',
      // 'https://quper-backend.onrender.com/completeness',
      // 'http://localhost:5000/completeness',

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
      const actualData = JSON.parse(responseData.result);
      console.log('this is completeness:' + responseData.result);
      if (actualData === false) {
        return false;
      } else {
        return actualData;
      }
    } else {
      console.error(
        'Request failed (completeness):',
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
