import React from "react";

const DateCategory = () => {
  const categories = ["Today", "Tomorrow", "This Week", "This Month", "Calendar"];

  return (
    <>
      {categories.map((category) => (
        <div className="col" key={category} style={{borderBottom: '2px solid black'}}>
          <h3 className="text-center">{category}</h3>
        </div>
      ))}
    </>
  );
};

export default DateCategory;
