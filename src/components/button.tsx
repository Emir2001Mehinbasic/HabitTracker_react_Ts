export type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <button className="bg-blue-800 hover:bg-blue-600 transition-colors text-white py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed">
    {children}
  </button>;
};

export default Button;
