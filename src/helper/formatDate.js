const formatDate = (event) => {
  const dateArr = event.target.value.split("-").map((element) => parseInt(element));
  const [year, month, day] = dateArr;
  return `${month}/${day}/${year}`;
};

export default formatDate;