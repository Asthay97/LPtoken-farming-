const hre = require("hardhat");

async function main() {
  const YieldFarming = await hre.ethers.getContractFactory("YieldFarming");
  const yieldFarming = await YieldFarming.deploy('0x8c2061eC512608182a3eC86f7994b4F7AA54B8E0',200,'0x266A0A79018Bc1800eBd3bA796a4B4fba5Add28F');

  await yieldFarming.deployed();

  console.log(`Yield Farming deployed on polygon mumbai to ${yieldFarming.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});