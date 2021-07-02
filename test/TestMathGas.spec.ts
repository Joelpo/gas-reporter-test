import { ethers } from 'hardhat'
import chai from 'chai'
import { solidity } from 'ethereum-waffle'
import { BigNumber, ContractFactory } from 'ethers'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { it } from 'mocha'

const { expect } = chai
chai.use(solidity)

let owner: SignerWithAddress
let TestMathGas: ContractFactory

beforeEach(async function () {
  const [first, ...rest] = await ethers.getSigners()
  owner = first

  // Get contracts for TestERC20, Pool, Asset
  TestMathGas = await ethers.getContractFactory('TestMathGas')
})

beforeEach(async function () {
  // First, deploy and initialize pool
  this.testMath = await TestMathGas.connect(owner).deploy()

  // Wait for transaction to be deployed
  await this.testMath.deployTransaction.wait()
})

describe('Multiplies', async function () {
  it('Multiplies', async function () {
    //   console.log(this.testMath.multiply(BigNumber.from(5), BigNumber.from(10)))
    expect(await this.testMath.multiply(BigNumber.from(5), BigNumber.from(10))).to.be.equal('50')
  })
})

describe('Powers', async function () {
  it('Powers', async function () {
    expect(await this.testMath.power(5, 8)).to.be.equal(BigNumber.from(5).pow(8))
  })
})

describe('Logarithm', async function () {
  it('Logarithm', async function () {
    expect(await this.testMath.log2(2)).to.be.equal(1)
  })
})
