import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import ChatContainer from "../components/ChatContainer";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Usercard from "./Usercard";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const userId = location.state;
  function getpreferred() {
    axios
      .get(`http://localhost:1337/user/getpreferred/${userId}`)
      .then((data) => {
        setData(data.data.data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const swiped = (direction, cardIndex) => {
    console.log(`Card ${cardIndex} was swiped ${direction}`);
  };

  const outOfFrame = (cardIndex) => {
    console.log(`Card ${cardIndex} left the screen`);
  };

  useEffect(() => {
    getpreferred();
  }, []);

  return (
    <div>
      <ChatContainer />
      <div>
        {data.map((data, index) => (
          <Usercard
            key={index}
            gender={data.gender}
            name={data.name}
            photo={data.photo}
          />
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
