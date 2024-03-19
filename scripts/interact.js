const hre = require("hardhat");

async function update(contract) {
  contract.inc();

  return await contract.get();
}

async function main() {
  try {
    const Counter = await hre.ethers.getContractFactory("Counter");

    const address = "0xf26Ab8AD44ba84B31A294a082D90dE85E066bF7E";
    const counter = await Counter.attach(address);

    const count = await update(counter);
    console.log(count);
  } catch (error) {
    console.error(error);
  }
}

main();
