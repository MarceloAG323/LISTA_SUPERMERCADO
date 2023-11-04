import React from 'react';

interface BuscaDeItensProps {
  busca: string;
  setBusca: (busca: string) => void;
}

const BuscaDeItens: React.FC<BuscaDeItensProps> = ({ busca, setBusca }) => {
  return (
    <input
      type="text"
      placeholder="Buscar itens"
      value={busca}
      onChange={e => setBusca(e.target.value)}
    />
  );
};

export default BuscaDeItens;