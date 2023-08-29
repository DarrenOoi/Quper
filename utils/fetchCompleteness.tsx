export const fetchCompleteness = async (url: string) => {
  try {
    const response = await fetch('http://localhost:5000/completeness', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: url }),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('this is completeness:' + responseData.result);
      return responseData.result;
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
    return null;
  }
};