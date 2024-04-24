import { useState } from 'react';
import axios from 'axios';

function CadastroEquipamento() {
  const [equipamento, setEquipamento] = useState({
    tipo: '',
    marca: '',
    modelo: '',
    numero_serie: '',
    data_aquisicao: '',
    status: 'disponível'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEquipamento(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/equipamentos', equipamento);
      alert('Equipamento cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar equipamento:', error);
      alert('Erro ao cadastrar equipamento.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="tipo" value={equipamento.tipo} onChange={handleChange} placeholder="Tipo de Equipamento" required />
      <input type="text" name="marca" value={equipamento.marca} onChange={handleChange} placeholder="Marca" required />
      <input type="text" name="modelo" value={equipamento.modelo} onChange={handleChange} placeholder="Modelo" required />
      <input type="text" name="numero_serie" value={equipamento.numero_serie} onChange={handleChange} placeholder="Número de Série" required />
      <input type="date" name="data_aquisicao" value={equipamento.data_aquisicao} onChange={handleChange} required />
      <select name="status" value={equipamento.status} onChange={handleChange}>
        <option value="disponível">Disponível</option>
        <option value="indisponível">Indisponível</option>
      </select>
      <button type="submit">Cadastrar Equipamento</button>
    </form>
  );
}

export default CadastroEquipamento;
