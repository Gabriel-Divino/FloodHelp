"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./create.css"
import { openRequest } from "@/services/Web3Service";

export default function CreatePage() {


    const click = () =>{

        const doc = {
            title:document.getElementById('title').value,
            description:document.getElementById('description').value,
            contact:document.getElementById('contact').value,
            goal:document.getElementById('goal').value,
        }

        console.log(doc)

        openRequest(doc)
        .then(response=>{
          console.log(response)
          alert("Seu Pedido Registrado com Sucesso ! Aguarde alguns instantes até aparecer na Tela Inicial :)")
          window.location.href = "/"
        })
        .catch(err=>{
          console.log(err)
          alert("Aconteceu Algum erro :(")
        })

    }


    return (
      <main>

        <Header />
  
      <div id="form">

        <p>
          <label>
            Titulo
          </label>

          <input type="text" className="form-control"  id="title"/>
        </p>

        <p>
          <label>
            Descrição
          </label>

          <textarea class="form-control" id="description"></textarea>
        </p>

        <p>
          <label>
            Contato
          </label>

          <input type="text" className="form-control" id="contact" />
        </p>

        <p>
          <label>
            Meta em BNB
          </label>

          <input type="number" className="form-control" id="goal"/>
        </p>

        <button className="btn btn-dark" onClick={click}>Enviar Pedido</button>

      </div>
  
      <Footer />
  
         
      </main>
    );
  }
  