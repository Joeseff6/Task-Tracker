const formatDate = (date) => {
  const dateArr = date.split("-").map((element) => parseInt(element));
  const [year, month, day] = dateArr;
  return `${month}/${day}/${year}`;
};

export default formatDate;