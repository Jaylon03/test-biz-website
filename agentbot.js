
import axios from 'axios' 

const api_key = 'ebe16e9b-19bb-437b-bcac-0e25f3e98a6f' 
const assistant_id = 'da0999de-e01e-464a-ab0d-a80943c32be6' 
let session_id;

// Create a new chat session 
const chatSession = await axios.post(
   'https://agentivehub.com/api/chat',
 {
    "api_key": api_key,
     "assistant_id": "ff9a4dc0-0126-492a-bfb3-a354e0c136c2"
    }
)

session_id = chatSession.data.session_id;

 // Send a message to the chat session 
const chatReponse = {
 api_key,
 session_id,
 assistant_id,
 messages:[{ role: 'user',  content: 'Say Hello!' }]
 };

const chat = await axios.post(
   'https://agentivehub.com/api/chat',
 chatReponse
 );
    