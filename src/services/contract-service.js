const logger = require("slf3d");
const { getAccounts } = require("../config/web3");
const contract = require("../config/contract");


const mintAsset = async (to, tokenURL) => {
    logger.log("Writing Data to Blockchain...");
    const address = await getAccounts();

    try {
        const response = await contract.methods.mint(to, tokenURL).send({
            from: address[0],
            gas: '1000000',
        });

        return response;
    } catch (err) {
        logger.error("Error! Writing Data to Blockchain: " + err.message);
        console.log(err);
        throw err;
    }
}

const getAssetOwner = async (tokenId) => {
    logger.log("Getting owner for tokenId: " + tokenId);

    try {
        const response = await contract.methods.ownerOf(tokenId).call();
        return response
    } catch (err) {
        logger.error("Error getting owner from smart contract...");
        console.log(err);
        throw err;
    }
}

const getAsset = async (tokenId) => {
    logger.log("Fetching data with tokenId: " + tokenId);

    try {
        const response = await contract.methods.tokenURI(tokenId).call();
        return response
    } catch (err) {
        logger.error("Error Fetching data from Smart Contract...");
        console.log(err);
        throw err;
    }
}

module.exports = {
    mintAsset,
    getAssetOwner,
    getAsset,
}
