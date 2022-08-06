import './style.css'
export function Topo() {
  return (
    <header>
      <div className="limitar-secao responsivo" >
        <a href="index.html">
          <img src="/public/assets/imagens/logo.png" alt="Óticas vida" />
        </a>
        <div></div>
        <nav>
          <a href="#linkProdutos">Produtos</a>
          <a href="#linkSobre">Sobre</a>
          <a href="#linkContato">Contato</a>
        </nav>
      </div>
    </header>
  )
}