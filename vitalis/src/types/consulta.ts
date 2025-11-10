import type { Paciente } from "./paciente";

export type Consulta = {
  id: number;
  dataHora: string; 
  especialidade: string;
  paciente: Paciente; 
};