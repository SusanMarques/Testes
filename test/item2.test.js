import Item from "../item";

describe("Teste dos itens", ()=>{
    it("testar cada propriedade do item", ()=>{
        const item = new Item('bolsa', 99.99, 1);
        expect(item.nome).toBe('bolsa');
        expect(item.valor).toBe(99.99);
        expect(item.quantidade).toBe(1);
    })
    it("Deve ter o preço calculado de acordo com a quantidade",()=>{
        const item2 = new Item('casaco', 20, 5);
        expect(item2.pegaValorTotalItem()).toBe(100)
    })
})