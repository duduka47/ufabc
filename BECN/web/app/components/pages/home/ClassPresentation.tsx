import Card from "./Card.js";

export default function ClassPresentation() {
   return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <Card
            title="Objetivo da Disciplina"
            description="Introduzir ao estudante como se desenvolve um como se desenvolve um projeto científico."
         />
         <Card
            title="Aulas/Projetos"
            description={`Pêndulo simples
Fermentação
Método Científico
Projeto Final`}
         />
      </section>
   );
}
