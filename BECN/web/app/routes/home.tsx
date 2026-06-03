import Hero from "~/components/pages/home/Hero.js";
import type { Route } from "./+types/home";
import ClassPresentation from "~/components/pages/home/ClassPresentation.js";

export function meta({}: Route.MetaArgs) {
   return [
      { title: "New React Router App" },
      { name: "description", content: "Welcome to React Router!" },
   ];
}

export default function Home() {
   return (
      <main className="flex flex-col px-4 py-8 gap-16">
         <Hero />
         <ClassPresentation />
      </main>
   );
}
