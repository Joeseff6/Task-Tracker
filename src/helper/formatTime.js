const formatTime = (time) => {
  const timeArr = time.split(":");
  const [hour, minute] = timeArr;
  if (parseInt(hour) === 0) return `12:${minute} AM`;
  if (parseInt(hour) === 12) return `${parseInt(hour)}:${minute} PM`;
  if (parseInt(hour) > 12) return `${parseInt(hour) - 12}:${minute} PM`;
  return `${parseInt(hour)}:${minute} AM`;
}

export default formatTime;