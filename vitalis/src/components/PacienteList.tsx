import type { Paciente } from "../types/paciente";
import { PacienteCard } from "./PacienteCard";

interface PacienteListProps {
  pacienteList: Paciente[];
}

export function PacienteList({ pacienteList = [] }: PacienteListProps) {
  if (pacienteList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-10 bg-gray-50 rounded-lg border">
         <p className="text-lg font-medium text-gray-700">Nenhum paciente encontrado.</p>
         <p className="text-gray-500">Cadastre um novo paciente para começar.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
      {pacienteList.map((paciente) => (
        <PacienteCard key={paciente.id} paciente={paciente} />
      ))}
    </div>
  );
}