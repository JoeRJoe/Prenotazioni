import "./App.css";
import useWallet from "./useWallet";
import { Buffer } from "buffer";
import useUser from "./useUser";
import { useState } from "react";

window.Buffer = Buffer;

function App() {
  const [wallet, connectWallet] = useWallet();
  const [utente, createUser, login, logout] = useUser(wallet);
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const connectButton = (
    <button onClick={connectWallet}>Connetti Wallet</button>
  );

  const loginButton = <button onClick={login}>Login con Phantom</button>;
  const logoutButton = <button onClick={logout}>Logout</button>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser({
      nome: nome,
      cognome: cognome,
      username: username,
      password: password,
    });
  };

  const userForm = (
    <div>
      <form>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          name="nome"
          id="nome"
        />
        <br />
        <label htmlFor="cognome">Cognome</label>
        <input
          type="text"
          value={cognome}
          onChange={(e) => setCognome(e.target.value)}
          name="cognome"
          id="cognome"
        />
        <br />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          id="username"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Crea Utente</button>
      </form>
    </div>
  );

  return (
    <>
      {!wallet && connectButton}
      {!utente && wallet && loginButton}
      <br />
      <br />
      {!utente && wallet && userForm}
      <br />
      {!!utente && utente.nome} {!!utente && utente.cognome}
      <br />
      {!!utente && logoutButton}
    </>
  );
}

export default App;
