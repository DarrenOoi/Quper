export const fetchAvailability = async (url: string) => {
  try {
    const response = await fetch('http://34.72.32.23:8000/availability', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: url }),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('this is availability:' + responseData.result);
      return responseData.result;
    } else {
      console.error(
        'Request failed (availability):',
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
