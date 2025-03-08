import React from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  buttonText?:string
  color?: "primary" | "secondary" | "danger";
  rounded?:boolean  
}

const Card: React.FC<CardProps> = ({ title, description, image,buttonText,color = "primary",rounded = false  }) => {

    const buttonColors = {
        primary: "#007bff", // Blue
        secondary: "#6c757d", // Gray
        danger: "#dc3545", // Red
      };
  return (
    <div style={{ 
      border: "1px solid #ddd", 
      padding: "16px", 
      borderRadius: "8px", 
      width: "300px", 
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)" 
    }}>
      {image && <img src={image} alt={title} style={{ width: "100%", borderRadius: "4px" }} />}
      <h2 style={{ fontSize: "20px", margin: "10px 0" }}>{title}</h2>
      <p style={{ color: "#555" }}>{description}</p>
     {
        buttonText && (
            <button className={`mt-3 px-4 py-2 text-white ${color === "primary" ? "bg-blue-500" : color === "secondary" ? "bg-gray-500" : "bg-red-500"} rounded`}>
            {buttonText}
          </button>
        )
     }
    </div>
  );
};

export default Card;
