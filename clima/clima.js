const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=05c8aa31579acb376700bcab99de0aa4&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}