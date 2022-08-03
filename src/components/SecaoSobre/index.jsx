import './style.css'

export function SecaoSobre() {

  return (
    <section className='secao-sobre'>
      <div className='limitar-secao containerSobre'>
        <h2>Quem somos nós?</h2>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

        <div className='containerCard'>
          <img src="/public/assets/imagens/loja.png" alt="Ótica" />

          <div className='cardSobre'>
            <h4>Nossas Filiais</h4>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>

          <div className='cardSobre'>
            <h4>Atendimento flexível</h4>
            <p>Nossa equipe possui é treinada para te atender</p>
          </div>

          <img src="/public/assets/imagens/atendimento.png" alt="Atendimento" />

        </div>
      </div>

    </section >
  )
};