import Item from "../item";

describe("Teste dos Itens", () => {
    it("Deve ter os campos: nome, valor e quantidade", ()=>{
        const item = new Item('Beterraba', 2.5, 10)
        expect(item.nome).toBe('Beterraba')
        expect(item.valor).toBe(2.50)
        expect(item.quantidade).toBe(10)
    })

    it("Deve ter o preço calculado de acordo com a quantidade", ()=>{
        const item = new Item("Arroz", 0.1, 3)
        expect(item.pegaValorTotalItem()).toBeCloseTo(0.3)
    })
})