import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);

  const lockedAmount = ethers.parseEther("0.001");
 const bookOwner = "0x3E6AC408Cc47CEfD65F4872201C564787BBf7095"
  const book = await ethers.deployContract("Book", [bookOwner]);

  await book.waitForDeployment();

  console.log(
    `Book with _bookOwner ${bookOwner} deployed to ${book.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
