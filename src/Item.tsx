import React, { useState } from 'react';

interface ItemProps {
  item: string;
  onRemover: () => void;
  onEditar: (novoNome: string) => void;
  onMarcarComoComprado: () => void;
}

const Item: React.FC<ItemProps> = ({ item, onRemover, onEditar, onMarcarComoComprado }) => {
  const [editMode, setEditMode] = useState(false);
  const [novoNome, setNovoNome] = useState(item);
  const [comprado, setComprado] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    onEditar(novoNome);
    setEditMode(false);
  };

  const handleCancelEdit = () => {
    setNovoNome(item);
    setEditMode(false);
  };

  const handleMarcarComoComprado = () => {
    onMarcarComoComprado();
    setComprado(!comprado);
  };

  return (
    <li>
      {editMode ? (
        <>
          <input
            type="text"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
          />
          <button onClick={handleSave}>Salvar</button>
          <button onClick={handleCancelEdit}>Cancelar</button>
        </>
      ) : (
        <>
          {item}
          <button
            onClick={handleMarcarComoComprado}
            className={comprado ? 'comprado' : ''}
          >
            {comprado ? 'Comprado' : 'Comprar'}
          </button>
          <button onClick={onRemover}>Remover</button>
          <button onClick={handleEdit}>Editar</button>
        </>
      )}
    </li>
  );
};

export default Item;