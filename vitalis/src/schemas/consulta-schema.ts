import { z } from "zod";

export const consultaSchema = z.object({
 
  idPaciente: z
    .number({
    })
    .int()
    .min(1, "Selecione um paciente."), 

  especialidade: z
    .string()
    .min(1, "A especialidade é obrigatória.")
    .min(3, "A especialidade deve ter no mínimo 3 caracteres."),

  dataHora: z
    .string()
    .min(1, "A data e hora são obrigatórias.")
    .refine((val) => !isNaN(Date.parse(val)), {
        message: "Data e hora inválidas.",
    }),
});

export type ConsultaFormData = z.infer<typeof consultaSchema>;