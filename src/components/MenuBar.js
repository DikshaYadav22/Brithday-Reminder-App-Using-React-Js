import React, { memo } from "react";
import { Button } from "reactstrap";

const MenuBar = memo(({ filterItem, navData }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="btn-group">
          {navData.map((curElem) => {
            return (
              <>
                <Button color="info" onClick={() => filterItem(curElem)}>
                  {curElem}
                </Button>
              </>
            );
          })}
        </div>
      </nav>
    </div>
  );
});

export default MenuBar;
