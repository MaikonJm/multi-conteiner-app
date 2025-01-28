import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]); // Estado para armazenar os dados da API
  const [loading, setLoading] = useState(true); // Estado para controle de carregamento
  const [error, setError] = useState(null); // Estado para exibir erros

  // Função para buscar os usuários da API
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users"); // URL do backend
      setUsers(response.data); // Atualiza o estado com os dados da API
      setLoading(false); // Para o carregamento
    } catch (err) {
      setError("Erro ao buscar usuários"); // Exibe o erro caso ocorra
      setLoading(false);
    }
  };

  // UseEffect para carregar os dados na montagem do componente
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista de Usuários</h1>
      {users.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>Nome:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
