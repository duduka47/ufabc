import { useState } from "react";
import Logo from "~/assets/images/ufabc_logo.png";
import CTA from "~/components/buttons/CTA.js";
import Input from "~/components/inputs/Input.js";

export default function Form() {
   const [type, setType] = useState<"login" | "register">("register");

   return (
      <div className="flex flex-col gap-8 items-center mt-36 px-4">
         <img
            src={Logo}
            alt="UFABC Logo"
            className="w-48 h-auto object-contain"
         />
         <form
            className="flex flex-col bg-card min-h-lg w-full max-w-lg rounded px-4 py-16 gap-6 shadow"
            method="POST"
         >
            <input
               type="hidden"
               name="type"
               value={type}
            />
            {type === "register" && (
               <Input
                  label="Nome Completo"
                  type="text"
                  name="name"
               />
            )}
            <Input
               label="RA"
               type="text"
               name="ra"
            />
            <Input
               label="Sua senha"
               type="password"
               name="password"
            />
            <CTA primary>{type === "register" ? "Registrar" : "Entrar"}</CTA>
            <button
               onClick={(e) => {
                  e.preventDefault();
                  setType((prev) =>
                     prev === "register" ? "login" : "register",
                  );
               }}
            >
               {type === "register"
                  ? "Já tenho uma conta"
                  : "Ainda não tenho uma conta"}
            </button>
         </form>
      </div>
   );
}
