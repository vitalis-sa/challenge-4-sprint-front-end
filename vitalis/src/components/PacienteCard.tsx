import { Link } from "react-router-dom";
import { usePacientes } from "../context/PacienteContext";
import type { Paciente } from "../types/paciente";

interface PacienteCardProps {
  paciente: Paciente;
}

export function PacienteCard({ paciente }: PacienteCardProps) {
  const { removePaciente } = usePacientes();

  const dataNascFormatada = new Date(paciente.dataNascimento).toLocaleDateString('pt-BR', {
    timeZone: 'UTC'
  });

  return (
    <div className="w-full h-full rounded-lg shadow px-5 py-4 flex flex-col gap-4 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
      
      {/* Topo do Card */}
      <div className="flex justify-between items-start gap-3">
        {/* Informações */}
        <div className="flex-1"> {/* Permite que o nome quebre a linha se for longo */}
          <h2 className="text-xl font-bold text-verde-escuro">{paciente.nome}</h2>
          <p className="text-sm text-gray-500">CPF: {paciente.cpf}</p>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col gap-2 items-stretch flex-shrink-0">
          <Link
            to={`/pacientes/${paciente.id}`}
            state={{ paciente }}
            className="text-center text-sm font-medium text-verde-escuro rounded border border-verde-escuro px-4 py-1 hover:bg-verde-escuro/10 transition-colors"
          >
            Detalhes
          </Link>

          <button
            onClick={() => removePaciente(paciente.id)}
            className="text-center text-sm font-medium text-red-600 rounded border border-red-300 px-4 py-1 hover:bg-red-50 transition-colors"
          >
            Remover
          </button>
        </div>
      </div>

      {/* Informações Adicionais */}
      <div className="border-t pt-3 space-y-1"> 
        <h3 className="text-gray-700 text-sm">
          <span className="font-semibold">Nascimento:</span> {dataNascFormatada}
        </h3>
        <h3 className="text-gray-700 text-sm">
          <span className="font-semibold">Escolaridade:</span> {paciente.escolaridade}
        </h3>
        <h3 className="text-gray-700 text-sm">
            <span className="font-semibold">Deficiência:</span> {paciente.deficiencia}
        </h3>
      </div>
    </div>
  );
}