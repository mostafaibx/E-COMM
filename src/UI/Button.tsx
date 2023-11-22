interface ButtonProps {
  color: "primary" | "secondary" | "delete";
  onClick?: (e: React.SyntheticEvent) => void;
  children: React.ReactNode;
}

const Button = ({ color, onClick, children }: ButtonProps) => {
  let colorStyle: string = "bg-blue-500 hover:bg-blue-700 text-white";
  if (color === "primary") {
    colorStyle = "bg-blue-500 hover:bg-blue-700 text-white";
  } else if (color === "secondary") {
    colorStyle = "bg-gray-500 hover:bg-gray-700 text-white";
  } else if (color === "delete") {
    colorStyle = "bg-red-500 hover:bg-red-700 text-white";
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`w-full flex justify-center font-bold py-2 px-4 mx-1 rounded ${colorStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;
