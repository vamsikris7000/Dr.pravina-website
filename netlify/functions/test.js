exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Netlify functions are working!',
      timestamp: new Date().toISOString(),
      event: event.httpMethod
    })
  };
};
