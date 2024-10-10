// Express server to fetch FormCrafts responses
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Endpoint to fetch FormCrafts responses
app.get('/api/formcrafts/responses', async (req, res) => {
  try {
    const response = await axios.get('https://api.formcrafts.com/v2/forms/cf912b7f/responses', {
      headers: {
        'Authorization': 'Bearer fc_sgx8o9zhog52yabderq3xov16',
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// CORS Anywhere proxy server
const corsAnywhere = require('cors-anywhere');

const host = process.env.HOST || '0.0.0.0';
const corsPort = process.env.CORS_PORT || 8080;

corsAnywhere.createServer({
  originWhitelist: ['https://your-production-domain.com'], // Allow only your domain
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(corsPort, host, function() {
  console.log('Running CORS Anywhere on ' + host + ':' + corsPort);
});
