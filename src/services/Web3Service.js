import Web3 from "web3";
import ABI from "./ABI.json"

const contract_address = "0xaf99695f8Fb352F2e586E4FbD5e3705055a48945"

export async function doLogin(){

    if(!window.ethereum) throw new Error("Sem MetaMask Instalado.");

    const web3 = new Web3(window.ethereum)
    const accounts  = await web3.eth.requestAccounts()
    console.log(accounts)
    if(!accounts || !accounts.length) throw new Error("Carteira não Permitida")

    localStorage.setItem('wallet',accounts[0].toLocaleLowerCase())

    return accounts[0]
}


export async function getOpenRequests(lastID){

    if(!window.ethereum) throw new Error("Sem MetaMask Instalado.");

    const from = localStorage.getItem('wallet')
    const web3 = new Web3(window.ethereum)

    const contract = new web3.eth.Contract(ABI,contract_address,{from})
    const requests = await contract.methods.getOpenRequests(lastID,10).call()
    return requests.filter(rq=>rq.title !=="")


}

export async function openRequest(doc){
    console.log(doc)
    if(!window.ethereum) throw new Error("Sem MetaMask Instalado.");

    const from = localStorage.getItem('wallet')
    const web3 = new Web3(window.ethereum)
    const contract = new web3.eth.Contract(ABI,contract_address,{from})
    const request = await contract.methods.openRequest(doc['title'],doc['description'],doc['contact'],Web3.utils.toWei(doc['goal'],"ether")).send()
}


export async function closeRequest(id_request){
    if(!window.ethereum) throw new Error("Sem MetaMask Instalado.");

    const from = localStorage.getItem('wallet')
    const web3 = new Web3(window.ethereum)
    const contract = new web3.eth.Contract(ABI,contract_address,{from})
    const request = await contract.methods.closeRequest(id_request).send()


}

export async function donate(id_request,value){

    const from = localStorage.getItem('wallet')
    const web3 = new Web3(window.ethereum)
    const contract = new web3.eth.Contract(ABI,contract_address,{from})
    const request = await contract.methods.donate(id_request).send({
        value:Web3.utils.toWei(value,"ether")
    })
}