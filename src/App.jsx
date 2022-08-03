import { Topo } from '../src/components/Topo';
import { Banner } from './components/Banner';
import { Rodape } from './components/Rodape';
import { SecaoContato } from './components/SecaoContato';
import { SecaoProdutos } from './components/SecaoProdutos';
import { SecaoSobre } from './components/SecaoSobre';
import './Style/Style.css';

export default function App() {
  return ( 
    <div className='limitar-secao'>
      <Topo />
      <Banner />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContato />
      <Rodape />
    </div>
  )
}
