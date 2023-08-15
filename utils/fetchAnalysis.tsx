export const fetchAnalysis = async (url: string) => {
  try {
    const response = await fetch('http://localhost:5000/analyse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: url }),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('this is analysis:' + responseData.result);
      return responseData.result;
    } else {
      console.error(
        'Request failed (analysis):',
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
