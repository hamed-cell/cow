const monInformation = require('./information');

const cowsay = require("cowsay");
console.log(cowsay.say({
    text: `Hello, je m'appelle ${monInformation.nom} et je suis à la ${monInformation.campus} !`
}));
