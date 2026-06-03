import { useRef } from "react";

export default function Input({
   type = "text",
   label = "",
   error = "",
   name,
}: {
   type?: string;
   label?: string;
   error?: string;
   name: string;
}) {
   const input = useRef<HTMLInputElement>(null);

   return (
      <div className="flex flex-col gap-1 ">
         {error && <p className="text-red-500 text-sm">{error}</p>}
         <div className="relative">
            <input
               type={type}
               autoComplete="off"
               name={name}
               className="border rounded w-full p-2 border-neutral-400 peer focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ease-in-out"
               ref={input}
            />
            <label
               className="absolute top-2 left-2 text-neutral-400 peer-focus:-top-2.5 bg-card peer-focus:text-sm transition-all ease-in-out peer-focus:text-blue-500 px-2 pointer-events-none"
               onClick={() => input.current?.focus()}
               htmlFor={name}
            >
               {label}
            </label>
         </div>
      </div>
   );
}
