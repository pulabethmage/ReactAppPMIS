const Button = ({ color, text }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn btn-primary btn-sm"
    >
      {text}
    </button>
  );
};

export default Button;
