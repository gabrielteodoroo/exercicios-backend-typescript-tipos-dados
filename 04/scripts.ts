const geradorEtiquetas = (infoProduto: {
   produto: string;
   lote: number;
   ano: number;
   qtd: number;
}): string[] => {
   const etiquetas: string[] = [];
   for (let i = 1; i <= infoProduto.qtd; i++) {
      etiquetas.push(
         `${infoProduto.lote}-${infoProduto.ano}-${i
            .toString()
            .padStart(3, "0")}`
      );
   }

   return etiquetas;
};

console.log(
   geradorEtiquetas({
      produto: "CPU Dual Core 3.0GHZ",
      lote: 321,
      ano: 2022,
      qtd: 5,
   })
);
