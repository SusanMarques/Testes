import Carrinho from "../carrinho";
import Item from "../item";

describe("testes do carrinho", () => {
    it("deve inicializar vazio", ()=>{
        const carrinho = new Carrinho();
        expect(carrinho.frete).toBeNull();
    });
    it("Deve ter itens", () =>{
        const item = new Item("Caderno", 4, 5);
        const item2 = new Item("Lápis", 2, 10);

        const carrinho = new Carrinho();

        carrinho.adiciona(item);
        carrinho.adiciona(item2);

        expect(typeof carrinho).toBe("object")
        expect(carrinho.itens[0]).toBe(item)
        expect(carrinho.itens[1]).toBe(item2)
        expect(carrinho.itens).toContain(item)
        expect(carrinho.itens).toContain(item2)
    });
    it("Deve ter a propriedade 'total na inicialização'" , ()=>{
        const carrinho = new Carrinho();

        expect(carrinho).toHaveProperty('total')
    })
   
})