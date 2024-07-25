// import React from "react";
// import Link from "next/link";

// interface CardProps {
//   title: string;
//   content: string;
//   link?: string; 
// }

// const Card: React.FC<CardProps> = ({ title, content, link }) => {
//   const cardContent = (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h3 className="text-xl font-semibold mb-4">{title}</h3>
//       <p className="text-lg">{content}</p>
//     </div>
//   );

//   return link ? (
//     <Link href={link}>
//       <a>{cardContent}</a>
//     </Link>
//   ) : (
//     cardContent
//   );
// };

// export default Card;


import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  content: string;
  link?: string;
  imageSrc?: string; 
}

const Card: React.FC<CardProps> = ({ title, content, link, imageSrc }) => {
  const cardContent = (
    <div className="bg-white shadow-md rounded-lg p-6">
     
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto mb-4 rounded-md" 
        />
      )}
      <p className="text-lg">{content}</p>
    </div>
  );

  return link ? (
    <Link href={link}>
      <a>{cardContent}</a>
    </Link>
  ) : (
    cardContent
  );
};

export default Card;
