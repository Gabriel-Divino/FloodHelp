"use client"

import { generateAvatarURL } from "@cfx-kit/wallet-avatar"
import { useEffect, useState } from "react"
import { getOpenRequests ,closeRequest,donate} from "@/services/Web3Service"
import Web3 from "web3"

export default function Request(){

    const [requests,setRequests] = useState([])

    useEffect(()=>{
        try{
            getOpenRequests(0).then(response=>{
                console.log(response)
                setRequests(response)
            })

        }catch(e){

        }
    },[])


    const Items = ({item}) =>{

        const Buttons = () =>{

            function btnCloseRequest(){
                const x = window.confirm("Você deseja mesmo encerrar essa Campanha ?")
                if(x == true){
                    closeRequest(item.id)
                    .then(response=>{
                        alert("Sua Campanha foi encerrada com Sucesso ! Em Anguns instantes a Campanha desaparecerá na Página Inicial")
                        window.location.reload()
                    })
                    .catch(err=>{
                        console.log(err)
                        alert("Aconteceu algum erro :(")
                    })

                }

            }

            function btnDonate(){
                const value = window.prompt("Quando deseja doar (em BNB) ?")
                donate(item.id,value)
                .then(response=>{
                    window.alert("Sua Doação foi Concluída com Sucesso !")
                    window.location.reload()
                })
                .catch(e=>{
                    console.log(e)
                    alert("Aconteceu Algum erro :(")
                })
            }

            if(localStorage.getItem('wallet') == item.author.toLocaleLowerCase()){
                return(
                    <button className="btn btn-danger" onClick={btnCloseRequest}>
                        Encerrar Ajudar
                    </button>
                )
            }else{
                return(
                    <a onClick={btnDonate} class="btn btn-primary">Ajudar</a>
                )
            }
        }

        return(
            <div class="card" style={{width:"70%",marginLeft:"15%",marginBottom:"2.5%"}}>
            <div class="card-body" >
                <img src={generateAvatarURL(item.author)} className="rounded-circle" style={{width:"5%",height:"70px",float:"left"}}/>
                <div style={{float:"left",marginLeft:"2.5%"}}>
                    <h5 class="card-title">{item.title} {">>"} Contato : {item.contact}</h5>
                    <p class="card-text">{item.description}</p>
                    <p>
                        Meta : BNB {Web3.utils.fromWei(item.goal,"ether")}
                    </p>
                    <p>
                        Obtido : {Web3.utils.fromWei(item.balance,"ether")}
                    </p>
                    <Buttons />
                </div>
            </div>
            </div>
        )
    }

    return(
        <div style={{marginTop:"5%"}}>
            {requests.map((i)=>(
                <Items item={i} />
            ))}

        </div>
    )


}