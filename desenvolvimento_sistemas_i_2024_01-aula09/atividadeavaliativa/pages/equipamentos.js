import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Equipamentos() {
  const [equipamentos, setEquipamentos] = useState([]);
  const [filtro, setFiltro] = useState({ tipo: '', marca: '', status: '' });

  useEffect(() => {
    const fetchEquipamentos = async () => {
      const query = Object.keys(filtro)
        .filter(key => filtro[key])
        .map(key => `${key}=${encodeURIComponent(filtro[key])}`)
        .join('&');
      const response = await axios.get(`http://localhost:3000/equipamentos?${query}`);
      setEquipamentos(response.data);
    };
    fetchEquipamentos();
  }, [filtro]);

  return (
    <div>
      <h1>Equipamentos Cadastrados</h1>
      <div>
        <input type="text" placeholder="Filtrar por tipo" onChange={e => setFiltro({ ...filtro, tipo: e.target.value })} />
        <input type="text" placeholder="Filtrar por marca" onChange={e => setFiltro({ ...filtro, marca: e.target.value })} />
        <input type="text" placeholder="Filtrar por status" onChange={e => setFiltro({ ...filtro, status: e.target.value })} />
      </div>
      <ul>
        {equipamentos.map(equip => (
          <li key={equip.id}>
            {equip.tipo} - {equip.marca} - {equip.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
