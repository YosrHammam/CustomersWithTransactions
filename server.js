import express from 'express';
import {readFile} from 'fs/promises';
import {join} from 'path';
import cors from 'cors';

const app = express();
const port =5000;

app.use(cors())

app.get('/api/data', async (req, res) => {
  try {
    const data = await readFile(join(process.cwd(), 'db.json'), 'utf8');
    res.send(JSON.parse(data));
  } catch (err) {
    res.status(500).send('Error reading file');
  }
});

app.get('/api/data/customers',async(req,res)=>{
    try {
        const data = await readFile(join(process.cwd(), 'db.json'), 'utf8');
        res.send(JSON.parse(data).customers);
      } catch (err) {
        res.status(500).send('Error reading file');
      }

});
app.get('/api/data/transactions',async(req,res)=>{
    try {
        const data = await readFile(join(process.cwd(), 'db.json'), 'utf8');
        res.send(JSON.parse(data).transactions);
      } catch (err) {
        res.status(500).send('Error reading file');
      }
    
});

app.listen(port,()=>{
  console.log(`server is running at port ${port}`);
})