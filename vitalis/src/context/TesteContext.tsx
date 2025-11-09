import { createContext, useCallback, useContext } from "react";
import { API_VITALIS } from "../api/vitalis-api";

const API_TESTES_ENDPOINT = `${API_VITALIS}/testes`;

// Este é o tipo do JSON que o backend espera (CadastroTesteDto)
type TestePayload = {
  idPaciente: number;
  connectivity?: { status: "success" | "failure" };
  camera?: { status: "success" | "failure" };
  mic?: { status: "success" | "failure" };
};

interface TesteContextProps {
  // A função recebe o payload formatado
  saveTeste: (testeData: TestePayload) => Promise<void>;
}

export const TestesContext = createContext<TesteContextProps>(
  {} as TesteContextProps
);

interface TestesProviderProps {
  children: React.ReactNode;
}

export function TestesProvider({ children }: TestesProviderProps) {

  const saveTeste = useCallback(async (value: TestePayload) => {
    const response = await fetch(API_TESTES_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(value),
    });

    if (!response.ok) {
      throw new Error(`Falha ao salvar o teste: ${response.status}`);
    }

    console.log("Teste salvo com sucesso!", value);
  }, []);


  return (
    <TestesContext.Provider
      value={{
        saveTeste,
      }}
    >
      {children}
    </TestesContext.Provider>
  );
}

export const useTestes = () => {
  return useContext(TestesContext);
};