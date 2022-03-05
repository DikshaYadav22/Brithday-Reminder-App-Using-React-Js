import React, { useState } from "react";
import MenuCard from "./MenuCard";
import Menu from "./MenuApi.js";
import MenuBar from "./MenuBar.js";

const uniqueData = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [navItems, setNavItems] = useState(uniqueData);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((item) => {
      return item.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <div className="container mx-auto">
        <MenuBar filterItem={filterItem} navData={navItems} />
      </div>
      <MenuCard menu={menuData} />
    </>
  );
};

export default Restaurant;
