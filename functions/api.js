const code_base_questions = require('./output_based.js');

let questionsData = [...code_base_questions];

exports.handler = async function (event, context) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight' })
    };
  }

  const params = event.queryStringParameters || {};
  
  // Handle GET request without query (for fetching all questions)
  if (event.httpMethod === 'GET' && !params.action) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(questionsData)
    };
  }

  // Handle POST request with query action (for updating flags)
  if (event.httpMethod === 'POST' && params.action === 'updateFlag') {
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
    // Handle unsupported methods
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }
};
