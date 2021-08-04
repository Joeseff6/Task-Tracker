const Button = ({ text, backgroundColor, onClick, onDoubleClick, index }) => {
  return (
    <button
      className="btn mb-3"
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      data-index={index}
    >
      <span data-index={index}>{text}</span>
    </button>
  );
};

export default Button;
