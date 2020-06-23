import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hello Dhanunjaya Please Learn SPFX As soon as Possible</h1>
  //     </div>
  //   );

  return React.createElement(
    "div",
    { id: "Hello", className: "dummyclass" },
    React.createElement(
      "h1",
      null,
      "Hello Dhanunjaya Please Learn SPFX As soon as Possible"
    )
  );
};

export default Hello;
