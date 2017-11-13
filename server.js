
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const superagent = require('superagent');
const token = $process.env.GITHUB_TOKEN

app.use(express.static('./public'));
app.use(cors());

app.get('/github/*', (request, response) => {
  console.log('Routing a gh api request for ', request.params[0])
  console.log(`authstring: token ${token}`)
  superagent(`https://api.GitHub.com/${request.params[0]}`)
    .set('Authorization',`token ${token}`)
    .then(
      repos => response.send(repos.text),
      err => response.send(`https://api.GitHub.com/${request.params[0]} Request Fail: ${err}`)
    )
})
// you can do it
app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
