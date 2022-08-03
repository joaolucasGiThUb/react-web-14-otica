import './style.css'

export function SecaoContato() {

  return (
    <section className='secaoContato'>
      <div className='limitar-secao'>
        <h2>Fale conosco</h2>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

        <div className='contatoCards'>
          <div className='cardContato'>
            <h4>Contato</h4>
            <div className='miniCard'>
              <img src="/public/assets/imagens/local.png" alt="Localização" />
              <span>Nova Iguaçu, RJ</span>
            </div>

            <div className='miniCard'>
              <img src="/public/assets/imagens/telefone.png" alt="Telefone" />
              <span>(21) 9999-9999</span>
            </div>

            <div className='miniCard'>
              <img src="/public/assets/imagens/email.png" alt="email" />
              <span>contato@oticavida.com</span>
            </div>
          </div>

          <div className='cardContato'>
            <h4>Nossas Redes Sociais</h4>
            <div className='miniCard'>
              <img src="/public/assets/imagens/fb.png" alt="Facebook" />
              <span>/OticaVida</span>
            </div>

            <div className='miniCard'>
              <img src="/public/assets/imagens/ig.png" alt="Instagram" />
              <span>@oticavidarj</span>
            </div>

            <div className='miniCard'>
              <img src="/public/assets/imagens/tt.png" alt="Twitter" />
              <span>@oticavidarj</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
};