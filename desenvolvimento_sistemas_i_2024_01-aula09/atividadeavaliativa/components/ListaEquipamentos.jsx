import { useState, useEffect } from 'react';
import axios from 'axios';

function ListaEquipamentos() {
  const [equipamentos, setEquipamentos] = useState([]);

  useEffect(() => {
    fetchEquipamentos();
  }, []);

  const fetchEquipamentos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/equipamentos');
      setEquipamentos(response.data);
    } catch (error) {
      console.error('Erro ao buscar equipamentos:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja remover este equipamento?')) {
      try {
        await axios.delete(`http://localhost:3000/equipamentos/${id}`);
        fetchEquipamentos();
        alert('Equipamento removido com sucesso!');
      } catch (error) {
        console.error('Erro ao remover equipamento:', error);
        alert('Falha ao remover equipamento.');
      }
    }
  };

  return (
    <div>
      <h1>Lista de Equipamentos</h1>
      <ul>
        {equipamentos.map(equipamento => (
          <li key={equipamento.id}>
            {equipamento.tipo} - {equipamento.marca} - {equipamento.modelo}
            <button onClick={() => handleDelete(equipamento.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaEquipamentos;
