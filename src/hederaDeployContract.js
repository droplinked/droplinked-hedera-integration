import { Web3 } from 'web3';
import { abi } from './hederaConstants';
let bytecode = "60806040523480156200001157600080fd5b50604051620049d8380380620049d883398181016040528101906200003791906200021a565b604051806020016040528060008152506200005881620000a960201b60201c565b508160088190555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620002c6565b8060029080519060200190620000c1929190620000c5565b5050565b828054620000d39062000290565b90600052602060002090601f016020900481019282620000f7576000855562000143565b82601f106200011257805160ff191683800117855562000143565b8280016001018555821562000143579182015b828111156200014257825182559160200191906001019062000125565b5b50905062000152919062000156565b5090565b5b808211156200017157600081600090555060010162000157565b5090565b600080fd5b6000819050919050565b6200018f816200017a565b81146200019b57600080fd5b50565b600081519050620001af8162000184565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001e282620001b5565b9050919050565b620001f481620001d5565b81146200020057600080fd5b50565b6000815190506200021481620001e9565b92915050565b6000806040838503121562000234576200023362000175565b5b600062000244858286016200019e565b9250506020620002578582860162000203565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002a957607f821691505b60208210811415620002c057620002bf62000261565b5b50919050565b61470280620002d66000396000f3fe6080604052600436106101c15760003560e01c806380b86cf4116100f7578063d54fa77711610095578063e985e9c511610064578063e985e9c514610677578063ef463b64146106b4578063f242432a146106f1578063f68c70671461071a576101c1565b8063d54fa777146105a7578063ddca3f43146105e4578063e5bb38151461060f578063e73496cd14610638576101c1565b8063a22cb465116100d1578063a22cb465146104eb578063b4a1104014610514578063bd85b0391461053f578063c7a343231461057c576101c1565b806380b86cf41461045257806381d12c581461046e5780638f3324f9146104ae576101c1565b80632eb2c2d6116101645780634e1273f41161013e5780634e1273f4146103a7578063673237b5146103e457806372583e49146104005780638008df4f14610429576101c1565b80632eb2c2d6146103375780633940e9ee1461036057806340004bab1461038b576101c1565b80630c99d130116101a05780630c99d130146102695780630d84c6e1146102925780630e89341c146102cf57806311dfa5f31461030c576101c1565b8062fdd58e146101c657806301ffc9a714610203578063027a225514610240575b600080fd5b3480156101d257600080fd5b506101ed60048036038101906101e89190612e04565b610757565b6040516101fa9190612e53565b60405180910390f35b34801561020f57600080fd5b5061022a60048036038101906102259190612ec6565b610820565b6040516102379190612f0e565b60405180910390f35b34801561024c57600080fd5b5061026760048036038101906102629190612f8e565b610902565b005b34801561027557600080fd5b50610290600480360381019061028b9190613016565b610c65565b005b34801561029e57600080fd5b506102b960048036038101906102b49190612e04565b610d3d565b6040516102c69190612f0e565b60405180910390f35b3480156102db57600080fd5b506102f660048036038101906102f19190613016565b610d6c565b60405161030391906130dc565b60405180910390f35b34801561031857600080fd5b50610321610e11565b60405161032e919061310d565b60405180910390f35b34801561034357600080fd5b5061035e6004803603810190610359919061331b565b610e37565b005b34801561036c57600080fd5b50610375611004565b6040516103829190612e53565b60405180910390f35b6103a560048036038101906103a091906133ea565b61100a565b005b3480156103b357600080fd5b506103ce60048036038101906103c99190613500565b611179565b6040516103db9190613636565b60405180910390f35b6103fe60048036038101906103f991906136c7565b611292565b005b34801561040c57600080fd5b5061042760048036038101906104229190613016565b61129e565b005b34801561043557600080fd5b50610450600480360381019061044b9190613016565b611539565b005b61046c600480360381019061046791906137a6565b6117cd565b005b34801561047a57600080fd5b5061049560048036038101906104909190613016565b6117d8565b6040516104a59493929190613870565b60405180910390f35b3480156104ba57600080fd5b506104d560048036038101906104d09190612e04565b611855565b6040516104e29190612f0e565b60405180910390f35b3480156104f757600080fd5b50610512600480360381019061050d91906138e1565b611884565b005b34801561052057600080fd5b5061052961189a565b6040516105369190612e53565b60405180910390f35b34801561054b57600080fd5b5061056660048036038101906105619190613016565b6118a0565b6040516105739190612e53565b60405180910390f35b34801561058857600080fd5b506105916118bd565b60405161059e9190612e53565b60405180910390f35b3480156105b357600080fd5b506105ce60048036038101906105c99190612e04565b6118c3565b6040516105db9190612f0e565b60405180910390f35b3480156105f057600080fd5b506105f96118f2565b6040516106069190612e53565b60405180910390f35b34801561061b57600080fd5b5061063660048036038101906106319190612e04565b6118f8565b005b34801561064457600080fd5b5061065f600480360381019061065a9190613016565b611bfe565b60405161066e93929190613921565b60405180910390f35b34801561068357600080fd5b5061069e6004803603810190610699919061395f565b611cb0565b6040516106ab9190612f0e565b60405180910390f35b3480156106c057600080fd5b506106db60048036038101906106d69190612e04565b611d44565b6040516106e89190612e53565b60405180910390f35b3480156106fd57600080fd5b506107186004803603810190610713919061399f565b611d69565b005b34801561072657600080fd5b50610741600480360381019061073c9190613a36565b611ed8565b60405161074e9190612e53565b60405180910390f35b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107bf90613ad5565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806108eb57507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806108fb57506108fa82611ef0565b5b9050919050565b60008585858560405160200161091b9493929190613b22565b6040516020818303038152906040528051906020012090506000600d60008381526020019081526020016000205490506000811415610a4b5760016004546109639190613b91565b90506004600081548092919061097890613be7565b91905055508686600a600084815260200190815260200160002060000191906109a2929190612cb9565b5084600a60008381526020019081526020016000206001018190555083600a60008381526020019081526020016000206002018190555082600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000208190555080600d600084815260200190815260200160002081905550610b66565b8686604051602001610a5e929190613c30565b60405160208183030381529060405280519060200120600a6000838152602001908152602001600020600001604051602001610a9a9190613d4a565b6040516020818303038152906040528051906020012014610aba57600080fd5b84600a60008381526020019081526020016000206001015414610adc57600080fd5b83600a60008381526020019081526020016000206002015414610afe57600080fd5b82600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000828254610b5e9190613b91565b925050819055505b8260066000828254610b789190613b91565b9250508190555082600360008381526020019081526020016000206000828254610ba29190613b91565b92505081905550610bc433828560405180602001604052806000815250611f5a565b8686601060008481526020019081526020016000209190610be6929190612cb9565b50807f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b8888604051610c19929190613c30565b60405180910390a27f0986d07dc5959c356b9ccd16af0e6a8bb3667fcf53d6e1162b5de6f8a33b77f7813385604051610c5493929190613d6c565b60405180910390a150505050505050565b60001515600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff1615151415610cd457600080fd5b6001600b600083815260200190815260200160002060020160146101000a81548160ff0219169083151502179055507f2b0ecfaeb40cae4f9eed0e8080364e42a2b0e3c38d7628426c8e2e5aa90cf0ce81604051610d329190612e53565b60405180910390a150565b600c6020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b6060601060008381526020019081526020016000208054610d8c90613c83565b80601f0160208091040260200160405190810160405280929190818152602001828054610db890613c83565b8015610e055780601f10610dda57610100808354040283529160200191610e05565b820191906000526020600020905b815481529060010190602001808311610de857829003601f168201915b50505050509050919050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610e3f61210b565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480610e855750610e8485610e7f61210b565b611cb0565b5b610ec4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebb90613e15565b60405180910390fd5b610ed18585858585612113565b60005b8351811015610ffc576000848281518110610ef257610ef1613e35565b5b602002602001015190506000848381518110610f1157610f10613e35565b5b6020026020010151905080600960008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000206000828254610f7b9190613e64565b9250508190555080600960008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000206000828254610fe29190613b91565b92505081905550505080610ff590613be7565b9050610ed4565b505050505050565b60065481565b6000670de0b6b3a76400009050600060648285876110289190613e98565b6110329190613e98565b61103c9190613f21565b905060006127106008548487896110539190613e98565b61105d9190613e98565b6110679190613e98565b6110719190613f21565b9050813410156110b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ad90613f9e565b60405180910390fd5b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561111e573d6000803e3d6000fd5b508373ffffffffffffffffffffffffffffffffffffffff166108fc82846111459190613e64565b9081150290604051600060405180830381858888f19350505050158015611170573d6000803e3d6000fd5b50505050505050565b606081518351146111bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b690614030565b60405180910390fd5b6000835167ffffffffffffffff8111156111dc576111db613128565b5b60405190808252806020026020018201604052801561120a5781602001602082028036833780820191505090505b50905060005b84518110156112875761125785828151811061122f5761122e613e35565b5b602002602001015185838151811061124a57611249613e35565b5b6020026020010151610757565b82828151811061126a57611269613e35565b5b6020026020010181815250508061128090613be7565b9050611210565b508091505092915050565b50505050505050505050565b600b6000600554815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461130e57600080fd5b60001515600b600083815260200190815260200160002060020160149054906101000a900460ff1615151461134257600080fd5b6000600f6000600b600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600c6000600b600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600b600085815260200190815260200160002060000154815260200190815260200160002060006101000a81548160ff0219169083151502179055507f964b7303b4bad5535d8a5957f8004a3b1660c69e28bcf4acaf8722a98093ab268160405161152e9190612e53565b60405180910390a150565b600b600082815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146115a757600080fd5b6000600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600e6000600b600085815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600c6000600b600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600b600085815260200190815260200160002060000154815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600b600083815260200190815260200160002060020160146101000a81548160ff0219169083151502179055507fed09dd8fc9e4d4520d5fdc763556e0bd7654758b90d2a2fbb6f1e1e69309eacc816040516117c29190612e53565b60405180910390a150565b505050505050505050565b600b6020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16905084565b600e6020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b61189661188f61210b565b8383612435565b5050565b60045481565b600060036000838152602001908152602001600020549050919050565b60055481565b600f6020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60085481565b60001515600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff1615151461196657600080fd5b600060016005546119779190613b91565b90506005600081548092919061198c90613be7565b919050555081600b60008381526020019081526020016000206000018190555082600b600083815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600b600083815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600b600083815260200190815260200160002060020160146101000a81548160ff0219169083151502179055506001600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600f60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600c60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002060006101000a81548160ff0219169083151502179055507f641cd3b70e0705aced039421747d9454dfca5dd7414c708d2220b204f0ca3d6e8282604051611bf1929190614050565b60405180910390a1505050565b600a602052806000526040600020600091509050806000018054611c2190613c83565b80601f0160208091040260200160405190810160405280929190818152602001828054611c4d90613c83565b8015611c9a5780601f10611c6f57610100808354040283529160200191611c9a565b820191906000526020600020905b815481529060010190602001808311611c7d57829003601f168201915b5050505050908060010154908060020154905083565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6009602052816000526040600020602052806000526040600020600091509150505481565b611d7161210b565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480611db75750611db685611db161210b565b611cb0565b5b611df6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ded90613e15565b60405180910390fd5b611e0385858585856125a2565b81600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008581526020019081526020016000206000828254611e639190613e64565b9250508190555081600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008581526020019081526020016000206000828254611eca9190613b91565b925050819055505050505050565b600d6020528060005260406000206000915090505481565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611fca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fc1906140eb565b60405180910390fd5b6000611fd461210b565b90506000611fe18561283e565b90506000611fee8561283e565b9050611fff836000898585896128b8565b8460008088815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461205e9190613b91565b925050819055508673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6289896040516120dc929190614050565b60405180910390a46120f3836000898585896128c0565b612102836000898989896128c8565b50505050505050565b600033905090565b8151835114612157576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161214e9061417d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156121c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121be9061420f565b60405180910390fd5b60006121d161210b565b90506121e18187878787876128b8565b60005b845181101561239257600085828151811061220257612201613e35565b5b60200260200101519050600085838151811061222157612220613e35565b5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156122c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122b9906142a1565b60405180910390fd5b81810360008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546123779190613b91565b925050819055505050508061238b90613be7565b90506121e4565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516124099291906142c1565b60405180910390a461241f8187878787876128c0565b61242d818787878787612aaf565b505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156124a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161249b9061436a565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516125959190612f0e565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415612612576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126099061420f565b60405180910390fd5b600061261c61210b565b905060006126298561283e565b905060006126368561283e565b90506126468389898585896128b8565b600080600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050858110156126dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126d4906142a1565b60405180910390fd5b85810360008089815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560008089815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546127929190613b91565b925050819055508773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628a8a60405161280f929190614050565b60405180910390a4612825848a8a86868a6128c0565b612833848a8a8a8a8a6128c8565b505050505050505050565b60606000600167ffffffffffffffff81111561285d5761285c613128565b5b60405190808252806020026020018201604052801561288b5781602001602082028036833780820191505090505b50905082816000815181106128a3576128a2613e35565b5b60200260200101818152505080915050919050565b505050505050565b505050505050565b6128e78473ffffffffffffffffffffffffffffffffffffffff16612c96565b15612aa7578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b815260040161292d9594939291906143df565b602060405180830381600087803b15801561294757600080fd5b505af192505050801561297857506040513d601f19601f82011682018060405250810190612975919061444e565b60015b612a1e57612984614488565b806308c379a014156129e157506129996144aa565b806129a457506129e3565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129d891906130dc565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a15906145b2565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614612aa5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a9c90614644565b60405180910390fd5b505b505050505050565b612ace8473ffffffffffffffffffffffffffffffffffffffff16612c96565b15612c8e578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401612b14959493929190614664565b602060405180830381600087803b158015612b2e57600080fd5b505af1925050508015612b5f57506040513d601f19601f82011682018060405250810190612b5c919061444e565b60015b612c0557612b6b614488565b806308c379a01415612bc85750612b806144aa565b80612b8b5750612bca565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bbf91906130dc565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bfc906145b2565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614612c8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c8390614644565b60405180910390fd5b505b505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b828054612cc590613c83565b90600052602060002090601f016020900481019282612ce75760008555612d2e565b82601f10612d0057803560ff1916838001178555612d2e565b82800160010185558215612d2e579182015b82811115612d2d578235825591602001919060010190612d12565b5b509050612d3b9190612d3f565b5090565b5b80821115612d58576000816000905550600101612d40565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612d9b82612d70565b9050919050565b612dab81612d90565b8114612db657600080fd5b50565b600081359050612dc881612da2565b92915050565b6000819050919050565b612de181612dce565b8114612dec57600080fd5b50565b600081359050612dfe81612dd8565b92915050565b60008060408385031215612e1b57612e1a612d66565b5b6000612e2985828601612db9565b9250506020612e3a85828601612def565b9150509250929050565b612e4d81612dce565b82525050565b6000602082019050612e686000830184612e44565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612ea381612e6e565b8114612eae57600080fd5b50565b600081359050612ec081612e9a565b92915050565b600060208284031215612edc57612edb612d66565b5b6000612eea84828501612eb1565b91505092915050565b60008115159050919050565b612f0881612ef3565b82525050565b6000602082019050612f236000830184612eff565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112612f4e57612f4d612f29565b5b8235905067ffffffffffffffff811115612f6b57612f6a612f2e565b5b602083019150836001820283011115612f8757612f86612f33565b5b9250929050565b600080600080600060808688031215612faa57612fa9612d66565b5b600086013567ffffffffffffffff811115612fc857612fc7612d6b565b5b612fd488828901612f38565b95509550506020612fe788828901612def565b9350506040612ff888828901612def565b925050606061300988828901612def565b9150509295509295909350565b60006020828403121561302c5761302b612d66565b5b600061303a84828501612def565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561307d578082015181840152602081019050613062565b8381111561308c576000848401525b50505050565b6000601f19601f8301169050919050565b60006130ae82613043565b6130b8818561304e565b93506130c881856020860161305f565b6130d181613092565b840191505092915050565b600060208201905081810360008301526130f681846130a3565b905092915050565b61310781612d90565b82525050565b600060208201905061312260008301846130fe565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61316082613092565b810181811067ffffffffffffffff8211171561317f5761317e613128565b5b80604052505050565b6000613192612d5c565b905061319e8282613157565b919050565b600067ffffffffffffffff8211156131be576131bd613128565b5b602082029050602081019050919050565b60006131e26131dd846131a3565b613188565b9050808382526020820190506020840283018581111561320557613204612f33565b5b835b8181101561322e578061321a8882612def565b845260208401935050602081019050613207565b5050509392505050565b600082601f83011261324d5761324c612f29565b5b813561325d8482602086016131cf565b91505092915050565b600080fd5b600067ffffffffffffffff82111561328657613285613128565b5b61328f82613092565b9050602081019050919050565b82818337600083830152505050565b60006132be6132b98461326b565b613188565b9050828152602081018484840111156132da576132d9613266565b5b6132e584828561329c565b509392505050565b600082601f83011261330257613301612f29565b5b81356133128482602086016132ab565b91505092915050565b600080600080600060a0868803121561333757613336612d66565b5b600061334588828901612db9565b955050602061335688828901612db9565b945050604086013567ffffffffffffffff81111561337757613376612d6b565b5b61338388828901613238565b935050606086013567ffffffffffffffff8111156133a4576133a3612d6b565b5b6133b088828901613238565b925050608086013567ffffffffffffffff8111156133d1576133d0612d6b565b5b6133dd888289016132ed565b9150509295509295909350565b60008060006060848603121561340357613402612d66565b5b600061341186828701612def565b935050602061342286828701612def565b925050604061343386828701612db9565b9150509250925092565b600067ffffffffffffffff82111561345857613457613128565b5b602082029050602081019050919050565b600061347c6134778461343d565b613188565b9050808382526020820190506020840283018581111561349f5761349e612f33565b5b835b818110156134c857806134b48882612db9565b8452602084019350506020810190506134a1565b5050509392505050565b600082601f8301126134e7576134e6612f29565b5b81356134f7848260208601613469565b91505092915050565b6000806040838503121561351757613516612d66565b5b600083013567ffffffffffffffff81111561353557613534612d6b565b5b613541858286016134d2565b925050602083013567ffffffffffffffff81111561356257613561612d6b565b5b61356e85828601613238565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6135ad81612dce565b82525050565b60006135bf83836135a4565b60208301905092915050565b6000602082019050919050565b60006135e382613578565b6135ed8185613583565b93506135f883613594565b8060005b8381101561362957815161361088826135b3565b975061361b836135cb565b9250506001810190506135fc565b5085935050505092915050565b6000602082019050818103600083015261365081846135d8565b905092915050565b600060ff82169050919050565b61366e81613658565b811461367957600080fd5b50565b60008135905061368b81613665565b92915050565b6000819050919050565b6136a481613691565b81146136af57600080fd5b50565b6000813590506136c18161369b565b92915050565b6000806000806000806000806000806101408b8d0312156136eb576136ea612d66565b5b60006136f98d828e01612db9565b9a5050602061370a8d828e01612def565b995050604061371b8d828e01612def565b985050606061372c8d828e01612def565b975050608061373d8d828e01612def565b96505060a061374e8d828e01612def565b95505060c061375f8d828e01612def565b94505060e06137708d828e0161367c565b9350506101006137828d828e016136b2565b9250506101206137948d828e016136b2565b9150509295989b9194979a5092959850565b60008060008060008060008060006101208a8c0312156137c9576137c8612d66565b5b60006137d78c828d01612def565b99505060206137e88c828d01612def565b98505060406137f98c828d01612def565b975050606061380a8c828d01612def565b965050608061381b8c828d01612def565b95505060a061382c8c828d01612def565b94505060c061383d8c828d0161367c565b93505060e061384e8c828d016136b2565b9250506101006138608c828d016136b2565b9150509295985092959850929598565b60006080820190506138856000830187612e44565b61389260208301866130fe565b61389f60408301856130fe565b6138ac6060830184612eff565b95945050505050565b6138be81612ef3565b81146138c957600080fd5b50565b6000813590506138db816138b5565b92915050565b600080604083850312156138f8576138f7612d66565b5b600061390685828601612db9565b9250506020613917858286016138cc565b9150509250929050565b6000606082019050818103600083015261393b81866130a3565b905061394a6020830185612e44565b6139576040830184612e44565b949350505050565b6000806040838503121561397657613975612d66565b5b600061398485828601612db9565b925050602061399585828601612db9565b9150509250929050565b600080600080600060a086880312156139bb576139ba612d66565b5b60006139c988828901612db9565b95505060206139da88828901612db9565b94505060406139eb88828901612def565b93505060606139fc88828901612def565b925050608086013567ffffffffffffffff811115613a1d57613a1c612d6b565b5b613a29888289016132ed565b9150509295509295909350565b600060208284031215613a4c57613a4b612d66565b5b6000613a5a848285016136b2565b91505092915050565b7f455243313135353a2061646472657373207a65726f206973206e6f742061207660008201527f616c6964206f776e657200000000000000000000000000000000000000000000602082015250565b6000613abf602a8361304e565b9150613aca82613a63565b604082019050919050565b60006020820190508181036000830152613aee81613ab2565b9050919050565b6000613b01838561304e565b9350613b0e83858461329c565b613b1783613092565b840190509392505050565b60006060820190508181036000830152613b3d818688613af5565b9050613b4c6020830185612e44565b613b596040830184612e44565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613b9c82612dce565b9150613ba783612dce565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613bdc57613bdb613b62565b5b828201905092915050565b6000613bf282612dce565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415613c2557613c24613b62565b5b600182019050919050565b60006020820190508181036000830152613c4b818486613af5565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613c9b57607f821691505b60208210811415613caf57613cae613c54565b5b50919050565b60008190508160005260206000209050919050565b60008154613cd781613c83565b613ce1818661304e565b94506001821660008114613cfc5760018114613d0e57613d41565b60ff1983168652602086019350613d41565b613d1785613cb5565b60005b83811015613d3957815481890152600182019150602081019050613d1a565b808801955050505b50505092915050565b60006020820190508181036000830152613d648184613cca565b905092915050565b6000606082019050613d816000830186612e44565b613d8e60208301856130fe565b613d9b6040830184612e44565b949350505050565b7f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60008201527f6572206f7220617070726f766564000000000000000000000000000000000000602082015250565b6000613dff602e8361304e565b9150613e0a82613da3565b604082019050919050565b60006020820190508181036000830152613e2e81613df2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000613e6f82612dce565b9150613e7a83612dce565b925082821015613e8d57613e8c613b62565b5b828203905092915050565b6000613ea382612dce565b9150613eae83612dce565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613ee757613ee6613b62565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613f2c82612dce565b9150613f3783612dce565b925082613f4757613f46613ef2565b5b828204905092915050565b7f4e6f7420656e6f75676820746f6b656e73210000000000000000000000000000600082015250565b6000613f8860128361304e565b9150613f9382613f52565b602082019050919050565b60006020820190508181036000830152613fb781613f7b565b9050919050565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b600061401a60298361304e565b915061402582613fbe565b604082019050919050565b600060208201905081810360008301526140498161400d565b9050919050565b60006040820190506140656000830185612e44565b6140726020830184612e44565b9392505050565b7f455243313135353a206d696e7420746f20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006140d560218361304e565b91506140e082614079565b604082019050919050565b60006020820190508181036000830152614104816140c8565b9050919050565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b600061416760288361304e565b91506141728261410b565b604082019050919050565b600060208201905081810360008301526141968161415a565b9050919050565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006141f960258361304e565b91506142048261419d565b604082019050919050565b60006020820190508181036000830152614228816141ec565b9050919050565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b600061428b602a8361304e565b91506142968261422f565b604082019050919050565b600060208201905081810360008301526142ba8161427e565b9050919050565b600060408201905081810360008301526142db81856135d8565b905081810360208301526142ef81846135d8565b90509392505050565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b600061435460298361304e565b915061435f826142f8565b604082019050919050565b6000602082019050818103600083015261438381614347565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006143b18261438a565b6143bb8185614395565b93506143cb81856020860161305f565b6143d481613092565b840191505092915050565b600060a0820190506143f460008301886130fe565b61440160208301876130fe565b61440e6040830186612e44565b61441b6060830185612e44565b818103608083015261442d81846143a6565b90509695505050505050565b60008151905061444881612e9a565b92915050565b60006020828403121561446457614463612d66565b5b600061447284828501614439565b91505092915050565b60008160e01c9050919050565b600060033d11156144a75760046000803e6144a460005161447b565b90505b90565b600060443d10156144ba5761453d565b6144c2612d5c565b60043d036004823e80513d602482011167ffffffffffffffff821117156144ea57505061453d565b808201805167ffffffffffffffff811115614508575050505061453d565b80602083010160043d03850181111561452557505050505061453d565b61453482602001850186613157565b82955050505050505b90565b7f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b600061459c60348361304e565b91506145a782614540565b604082019050919050565b600060208201905081810360008301526145cb8161458f565b9050919050565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b600061462e60288361304e565b9150614639826145d2565b604082019050919050565b6000602082019050818103600083015261465d81614621565b9050919050565b600060a08201905061467960008301886130fe565b61468660208301876130fe565b818103604083015261469881866135d8565b905081810360608301526146ac81856135d8565b905081810360808301526146c081846143a6565b9050969550505050505056fea26469706673582212201f15e88d92f34f87e357c92df546a2418265aaede02d2481f522df2cdd5f737964736f6c63430008080033";
export async function deployContract() {
    const web3 = new Web3(window.ethereum);
    const DroplinkedContract = new web3.eth.Contract(abi);
    const droplinkedContract = DroplinkedContract.deploy({
        data: bytecode,
        arguments: [100, "0x7E311aB1A7f003059a0866322691Df23f61f2a57"]
    });
    const contract = await droplinkedContract.send({
        from: "0x7E311aB1A7f003059a0866322691Df23f61f2a57",
        gas: 4000000
    });
    return contract._address;
}