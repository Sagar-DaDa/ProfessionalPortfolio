import { useState } from "react";

const DivAnchor = ({ children, onClick, className, style }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const hoverStyle = {
    backgroundColor: isHovered ? "rgba(0,0,0,0.90)" : "rgba(0,0,0,0.70)",
    transition: "all 0.3s",
    cursor: "pointer"
  };

  return (
    <div
      className={`bg-blur-3 ${className}`}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ ...hoverStyle, ...style }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DivAnchor;
