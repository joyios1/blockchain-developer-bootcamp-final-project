const GameToken = artifacts.require('./GameToken.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Game Token', (accounts) => {
  let token

  before(async () => {
    token = await GameToken.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = token.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await token.name()
      assert.equal(name, 'Game Token')
    })

    it('has a symbol', async () => {
      const symbol = await token.symbol()
      assert.equal(symbol, 'GAME')
    })
  })

  describe('token distribution', async () => {
    let result

    it('mints tokens', async () => {
      // just a random url it can be anything...
      await token.safeMint(accounts[0])

      // It should increase the total supply
      result = await token.totalSupply()
      assert.equal(result.toString(), '1', 'total supply is correct')

      // It increments owner balance
      result = await token.balanceOf(accounts[0])
      assert.equal(result.toString(), '1', 'balanceOf is correct')

      // Token should belong to owner
      result = await token.getOwnerByIndex(0)
      assert.equal(result.toString(), accounts[0].toString(), 'ownerOf is correct')
      result = await token.tokenOfOwnerByIndex(accounts[0], 0)

      // Owner can see all tokens
      let balanceOf = await token.balanceOf(accounts[0])
      let tokenIds = []
      for (let i = 0; i < balanceOf; i++) {
        let id = await token.getTokenIdByOwner(accounts[0], i)
        tokenIds.push(id.toString())
      }
      let expected = ['0']
      assert.equal(tokenIds.toString(), expected.toString(), 'tokenIds are correct')

      // // Token URI Correct
      // let tokenURI = await token.tokenURI('1')
      // assert.equal(tokenURI, 'https://www.gametoken.com/nft')
    })
  })

  describe('transfer', async () => {
    it('transfers successfully', async () => {
        await token.safeMint(accounts[0])
        owner = accounts[0];
        receiver = accounts[1];

        // Verify that the owner of the token is the owner address
        result = await token.ownerOf('1')
        assert.equal(result.toString(), accounts[0].toString(), 'ownerOf is correct')

        // Transfer the token to the receiver address
        result = await token.transferFrom(owner, receiver, '1');
            
        // Verify that the owner of the token is now the receiver address
        result = await token.ownerOf('1') == receiver;
        assert(result);
    })

  })

})
