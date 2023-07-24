// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract SoulBound is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private tokenId;

    constructor() ERC721("SoulBound", "SBT") {}

    function _beforeTokenTransfer(address from, address to, uint256 tokenId_, uint256 batchSize)
        internal
        override(ERC721)
    {
        require(from == address(0), "Token not transferable");
        super._beforeTokenTransfer(from, to, tokenId_, batchSize);
    }

    function mint(address recipientAddress, string memory tokenURI_) public returns (uint256 newItemId) {
        tokenId.increment();
        newItemId = tokenId.current();
        

        _safeMint(recipientAddress, newItemId);
        _setTokenURI(newItemId, tokenURI_);
    }
}
