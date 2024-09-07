const code_base_questions = require('./output_based.js');

let questionsData = [...code_base_questions];

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
      body: JSON.stringify(questionsData) // Send data as JSON
    };
  } else if (event.httpMethod === 'POST') {
    try {
      const body = JSON.parse(event.body);

      // Find and update the question
      const questionIndex = questionsData.findIndex(q => q.serial === body.serial);
      if (questionIndex !== -1) {
        questionsData[questionIndex] = { ...questionsData[questionIndex], flag: body.flag };
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ message: 'Flag data updated successfully' })
        };
      } else {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ message: 'Question not found' })
        };
      }
    } catch (error) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Invalid request', error: error.message })
      };
    }
  } else {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: "Method Not Allowed" })
    };
  }
};
