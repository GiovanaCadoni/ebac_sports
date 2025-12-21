import { useDispatch } from 'react-redux'
import { adicionarAoCarrinho } from '../store/carSlice'
import { Produto } from '../App'
import { AppDispatch } from '../store'

type Props = {
  produtos: Produto[]
}

const Produtos = ({ produtos }: Props) => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id}>
          <img src={produto.imagem} alt={produto.nome} width={120} />
          <h3>{produto.nome}</h3>
          <p>R$ {produto.preco}</p>

          <button onClick={() => dispatch(adicionarAoCarrinho(produto))}>
            Adicionar ao carrinho
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Produtos
