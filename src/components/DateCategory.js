import React from "react";
import Button from "./Button";

const DateCategory = ({ onClick }) => {
  const categories = ["Past Due", "Today", "Tomorrow", "This Week", "This Month", "All Tasks"];

  return (
    <>
      {categories.map((category, index) => (
        <div className="col" key={category} style={{borderBottom: '2px solid black'}}>
          <Button text={category} index={index} onClick={onClick[index]}/>
        </div>
      ))}
    </>
  );
};

export default DateCategory;
