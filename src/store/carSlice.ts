import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const existe = state.itens.find((item) => item.id === action.payload.id)

      if (!existe) {
        state.itens.push(action.payload)
      } else {
        alert('Item já adicionado')
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
