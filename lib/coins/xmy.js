// https://github.com/dogecoin/dogecoin/blob/master/src/chainparams.cpp

var common = {
  name: 'Myriadcoin',
  unit: 'XMY'
}

var main = Object.assign({}, {
  hashGenesisBlock: '00000ffde4c020b5938441a0ea3d314bf619eff0b38f32f78f7583cffa1ea485',
  port: 10888,
  protocol: {
    // pchMessageStart
    magic: 0xaf4576ee
  },
  seedsDns: [
    'seed1.myriadcoin.org',
    'seed2.myriadcoin.org',
    'seed3.myriadcoin.org',
    'seed4.myriadcoin.org',
    'seed5.myriadcoin.org',
    'seed6.myriadcoin.org',
    'seed7.myriadcoin.org',
    'seed8.myriadcoin.org'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ADE4,
      public: 0x0488B21E
    },
    bip44: 4,
    private: 0xB2,
    public: 0x32,
    scripthash: 0x09
  }
}, common)

module.exports = {
  main: main,
  test: null
}
