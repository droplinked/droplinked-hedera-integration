import {ethers} from 'ethers';
import {abi, contractAddress, provider} from './hederaConstants'
export let publish_request = async function(address, producer_account_address,token_id){
    const signer = await provider.getSigner();
    if(signer.address.toLocaleLowerCase() != address.toLocaleLowerCase()){
        throw "Address does not match signer address";
    }
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try{
        let tx = await contract.publish_request(producer_account_address,token_id);
        return tx.hash;
    }catch(e){
        if (e.code.toString() == "ACTION_REJECTED"){
            throw "Transaction Rejected";
        }
        throw e;
    }
}
