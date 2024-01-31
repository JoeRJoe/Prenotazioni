import "./App.css";
import { PublicKey } from "@solana/web3.js";
import { Program, utils } from "@project-serum/anchor";
import { useCallback, useEffect, useState } from "react";
import useProvider from "./useProvider";
import useProgram from "./useProgram";

export default function useUser(wallet) {
  const [utente, setUtente] = useState(null);
  const [getProvider] = useProvider("devnet", "processed");
  const [SystemProgram, programId, idl] = useProgram();

  const createUser = async ({ nome, cognome, username, password }) => {
    try {
      const provider = getProvider();
      const gestionePrenotazioni = new Program(idl, programId, provider);
      const [utente] = PublicKey.findProgramAddressSync(
        [
          utils.bytes.utf8.encode("user_info"),
          provider.wallet.publicKey.toBuffer(),
        ],
        programId
      );
      await gestionePrenotazioni.rpc.createUtente(
        nome,
        cognome,
        username,
        password,
        {
          accounts: {
            utente,
            user: provider.wallet.publicKey,
            systemProgram: SystemProgram.programId,
          },
        }
      );
      console.log("Utente creato");
      await getUserCached();
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async () => {
    const provider = getProvider();
    const program = new Program(idl, programId, provider);
    const utente = PublicKey.findProgramAddressSync(
      [
        utils.bytes.utf8.encode("user_info"),
        provider.wallet.publicKey.toBuffer(),
      ],
      programId
    );
    const user = await program.account.utente.fetch(utente[0]);
    setUtente(user);
    console.log(user);
  };

  const login = async () => {
    try {
      await getUserCached();
    } catch (error) {
      window.alert("Utente non trovato");
    }
  };

  const logout = () => {
    setUtente(null);
  };

  const getUserCached = useCallback(getUser, [getProvider, programId, idl]);

  useEffect(() => {
    if (wallet) {
      getUserCached();
    }
  }, [wallet]);

  return [utente, createUser, login, logout];
}
