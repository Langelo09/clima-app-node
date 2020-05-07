const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(dirección) => {

    try {
        const coords = await lugar.getLugarLatLng(dirección);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (err) {
        return `No se pudo determinar el clima de ${dirección}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);