import "./usercard.css";
export default function Usercard({ name, gender, photo }) {
  return (
    <div className="cardWrapper">
      <img src={photo} />
      <div>
        <h2>{name}</h2>
        <span>{gender}</span>
      </div>
    </div>
  );
}
