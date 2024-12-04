import Carrinho from "../carrinho";
import Item from "../item";
// deve inicializar vazio

//deve verificar se tem itens 

//Deve ter a propriedade 'total na inicialização'

describe("teste de carrinho", ()=>{
    it("verifica se tem o item ", ()=>{
        const item = new Item('Beterraba', 2.5, 10)
        const item2 = new Item('bolsa', 3, 6)
        const carrinho = new Carrinho();
        carrinho.adiciona(item);
        carrinho.adiciona(item2)

        expect(carrinho.itens[0]).toBe(item);
        expect(carrinho.itens[1]).toBe(item2)
    })
    it("Deve inicializar vazio", ()=>{
        
        const carrinho = new Carrinho();
        carrinho.adicionaFrete(null);

        expect(carrinho.frete).toBeNull()
        
    })
})

