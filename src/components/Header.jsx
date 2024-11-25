import React from "react";
import Container from 'react-bootstrap/Container';
// import { Link } from "react-bootstrap/lib/Navbar";
import Row from 'react-bootstrap/Row';

function Header(){


function Pizza(props){
return <div className="flex">
  <div className="image">
    <img src={props.url} alt="" />
  </div>
  <div className="text">

  <h2>{props.title}</h2>
  <p>{props.desc}</p>
  </div>
</div>
}

  let nav={fontSize: "20px", color: "#000",}
    return <div>
      <Container>
      <Row>
      <ul style={nav} className="nav m-2 nav-pills">
    <li className="nav-item m-2">
      home
    </li>
    <li className="nav-item m-2">
     About
    </li>
    <li className="nav-item m-2">
     Service
    </li>
    <li className="nav-item m-2">
     Contact
    </li>
  </ul>
<Pizza url="https://curlytales.com/wp-content/uploads/2019/09/pizza3.jpg" title="hello props" desc="PIZZA! This word is just music to our ears and a treat for our tummies. But you would be interested to know that your favourite Margherita Pizza was actually named after an Italian queen. Fashioned around the Italian flag colours— red, white and green— a pizza with tomato sauce, mozzarella cheese and basil was presented to King Umberto I and Queen Margherita by the royal baker Raffaele Esposito. A culinary rescue from the jaded French haute cuisine. So now that you know the background of your favourite Italian dish, satisfy your pizza cravings at these 22 best pizza places in Bangalore." />
<Pizza url="https://curlytales.com/wp-content/uploads/2019/09/pizza3.jpg" title="hello props" desc="PIZZA! This word is just music to our ears and a treat for our tummies. But you would be interested to know that your favourite Margherita Pizza was actually named after an Italian queen. Fashioned around the Italian flag colours— red, white and green— a pizza with tomato sauce, mozzarella cheese and basil was presented to King Umberto I and Queen Margherita by the royal baker Raffaele Esposito. A culinary rescue from the jaded French haute cuisine. So now that you know the background of your favourite Italian dish, satisfy your pizza cravings at these 22 best pizza places in Bangalore." />
      </Row>
      </Container>
    </div>
}
export default Header;
