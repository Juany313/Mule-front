

const calculate = async (a, b) => {
    const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://distanceto.p.rapidapi.com/distance/route',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'distanceto.p.rapidapi.com'
  },
  data: {
    route: [
      {
        country: 'DEU',
        name: 'Berlin'
      },
      {
        country: 'DEU',
        name: 'Hamburg'
      }
    ]
  }
};

try {
	const response = await axios.request(options);
} catch (error) {
	console.error(error);
}
}