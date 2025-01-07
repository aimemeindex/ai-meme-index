import { ethers } from "hardhat";

async function main() {
  const AMIToken = await ethers.getContractFactory("AMIToken");
  const token = await AMIToken.deploy();
  console.log("AMI Token deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
