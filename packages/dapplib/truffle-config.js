require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remain mistake good nasty fortune subject'; 
let testAccounts = [
"0x999d9ec9e66a2eab4769fa0cc292a353c26c71f7d3680005153c2a6ff35bf308",
"0x3fa50a2b6a6ff888dab86ece8bcb9f4fa59959e62d3026322779bd402461402e",
"0xf7250d9d28a24f710cfd00330bc2cf262f08100d24eb2b6f58871faa08ddbf0a",
"0x800912f500c96cb5921287f17224e1e45143ba04ecca872d4aa8e8ae8f952235",
"0xa79bb4580f46d4a6855ad0d7a0f13a55e14e27f6c4eb4643325dd9772c8bc123",
"0x71bb1ed668e97874c14516e40f7b272a56a5e9d8a52a9f2992ca0a2102617a7a",
"0xda80ea119cbfcc898d5cfc730b508813533a11cc2affa595c27842e033e6b19c",
"0x3674766c0e79ead8d4e3c0bda615f01fa0cc2be0b8179fbe3f9c83f43255602a",
"0x3e7c358c9782c0524614a2c1a86fbde4dadcdd4e67297f87eee0ff9a7f40975c",
"0x200f4a0c8f36a6104e2ebbf8fd24243b9f00281d2353fb234f1cb97c2e9a27b5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

