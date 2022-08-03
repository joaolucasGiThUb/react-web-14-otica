import './style.css'
export function Topo() {
  return (
    <header>
      <div className="limitar-secao">
        <a href="index.html">
          <img src="/public/assets/imagens/logo.png" alt="Óticas vida" />
        </a>

        <nav>
          <a href="#">Produtos</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </header>
  )
}