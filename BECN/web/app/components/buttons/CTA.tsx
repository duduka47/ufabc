import { Link } from "react-router";

export default function CTA({
   children,
   primary = false,
   link = "",
   onClick,
}: {
   children: React.ReactNode;
   primary?: boolean;
   link?: string;
   onClick?: () => void;
}) {
   const style = `${primary ? "bg-btn hover:bg-btn-hover text-fg" : "bg-btn-secondary hover:bg-btn-secondary-hover text-btn-secondary-text"} transition-colors ease-in-out duration-300 px-5 py-3 font-semibold rounded`;

   if (link) {
      return (
         <Link
            to={link}
            className={style}
            onClick={onClick}
         >
            {children}
         </Link>
      );
   }

   return (
      <button
         className={style}
         onClick={onClick}
      >
         {children}
      </button>
   );
}
