import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  const { count } = JSON.parse(event.body || '{}');

  console.log({ count });
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      count,
      message: `No. of likes is ${count}.`,
    }),
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  };
};