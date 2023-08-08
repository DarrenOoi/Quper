export const fetchAnalysis = async (text: string) => {
  try {
    const response = await fetch('http://localhost:5000/analyse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: text }),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('this is analysis:' + responseData);
      return responseData;
    } else {
      console.error(
        'Request failed (analysis):',
        response.status,
        response.statusText
      );
      return [];
    }
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
