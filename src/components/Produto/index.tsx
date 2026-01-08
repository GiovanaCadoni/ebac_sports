import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

type Props = {
  produto: ProdutoType
  aoComprar: (produto: ProdutoType) => void
}

const Produto: React.FC<Props> = ({ produto, aoComprar }) => {
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>

      <S.Titulo>{produto.nome}</S.Titulo>

      <S.Prices>
        <strong>
          {produto.preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </strong>
      </S.Prices>

      <S.BtnComprar type="button" onClick={() => aoComprar(produto)}>
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
