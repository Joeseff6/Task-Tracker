import React from "react";

const DateCategory = () => {
  const categories = [
    "Tomorrow",
    "This Week",
    "This Month",
    "Calendar",
  ];

  return (
    <>
      <div className="row">
        <div className="col">
          <h3 className="text-center">Today</h3>
        </div>
      </div>
      {categories.map((category) => (
        <div className="row" key={category} style={{borderTop: 'black 2px solid'}}>
          <div className="col">
            <h3 className="text-center">{category}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default DateCategory;
