# droplinked-Hedera-integration
The toolkit for integrating Hedera into droplinked, including login, gating, record, affiliate, and payment

---

## Sections of this repository

### 0. Installation

```bash
npm install --save @hashgraph/sdk
npm i eth-sig-util
npm install nft.storage
npm install events
npm install buffer --save
npm install ethers
```

### 1.1 Login using Metamask (Front-end)

You can use the HederaLogin function like like below 

```js
import { HederaLogin } from "./src/hederaMetamaskLogin";
let account_information = await HederaLogin();
console.log(account_information);
```

The result would be like : 

```
{
    "address": "0x89281f2da10fb35c1cf90954e1b3036c3eb3cc78",
    "network": "TestNet",
    "signature": "0x9ba56709ce42f8a022e6dd0fe81639e3a31da0017f922eb3ec355dcf579bb8380a85641d6b771473d26902c64b42411308dfab0837c121a3c29cdda705a4c2111c"
}
```

### 1.2 Signature Verifiaction (Back-end)

Use the `verifyEVMSignature` function from the `src/verifySignature.js` of the polygon project to verify a signature like this :

```js
console.log(verifyEVMSignature("0x89281f2da10fb35c1cf90954e1b3036c3eb3cc78" , "0x9ba56709ce42f8a022e6dd0fe81639e3a31da0017f922eb3ec355dcf579bb8380a85641d6b771473d26902c64b42411308dfab0837c121a3c29cdda705a4c2111c"));
```

It would return a `true` or `false` value based on the signature check.

### 2. Hedera Gating (Backe-end and Front-end)

Coming Soon ...

### 3. Hedera Record Product (Front-end)

Simple usage : 

```js
// Get Account information from login
let account_information = await HederaLogin();

let product_title = "test product";
let discription = "test product description";
let image_url = "https://i.imgur.com/removed.png";
let price = 200; // It is actually 2 dollars (the price should be multiplied by 100)
let amount = 2000;
let comission = 1234; // It is actually 12.34% (the comission should be multiplied by 100)
let tx_hash = await record_merch({
    "type" : "t-shirt",
    "size" : "large",
    "color" : "red"
} , account_information.address, product_title , discription, image_url, price, amount, comission);
console.log(tx_hash);
```

throws "Transaction Rejected" error if the user rejects the transaction on Metamask.


Will return a `tx_hash` like this : 

```
0x70e363b3a62caa2c1699adcfb682179d8c8ed3a412edcc8809b69aded15cc6de
```

### 3. Hedera Publish Request (Front-end)

Should be used by the publisher who wants to publish a product.

Simple usage : 

```js
let account_information = await HederaLogin();
let producer_address = "0x89281F2dA10fB35c1Cf90954E1B3036C3EB3cc78";
let token_id = 1;
publish_request(account_information.address, producer_address, token_id);
```

throws "Transaction Rejected" error if the user rejects the transaction on Metamask.

Will return a `tx_hash` like this : 

```
0x70e363b3a62caa2c1699adcfb682179d8c8ed3a412edcc8809b69aded15cc6de
```

### 4. Hedera Approve Request (Front-end)

Should be used by the owner of the product.

Simple usage : 

```js
let account_information = await HederaLogin();
let request_id = 1;
approve_request(account_information.address, request_id);
```

throws "Transaction Rejected" error if the user rejects the transaction on Metamask.


Will return a `tx_hash` like this : 

```
0x70e363b3a62caa2c1699adcfb682179d8c8ed3a412edcc8809b69aded15cc6de
```

### 5. Hedera Cancel Request (Front-end)

Should be used by the publisher who requested the product.

Simple usage : 

```js
let account_information = await PolygonLogin();
let request_id = 1;
cancel_request(account_information.address, 2);
```

throws "Transaction Rejected" error if the user rejects the transaction on Metamask.


Will return a `tx_hash` like this : 

```
0x70e363b3a62caa2c1699adcfb682179d8c8ed3a412edcc8809b69aded15cc6de
```

### 6. Hedera Disapprove Request (Front-end)

Should be used by the owner of the product.

Simple usage : 

```js
let account_information = await HederaLogin();
let request_id = 1;
disapprove(account_information.address, request_id);
```

throws "Transaction Rejected" error if the user rejects the transaction on Metamask.


Will return a `tx_hash` like this : 

```
0x70e363b3a62caa2c1699adcfb682179d8c8ed3a412edcc8809b69aded15cc6de
```


### 7. Hedera Web3 Events & Transaction verification (Web3)

Coming soon ...
