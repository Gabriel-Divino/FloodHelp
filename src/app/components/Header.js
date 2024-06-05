export default function Header(){




    return(
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <h3 style={{color:"white"}} ><a href="/" style={{color:"white",textDecoration:"none"}}>FloodHelp</a></h3>

        <div className="text-end col-9">
        <button type="button" className="btn btn-outline-light me-2">
          <img src="/metamask.svg" width="24" className="me-3" />
            Entrar
        </button>
        </div>
        <a href="/create" className="btn btn-warning">Pedir Ajuda</a>
      </nav>
    )
}