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
  versions: {
  //  bip0031: 60000,
  //  bip44: 3,
  //  private: 0x9e,
  //  public: 0x1e,
  //  scripthash: 0x16
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: 'ABC123TEST',
  versions: {
    //bip44: 1,
    //private: 0xf1,
    //public: 0x71,
    //scripthash: 0xc4
  }
}, common)

module.exports = {
  main: main,
  test: test
}
