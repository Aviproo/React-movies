import "./Components.css";
import Alldata from "./Data";
function Card(props) {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <a href={props.link} target="blank">
            <img src={props.image} className="cardimg" />
            <p className="name">{props.sname} </p>
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}
export default Card;
