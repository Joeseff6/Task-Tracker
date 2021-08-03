const Button = ({ text, backgroundColor, onClick }) => {
  return (
    <button
      className="btn mb-3"
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
