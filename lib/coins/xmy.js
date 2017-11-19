// https://github.com/dogecoin/dogecoin/blob/master/src/chainparams.cpp

var common = {
  name: 'Myriadcoin',
  unit: 'XMY'
}

var main = Object.assign({}, {
  hashGenesisBlock: 'ABC123',
  port: 10888,
  protocol: {
    magic: 0xc0c0c0c0
  },
  seedsDns: [
    'testseed1.myriadcoin.org',
    'testseed2.myriadcoin.org',
    'testseed3.myriadcoin.org',
    'testseed4.myriadcoin.org',
    'testseed5.myriadcoin.org',
    'testseed6.myriadcoin.org',
    'testseed7.myriadcoin.org',
    'testseed8.myriadcoin.org'
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
