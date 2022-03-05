import React, { useState } from "react";
import Lists from "./components/birthdayreminder/Lists";
import { Button } from "reactstrap";
import data from "./components/birthdayreminder/data.js";

const App = () => {
  const [people, SetPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <Lists people={people} />
        <Button color="info" onClick={() => SetPeople([])}>
          clear all
        </Button>
      </section>
    </main>
  );
};

export default App;
