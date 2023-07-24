const { Web3 } = require('web3');
const { WEB3PROVIDER } = require("./index");
const web3 = new Web3(WEB3PROVIDER);

const getAccounts = async () => await web3.eth.getAccounts();

module.exports = {
    web3,
    getAccounts,
};
