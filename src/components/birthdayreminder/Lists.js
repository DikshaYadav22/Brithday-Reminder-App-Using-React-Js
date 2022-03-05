import React, { memo } from "react";
import { Card, CardHeader, CardText, CardTitle } from "reactstrap";

const Lists = memo(({ people }) => {
  console.log(people);
  return (
    <div className="container mx-auto">
      <Card>
        <CardTitle>
          <h4>{people.length} birthdays today!</h4>
        </CardTitle>
        {people.map((data) => {
          const { id, name, age, image } = data;
          return (
            <div key={id}>
              <CardHeader>
                <img src={image} width="50px" />

                <CardTitle>{name}</CardTitle>
                <CardText>{age}</CardText>
              </CardHeader>
            </div>
          );
        })}
      </Card>
    </div>
  );
});

export default Lists;
