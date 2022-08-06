import './style.css';

export function SecaoProdutos() {

  return (
    <section className='secao-produtos'>
      <div className='limitar-secao' id='linkProdutos'>

        <h2>Nossos Produtos</h2>
        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>


        <div className='containerCards'>
          <div className='cards'>
            <h3>Óculos de grau</h3>
            <img src="/public/assets/imagens/oculos01.png" alt="Imagem óculos de grau" />
            <p>R$ 500,00</p>
          </div>

          <div className='cards'>
            <h3>Óculos transition</h3>
            <img src="/public/assets/imagens/oculos02.png" alt="Imagem óculos transition" />
            <p>R$ 750,00</p>
          </div>

          <div className='cards'>
            <h3>Óculos de sol</h3>
            <img src="/public/assets/imagens/oculos03.png" alt="Imagem óculos de sol" />
            <p>R$ 700,00</p>
          </div>

          <div className='cards'>
            <h3>Óculos infantil</h3>
            <img src="/public/assets/imagens/oculos04.png" alt="Imagem óculos de infantil" />
            <p>R$ 500,00</p>
          </div>
        </div>

        <p>Todos os nossos produtos incluem:</p>

        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>

      </div>

    </section>
  )
}