import path from 'path'
import express from 'express'
import https from 'https'
import dotenv from 'dotenv'




const app = express();



const PORT = 8080;



app.get('/', (req,res) => res.send('Express Server Hosted!'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});