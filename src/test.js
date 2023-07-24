const { mintAsset, getAsset, getAssetOwner } = require("./services/contract-service");

const itShouldMintAsset = async (to, tokenURI) => {
    const res = await mintAsset(to, tokenURI);
    console.log(res);
};

const itShouldReturnTokenURI = async (tokenId) => {
    const res = await getAsset(tokenId);
    console.log(res);
}

const shouldReturnTokenOwner = async (tokenId) => {
    const res = await getAssetOwner(tokenId);
    console.log(res);
}

const main = async () => {
    await itShouldMintAsset("0x4DEeea2118Fa73ED930B6A3089C93A113E406E4b", "https://github.com/Navin3d");
    // await itShouldReturnTokenURI(0);
    // await shouldReturnTokenOwner(0);
}

main();
