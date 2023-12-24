const express = require('express');
const { Block, Blockchain } = require('./blockchain');
const basicAuth = require('express-basic-auth');

const app = express();
const port = 3000;

const myBlockchain = new Blockchain();


const users = { 'admin': 'password' };


app.use(basicAuth({
  users,
  challenge: true,
  unauthorizedResponse: 'Unauthorized access.',
}));

app.get('/mineBlock', (req, res) => {
  const newBlock = new Block(
    myBlockchain.chain.length,
    Date.now(),
    { amount: 4 },
    myBlockchain.getLatestBlock().hash
  );
  myBlockchain.addBlock(newBlock);
  res.send('Block mined successfully.');
});

app.get('/getBlockchain', (req, res) => {
  res.json(myBlockchain);
});

app.listen(port, () => {
  console.log(`Blockchain server listening on port ${port}`);
});