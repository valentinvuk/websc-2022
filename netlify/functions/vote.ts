import { Handler }  from "@netlify/functions";
import {config} from "dotenv";

config({ 
  path: '.env' 
});
const {
    DATABASE_URL,
    SUPABASE_SERVICE_API_KEY
} = process.env;

// Connect to our database 
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

export const handler: Handler = async (event) => {
    const { count } = JSON.parse(event.body || '{}');

    const { data, error } = await supabase
        .from('vote')
        .update({ value: count })
        .match({ id: 1 });
    
    if (error) {
      console.log('error occurred', error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error,
          message: `Your submitted vote failed`,
        }),
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      };
    }
    
    console.log('data entered into the Vote table', data);

    return {
      statusCode: 200,
      body: JSON.stringify({
        count,
        message: `You submitted vote ${count}.`,
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    };
  };