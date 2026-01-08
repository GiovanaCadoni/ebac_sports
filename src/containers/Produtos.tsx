import { useDispatch } from 'react-redux'
import { adicionarAoCarrinho } from '../store/carSlice'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { AppDispatch } from '../store'
import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
}

const Produtos = ({ produtos }: Props) => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          aoComprar={(produto) => dispatch(adicionarAoCarrinho(produto))}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
