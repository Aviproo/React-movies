import "./Components.css";
import React, { useState } from "react";
import Card from "./Card";
import Heading from "./Heading";
import data from "./Data";
import { click } from "@testing-library/user-event/dist/click";
import Form from "./Form";

// function alldata(all) {
//   return <Card image={all.image} link={all.link} sname={all.sname}></Card>;
// }
// function alldata(all) {
//   return <Card image={all.image} link={all.link} sname={all.sname} />;
// const [count, setCount] = useState(0);
// const click = () => {
//   setCount(count + 1);
// };
//  this is for Digital  clock
// let newtime = new Date().toLocaleTimeString();
// const [time, setime] = useState(newtime);
// const updatetime = () => {
//   newtime = new Date().toLocaleTimeString();
//   return setime(newtime);
// };
// setInterval(updatetime, 1000);
// }
//passing the detail of the time
{
  /* <span className="time">{time}</span> */
}
function App(props) {
  let entered = "click";
  const details = "Require Details";
  let [newcur, update] = useState("");
  const change = (event) => {
    const saved = event.target.value;
    console.log(saved);
    update(saved);
  };

  const click = () => {};

  return (
    <div>
      <Heading />
      <div className="newcard">
        {data.map((all) => {
          return (
            <Card
              key={all.id}
              image={all.image}
              link={all.link}
              sname={all.sname}
            />
          );
        })}
        <Form />
      </div>
    </div>
  );
}
export default App;
