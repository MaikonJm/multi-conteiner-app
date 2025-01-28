import React from "react";
import Users from "./Users"; // Importa o componente Users

const App = () => {
  return (
    <div>
      <header>
        <h1>Aplicação Multi-Contêiner</h1>
      </header>
      <main>
        <Users /> {/* Renderiza o componente de usuários */}
      </main>
    </div>
  );
};

export default App;
