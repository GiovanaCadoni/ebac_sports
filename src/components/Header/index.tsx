import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Header as HeaderEstilizado } from './styles'

const Header = () => {
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )

  return (
    <HeaderEstilizado>
      <h1>EBAC Sports</h1>

      <div>
        <span>Itens no carrinho</span>
        <img src="/cart.png" alt="Carrinho" />
        <span>{itensNoCarrinho.length}</span>
      </div>
    </HeaderEstilizado>
  )
}

export default Header
