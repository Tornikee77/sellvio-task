import Link from "next/link";
import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({ text, color, size, img, href }) => {
  return (
    <Link href={href || "/"}>
      <button
        className={`rounded ${color} ${size} ${
          img ? "flex items-center gap-2" : ""
        }`}
      >
        {img && <img src={img} alt="icon" className="w-5 h-5" />}
        {text}
      </button>
    </Link>
  );
};

export default Button;
