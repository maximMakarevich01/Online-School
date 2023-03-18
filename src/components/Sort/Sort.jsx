import React from "react";
import "./SortStyle.scss";
import { MdFilterAlt } from "react-icons/md";

function Sort({ value, onChangeSort }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const list = [
    {
      name: "popular (DESC)",
      sortProperty: "sales",
    },
    {
      name: "popular (ASC)",
      sortProperty: "-sales",
    },
    {
      name: "price (DESC)",
      sortProperty: "price",
    },
    {
      name: "price (ASC)",
      sortProperty: "-price",
    },
    {
      name: "name (DESC)",
      sortProperty: "fullName",
    },
    {
      name: "name (ASC)",
      sortProperty: "-fullName",
    },
  ];

  const onClickChoose = (i) => {
    onChangeSort(i);
    setIsVisible(false);
  };

  return (
    <div className="sort_label">
      <MdFilterAlt />
      <b onClick={() => setIsVisible(!isVisible)}> Sort by:</b>
      <span>{value.name}</span>
      {isVisible && (
        <div className="sort_popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickChoose(obj)}
                className={
                  value.sortProperty === obj.sortProperty ? "active" : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
