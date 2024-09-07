// functions/api.js

const code_base_questions = require('./output_based.js'); // Use CommonJS syntax

exports.handler = async function (event, context) {
  // Define CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Allow requests from any origin
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET', // Allow specific HTTP methods
    'Access-Control-Allow-Headers': 'Content-Type' // Allow specific headers
  };

  if (event.httpMethod === 'OPTIONS') {
    // Handle CORS preflight requests
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight' })
    };
  }

  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(code_base_questions) // Send data as JSON
    };
  } else if (event.httpMethod === 'POST') {
    const body = JSON.parse(event.body);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: `You sent: ${body.name}` })
    };
  } else {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: "Method Not Allowed" })
    };
  }
};
