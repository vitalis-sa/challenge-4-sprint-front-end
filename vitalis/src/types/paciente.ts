export type Deficiencia = "NENHUMA" | "MOTORA" | "INTELECTUAL";
export type Genero = "F" | "M";


export interface Telefone {
  ddi: number;
  ddd: number;
  numero: number;
  tipo: string;
  status: boolean;
}


export interface TipoContato {
  id: number;
  nome: string;
}

export interface Contato {
  idContato: number;
  tipoContato: TipoContato; 
  ddi: number | null;
  ddd: number | null;
  numeroTelefone: number | null;
}


export interface Email {
  id: number;
  endereco: string;
  status: string; 
}


export interface Paciente {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string; 
  sexoBiologico: Genero; 
  escolaridade: string;
  classificacao: number | null;
  deficiencia: Deficiencia;
  dsAcompanhante: string;
  nrPorcentagemFalta: number | null;
  

  telefone: Telefone | null;
  contato: Contato | null;
  email: Email | null;
}