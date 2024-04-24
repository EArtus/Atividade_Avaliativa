import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

function DetalhesEquipamento() {
  const router = useRouter();
  const { id } = router.query; // Pega o ID da URL
  const [equipamento, setEquipamento] = useState(null);

  useEffect(() => {
    if (id) {
      fetchEquipamento(id);
    }
  }, [id]);

  const fetchEquipamento = async (equipamentoId) => {
    try {
      const response = await axios.get(`http://localhost:3000/equipamentos/${equipamentoId}`);
      setEquipamento(response.data);
    } catch (error) {
      console.error('Erro ao buscar detalhes do equipamento:', error);
    }
  };

  if (!equipamento) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Detalhes do Equipamento</h1>
      <p><strong>Tipo:</strong> {equipamento.tipo}</p>
      <p><strong>Marca:</strong> {equipamento.marca}</p>
      <p><strong>Modelo:</strong> {equipamento.modelo}</p>
      <p><strong>Número de Série:</strong> {equipamento.numeroSerie}</p>
      <p><strong>Data de Aquisição:</strong> {equipamento.dataAquisicao}</p>
      <p><strong>Status de Disponibilidade:</strong> {equipamento.statusDisponibilidade}</p>
    </div>
  );
}

export default DetalhesEquipamento;
