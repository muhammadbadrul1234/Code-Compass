import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  style: string;
  onClick: () => void;
}
const Button = ({ onClick, children, style }: ButtonProps) => {
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
