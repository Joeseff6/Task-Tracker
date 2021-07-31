const Button = ({ text, backgroundColor, color }) => {
  return (
    <div>
      <button className='btn mb-3' style={{backgroundColor: backgroundColor, color: color}}>
        <span>{text}</span>
      </button>
    </div>
  )
}

export default Button
