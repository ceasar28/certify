// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";

contract CertificateNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event CertificateClaimed(uint256 indexed tokenId);

    constructor() ERC721("LearnableWeb3iNfts", "LWT") {
        console.log("This is my NFT contract. Woah!");
    }

    function claimCertificate(
        address recipient,
        string memory tokenURI
    ) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        console.log(tokenURI);
        emit CertificateClaimed(newItemId);
        return newItemId;
    }
}
