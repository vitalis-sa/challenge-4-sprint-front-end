import { z } from "zod";


export const consultaEditSchema = z.object({
  id: z.number(), 
  dataHora: z.string().min(1, "Data é obrigatória"),
  especialidade: z.string().min(3, "Especialidade é obrigatória"),
  idPaciente: z.number(), 
});


export const detalhePacienteSchema = z.object({
 
  nome: z.string().min(3, "Nome é obrigatório"),
  cpf: z
    .string()
    .length(11, "CPF deve ter 11 dígitos")
    .regex(/^[0-9]+$/, "CPF deve conter apenas números"),
  dataNascimento: z.string().min(1, "Data de nascimento é obrigatória"),
  sexoBiologico: z.enum(["F", "M"], { message: "Selecione o sexo" }),
  escolaridade: z.string().min(3, "Escolaridade é obrigatória"),
  deficiencia: z.enum(["NENHUMA", "MOTORA", "INTELECTUAL"], {
    message: "Selecione a deficiência",
  }),
  dsAcompanhante: z.enum(["S", "N"], {
    message: "Selecione se há acompanhante",
  }),


  telefoneNumero: z
    .string()
    .min(10, "Telefone deve ter 10 ou 11 dígitos")
    .max(11, "Telefone deve ter 10 ou 11 dígitos")
    .regex(/^[0-9]+$/, "Telefone deve conter apenas números"),
  telefoneTipo: z.enum(["Celular", "Residencial", "Comercial"], {
    message: "Selecione o tipo",
  }),
  telefoneStatus: z.boolean(),


  emailEndereco: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
  emailStatus: z.enum(["A", "I"], { message: "Selecione o status" }),


  contatoNomeTipo: z.string().min(2, "Tipo de contato é obrigatório"),
  contatoTelefoneNumero: z
    .string()
    .min(10, "Telefone do contato é obrigatório")
    .max(11, "Telefone do contato deve ter 10 ou 11 dígitos")
    .regex(/^[0-9]+$/, "Telefone deve conter apenas números"),
  contatoDdi: z.string().optional(), 
  contatoDdd: z.string().optional(),


  consultas: z.array(consultaEditSchema),
});


export type PacienteDetalheFormData = z.infer<typeof detalhePacienteSchema>;