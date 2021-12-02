require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe street remember stick sniff idea cloth equal genre'; 
let testAccounts = [
"0x622ead7abe7a03ee44da4994da01bc656ad097f4fd4a95ee8fac8b9fca17ef8a",
"0xb41fbf75dbb9367df8d0dc89841042ab781086af05633b8dd9f5f140a6af523a",
"0x5e3c9eb13906a3d857e4e32e29dcb56703fbb63906da5763d1e0ef19b4f38103",
"0x2bef0b43e266d272094176fa78a97e7a5a7a70117e78642847cd65e634c94d23",
"0x8c6289eca663c8b5ad133b6276dd8a58b707a5b50169005ee39760610f2537ee",
"0x7aa1f6bb4aa21fffeb8f6ae7819f928a8e159c27b1b378603cf768f52573b817",
"0xdc7f2f41900d6824ee2213068e11430743826f7e112381706c7305eb290a1b0d",
"0x00007471c3dc11f8f99a97049aae4233b3cfb04cf750e7ff2756945a963960ad",
"0x119b5db9c45e2761ec81ab33b1c29b2fe230dfe46697e8fe3091362ae468a80d",
"0x26e04ccbb3f1423c4716633e2ba9b8dc1a1af02a612e29a2f0c635098f3db311"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


