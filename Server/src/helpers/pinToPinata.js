require("dotenv").config();

const { Readable } = require("stream");
const { PINATA_API_KEY, PINATA_SECRET_KEY } = process.env;
const pinataSDK = require("@pinata/sdk");

module.exports = async function (file, data) {
  try {
    const name = data.name;
    const course = data.course;
    const pinata = new pinataSDK(PINATA_API_KEY, PINATA_SECRET_KEY);

    // Convert the screenshot buffer to a ReadableStream
    const readableStreamForFile = new Readable();
    readableStreamForFile.push(file);
    readableStreamForFile.push(null);

    const options = {
      pinataMetadata: {
        name: `Certificate of Completion for ${name}`,
      },
    };

    // pin the nfts image to pinata
    const nftImage = await pinata.pinFileToIPFS(readableStreamForFile, options);

    const nftImageURL = `https://gateway.pinata.cloud/ipfs/${nftImage.IpfsHash}`;

    // creating a metadata object for the NFT certificate

    const metadata = {
      name: `Certificate of Completion for ${name}`,
      description: `This is a certificate of completion for the course: ${course}`,
      image: nftImageURL,
      attributes: [{ trait_type: "Course", value: course }],
    };

    // convert the metadata object to a JSON string
    const metadataJSON = JSON.stringify(metadata);

    // Convert the metadata JSON string to a buffer
    const metadataBuffer = Buffer.from(metadataJSON);

    // Convert the metadata buffer to a ReadableStream
    const readableStreamForMetadata = new Readable();
    readableStreamForMetadata.push(metadataBuffer);
    readableStreamForMetadata.push(null);

    // pin the metadata to pinata

    const metadataResult = await pinata.pinFileToIPFS(
      readableStreamForMetadata,
      { pinataMetadata: { name: `Metadata for ${nftImage.IpfsHash}` } }
    );

    console.log(`https://gateway.pinata.cloud/ipfs/${metadataResult.IpfsHash}`);
    // Return the direct metadata URL
    return `https://gateway.pinata.cloud/ipfs/${metadataResult.IpfsHash}`;
  } catch (error) {
    console.log(error);
  }
};
