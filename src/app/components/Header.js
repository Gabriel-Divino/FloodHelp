"use client"

import { doLogin } from "@/services/Web3Service"
import { useEffect, useState } from "react"


export default function Header(){

  const [user_authenticated,setUserAuthenticaded] = useState(null)


    const btnLoginClick =()=>{

        doLogin()

        .then(wallet=>{
          alert(wallet)
        })
        .catch(err=>{
          console.log(err)
          alert(err)
        })

    }

    useEffect(()=>{
        const user = localStorage.getItem('wallet')
        if(user != null){
          setUserAuthenticaded(true)
        }
    },[])


      const MetaMaskButton = () =>{

        if(user_authenticated != true)
        return(
          <div className="text-end col-9">
          <button type="button" className="btn btn-outline-light me-2" onClick={btnLoginClick} >
            <img src="/metamask.svg" width="24" className="me-3" />
              Entrar
          </button>
          </div>
        )
    }

    const PedirAjudarButton = () =>{
      if(user_authenticated == true)
      return(
        <a href="/create" className="btn btn-warning">Pedir Ajuda</a>)
    }

    return(
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <h3 style={{color:"white"}} ><a href="/" style={{color:"white",textDecoration:"none"}}>FloodHelp</a></h3>

        <MetaMaskButton />


       <PedirAjudarButton />
      </nav>
    )
}