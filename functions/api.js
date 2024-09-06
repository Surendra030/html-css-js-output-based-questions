// functions/api.js
const code_base_questions = require('./output_based.js'); // Use CommonJS syntax

exports.handler = async function (event, context) {
  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(code_base_questions) // Return the questions as JSON
    };
  } else if (event.httpMethod === 'POST') {
    const body = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `You sent: ${body.name}` })
    };
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" })
    };
  }
};
