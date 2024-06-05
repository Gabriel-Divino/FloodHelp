import Header from "../components/Header";
import Footer from "../components/Footer";
import "./create.css"

export default function CreatePage() {
    return (
      <main>

        <Header />
  
      <div id="form">

        <p>
          <label>
            Titulo
          </label>

          <input type="text" className="form-control" />
        </p>

        <p>
          <label>
            Descrição
          </label>

          <textarea class="form-control"></textarea>
        </p>

        <p>
          <label>
            Contato
          </label>

          <input type="text" className="form-control" />
        </p>

        <p>
          <label>
            Meta em BNB
          </label>

          <input type="number" className="form-control" />
        </p>

        <button className="btn btn-dark">Enviar Pedido</button>

      </div>
  
      <Footer />
  
         
      </main>
    );
  }
  