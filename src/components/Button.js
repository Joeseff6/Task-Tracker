const Button = ({ text, backgroundColor, color }) => {
  return (
    <button
      className="btn mb-3"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
