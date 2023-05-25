import { useState } from "react";

interface ListGroupProps {
  heading: string;
  listItems: string[];
  onSelected: (item: string) => void;
  selectedItems: string[];
}

const ListGroup = ({
  heading,
  listItems,
  onSelected,
  selectedItems,
}: ListGroupProps) => {
  return (
    <div className="container col-4 mt-2 mb-4">
      <h2>{heading}</h2>
      <ul className="list-group">
        {listItems.map((item, index) => (
          <li
            key={index}
            className={`list-group-item ${
              selectedItems.includes(item) ? "active" : ""
            }`}
            onClick={() => onSelected(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
