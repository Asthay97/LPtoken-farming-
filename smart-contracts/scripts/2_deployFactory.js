const { ethers, upgrades } = require('hardhat');

async function main() {
  // Deploying the YieldFarmingFactory contract
  const YieldFarmingFactory = await ethers.getContractFactory('YieldFarmingFactory');
  const yieldFarmingFactory = await upgrades.deployProxy(YieldFarmingFactory);
  await yieldFarmingFactory.deployed();

  console.log('YieldFarmingFactory contract deployed to:', yieldFarmingFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
