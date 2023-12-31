import {ethers} from 'ethers';
import {abi, contractAddress, provider} from './hederaConstants'
export let disapprove = async function(address,request_id){
    const signer = await provider.getSigner();
    console.log(signer.address);
    if(signer.address.toLocaleLowerCase() != address.toLocaleLowerCase()){
        throw "Address does not match signer address";
    }
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try{
        let tx = await contract.disapprove(request_id);
        return tx.hash;
    }catch(e){
        if (e.code.toString() == "ACTION_REJECTED"){
            throw "Transaction Rejected";
        }
        throw e;
    }
}
