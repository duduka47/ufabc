import Form from "~/components/pages/auth/Form.js";
import type { Route } from "./+types/auth.js";

export default function Auth() {
   return (
      <main className="h-screen">
         <Form />
      </main>
   );
}

export async function action({ request }: Route.ActionArgs) {
   const formData = await request.formData();
   const userData = {
      type: formData.get("type") as "login" | "register",
      name: formData.get("name") as string | null,
      ra: formData.get("ra") as string | null,
      password: formData.get("password") as string | null,
   };

   let errors = {
      name: [] as string[],
      ra: [] as string[],
      password: [] as string[],
   };

   if (userData.type === "register") {
      userData.name !== null &&
      userData.name !== "" &&
      userData.name.length >= 5
         ? null
         : errors.name.push("Nome inválido.");
   }

   userData.ra !== null && userData.ra !== "" && /^\d{11}$/.test(userData.ra)
      ? null
      : errors.ra.push("RA inválido. Deve conter exatamente 11 dígitos.");

   userData.password !== null &&
   userData.password !== "" &&
   userData.password.length >= 6
      ? null
      : errors.password.push(
           "Senha inválida. Deve conter pelo menos 6 caracteres.",
        );

   if (errors.name.length || errors.ra.length || errors.password.length) {
      return { errors };
   }

   // todo: implementar lógica de autenticação/registro aqui enviando requisicoes para o backend e tratando as respostas adequadamente

   return { success: true };
}
