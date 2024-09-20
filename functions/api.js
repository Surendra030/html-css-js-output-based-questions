const code_base_questions = require('./output_based.js');
const data2 = require('./data2.js');

let questionsData = [...code_base_questions];
let data2Questions = [...data2];

exports.handler = async function (event, context) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT',
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
  
  // GET request for fetching all questions from output_based.js
  if (event.httpMethod === 'GET' && !params.action && !params.source) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(questionsData)
    };
  }

  // GET request for fetching questions from data2.js
  if (event.httpMethod === 'GET' && params.source === 'data2') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data2Questions)
    };
  }

  // PUT request for updating data in data2.js
  if (event.httpMethod === 'PUT' && params.source === 'data2') {
    try {
      const body = JSON.parse(event.body);

      // Find and update the question in data2.js
      const questionIndex = data2Questions.findIndex(q => q.serial === body.serial);
      if (questionIndex !== -1) {
        data2Questions[questionIndex] = { ...data2Questions[questionIndex], ...body };
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ message: 'Data2 question updated successfully' })
        };
      } else {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ message: 'Data2 question not found' })
        };
      }
    } catch (error) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Invalid request', error: error.message })
      };
    }
  }

  // Handle POST request with query action (for updating flags in output_based.js)
  if (event.httpMethod === 'POST' && params.action === 'updateFlag') {
    try {
      const body = JSON.parse(event.body);

      // Find and update the question in output_based.js
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
