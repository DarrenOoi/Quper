export const fetchHealth = async () => {
  try {
    const response = await fetch(`/api/healthRoute`);

    if (response.ok) {
      const responseData = await response.json();
      console.log('health check:' + responseData.result);
    } else {
      console.error(
        'Request failed (health):',
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
