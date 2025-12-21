import { useSelector } from 'react-redux'
import { RootState } from '../../store'

type Props = {
  itensNoCarrinho?: any[]
}

const Header = () => {
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )

  return (
    <header>
      <h1>EBAC Sports</h1>
      <p>Itens no carrinho: {itensNoCarrinho.length}</p>
    </header>
  )
}

export default Header
