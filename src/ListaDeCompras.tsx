import React, { useState } from 'react';
import Item from './Item';
import BuscaDeItens from './BuscaDeItens';

const ListaDeCompras: React.FC = () => {
  const [itens, setItens] = useState<string[]>([]);
  const [busca, setBusca] = useState<string>('');
  const [itensFiltrados, setItensFiltrados] = useState<string[]>([]);

  const adicionarItem = (novoItem: string) => {
    setItens([...itens, novoItem]);
  };

  const removerItem = (index: number) => {
    const novosItens = [...itens];
    novosItens.splice(index, 1);
    setItens(novosItens);
  };

  const editarItem = (index: number, novoNome: string) => {
    const novosItens = [...itens];
    novosItens[index] = novoNome;
    setItens(novosItens);
  };

  const marcarComoComprado = (index: number) => {
    // Implemente a lógica de marcação como "comprado" aqui
  };

  // Atualizar a lista filtrada com base na busca
  const atualizarItensFiltrados = () => {
    const itensFiltrados = itens.filter(item =>
      item.toLowerCase().includes(busca.toLowerCase())
    );
    setItensFiltrados(itensFiltrados);
  };

  // Chamar a função de atualização da lista filtrada quando a busca mudar
  React.useEffect(() => {
    atualizarItensFiltrados();
  }, [busca, itens]);

  return (
    <div>
      <h1>Lista de Compras</h1>
      <BuscaDeItens busca={busca} setBusca={setBusca} />
      <ul>
        {itensFiltrados.map((item, index) => (
          <Item
            key={index}
            item={item}
            onRemover={() => removerItem(index)}
            onEditar={(novoNome) => editarItem(index, novoNome)}
            onMarcarComoComprado={() => marcarComoComprado(index)}
          />
        ))}
      </ul>
      <button onClick={() => adicionarItem('Novo Item')}>Adicionar Item</button>
    </div>
  );
};

export default ListaDeCompras;