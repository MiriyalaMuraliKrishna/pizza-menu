import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Footer(){
    const hours = new Date().getHours();
    const openHours = 10;
    const closeHours = 22;
    const isOpenHours = hours >=openHours && hours < closeHours ? "we are currently open Rest": "sorry, we will open at tomorrow"
    return <div>
           <Container>
           <Row className="d-flex justify-content-center align-items-center">
        {isOpenHours} 🙏
        </Row>
        </Container>
    </div>
}
export default Footer;