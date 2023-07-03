import { Buffer } from "buffer";
/**
 * 
 * @returns {boolean} true if Metamask is installed on the browser otherwise false
 */
export const isMetamaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
};

async function getAccounts(){
    return await ethereum.request({method : 'eth_accounts'});
}

export async function isWalletConnected(){
    let accounts = await getAccounts();
    return accounts && accounts[0] > 0;
}

async function requestAccounts(){
    try{
        return await ethereum.request({method : 'eth_requestAccounts'});
    }
    catch(error){
        console.error(error);
    }
}

/**
 * 
 * @param {string} address 
 * @returns {number}
 */
export async function getBalance(address){
    return Number(await window.ethereum.request({ method: 'eth_getBalance', params: [address, 'latest'] }));
}

export async function HederaLogin(){
    if(!isMetamaskInstalled()){
        return null;
    }
    if (!await isWalletConnected()){
        await requestAccounts();
    }
    let address = (await getAccounts())[0];
    let chainId = await window.ethereum.request({ method: 'eth_chainId' });
    if (Number(chainId) != 296 && Number(chainId) != 297 && Number(chainId) != 295){
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x128' }], // change to testnet
        });
        chainId = await window.ethereum.request({ method: 'eth_chainId' });
    }
    const siweMessage = `Please sign this message to let droplinked view your PublicKey & Address and validate your identity`;
    let msg = `0x${Buffer.from(siweMessage, 'utf8').toString('hex')}`;
    const signature = await window.ethereum.request({ method: 'personal_sign', params: [msg,address]});
    return {
        address : address,
        network : Number(chainId) == 295 ? 'MainNet' : (Number(chainId) == 297 ? 'PreviewNet' : (Number(chainId) == 296 ? 'TestNet' : 'unknown')),
        signature : signature
    };
}