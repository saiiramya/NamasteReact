import React from "react";
import ReactDOM from "react-dom/client"

{
  /* <div>
    <div>
        <h1>I am h1</h1>
        <h2>I am h2</h2>
    </div>
    <div>
        <h1>I am h1</h1>
        <h2>I am h2</h2>
    </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ]),
]);

console.log(parent);

const heading = React.createElement("h1", {}, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
