// import "./index.css";
// import React from "react";
// import ReactDom from "react-dom";
// let curdate = new Date(2022, 9, 6, 14);
// curdate = curdate.getHours();
// let greeting = "";
// let cssStyle = {};
// if (curdate >= 1 && curdate < 11) {
//   greeting = "Good Morning";
//   cssStyle.color = "green";
// } else if (curdate >= 11 && curdate < 17) {
//   greeting = "Good AfterNoon";
//   cssStyle.color = "orange";
// } else {
//   greeting = "Good Night";
//   cssStyle.color = "brown";
// }
// ReactDom.render(
//   <React.Fragment>
//     <div className="Greet">
//       <div className="greeting">
//         Hello Sir,
//         <span style={cssStyle}>{greeting}</span>
//       </div>
//     </div>
//   </React.Fragment>,
//   document.getElementById("root")
// );
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
