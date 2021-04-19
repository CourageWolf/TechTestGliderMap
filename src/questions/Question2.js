import React, { useState } from "react";

export default function Question2(props) {
  // Situation: Create a search bar that filters items in the list as the user types.
  // Feel free to refactor as you feel necessary.

  const shoppingList = [
    "Peanut Butter",
    "Peas",
    "Butter",
    "Beans",
    "Eggs",
    "Quiche",
    "Cheese",
  ];

  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(shoppingList);

  const handleSearchTextChange = (e) => {
    const test = shoppingList.filter((item) => {
      return item.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setList(test);
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input value={searchText} onChange={handleSearchTextChange} />
      {list.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}
