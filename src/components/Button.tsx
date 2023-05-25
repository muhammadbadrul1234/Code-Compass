import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color: "primary" | "success" | "danger";
  onClick: () => void;
}
const Button = ({ onClick, children, color: style }: ButtonProps) => {
  return (
    <div className="col-md-2 col-6">
      <button
        className={`btn btn-${style} `}
        style={{ width: "100%" }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
