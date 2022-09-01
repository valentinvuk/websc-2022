import { Handler }  from "@netlify/functions";
import {config} from "dotenv";

config({ 
  path: '.env' 
});
const {
    DATABASE_URL,
    API_KEY
} = process.env;

// Connect to our database 
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(DATABASE_URL, API_KEY);

export const handler: Handler = async () => {
    const { data } = await supabase
        .from('vote')
        .select('*');
    
    console.log('DATA', data);
    
    return {
        statusCode: 200,
        body: JSON.stringify(data),
        };
  };