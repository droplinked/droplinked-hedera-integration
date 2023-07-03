import { HederaLogin } from "./src/hederaMetamaskLogin";
import { record_merch } from "./src/hederaRecordProduct";
import { publish_request } from "./src/hederaPublishRequest";
import { approve_request } from "./src/hederaApproveRequest";
import { disapprove } from "./src/hederaDisapprove";
import { cancel_request } from "./src/hederaCancelRequest";
import { getTransactionEvents } from "./src/hederaWeb3";

// let account_information = await HederaLogin();
// console.log(account_information);

/*              RECORD PRODUCT EXAMPLE      */

// let product_title = "test product2";
// let discription = "test product description";
// let image_url = "https://i.imgur.com/removed.png";
// let price = 200; // It is actually 2 dollars (the price should be multiplied by 100)
// let amount = 100;
// let comission = 1234; // It is actually 12.34% (the comission should be multiplied by 100)
// let tx_hash = await record_merch({
//     "type" : "t-shirt",
//     "size" : "large",
//     "color" : "red"
// } , account_information.address, product_title , discription, image_url, price, amount, comission);
// console.log(tx_hash);


/*              PUBLISH REQUEST EXAMPLE      */

// let producer_address = "0x7E311aB1A7f003059a0866322691Df23f61f2a57";
// let token_id = 1;
// publish_request(account_information.address, producer_address, token_id);



/*              APPROVE REQUEST EXAMPLE      */
// let request_id = 1;
// approve_request(account_information.address, request_id);



/*              CANCEL REQUEST EXAMPLE      */
// cancel_request(account_information.address, 2);



/*              DISAPPROVE EXAMPLE      */
// disapprove(account_information.address, 1);


/*              GET TRANSACTION EVENTS EXAMPLE      */
console.log(await getTransactionEvents("0xa2072e933532aa88393a1a2b9335dde9d73ee8d6995a66dbfdfd83e9cda34dfc"));