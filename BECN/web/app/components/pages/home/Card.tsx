export default function Card({
   title,
   description,
}: {
   title: string;
   description: string;
}) {
   return (
      <div className="bg-card shadow hover:bg-card-hover transition-colors ease-in-out duration-300 flex flex-col rounded p-4 gap-4 col-span-1">
         <h3 className="text-lg font-bold">{title}</h3>
         <p className="text-xs text-secondary whitespace-pre-line">
            {description}
         </p>
      </div>
   );
}
