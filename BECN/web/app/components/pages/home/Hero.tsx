import Logo from "~/assets/images/ufabc_logo.png";
import CTA from "~/components/buttons/CTA.js";

export default function Hero() {
   return (
      <section className="flex flex-col items-center justify-center gap-8">
         <div className="flex flex-col gap-2">
            <h1 className="text-center text-xl font-bold">
               BASE EXPERIMENTAL DAS CIÊNCIAS NATURAIS
            </h1>
            <p className="text-center text-sm text-secondary">
               Bem-vindo ao portal da Base Experimental das Ciências Naturais!
            </p>
         </div>
         <img
            src={Logo}
            alt="UFABC Logo"
            className="w-48 h-auto object-contain"
         />
         <CTA>Acessar</CTA>
      </section>
   );
}
