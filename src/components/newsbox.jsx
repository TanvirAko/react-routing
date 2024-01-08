import {  Col, Container, Row } from "react-bootstrap"
import { Data } from './../faker/data';
import { Link } from "react-router-dom";
import { GetSlug } from "../helpers/helpers";

const Newsbox = () => {
  return (
    <div>
        <Container className="w-75">
          <Row>
            <h2>আজকের খবর</h2>
            <hr />

{Data.map((item,index)=>{
  return <div key={index} style={{display:"flex"}}>
        <Col className="col-md-7">
              <h4 className="titale" style={{fontSize:"20px",fontWeight:"bold"}}>{item.titale}</h4>
              <p className="pragrafe" style={{fontSize:"15px"}}>{item.contant}</p>
             <div className="boxss d-flex"> <h6 className="publicdate"style={{fontSize:"20px",fontWeight:"bold"}}>{item.time}</h6>
              <Link to={`/${GetSlug(item.titale)}`} className="w-25 p-0 " style={{marginLeft:"22px",fontSize:"13px"}}>
              More
                </Link>   </div>         

              
            </Col>
            <Col className="col-md-1"></Col>
            <Col className="col-md-4">
              <div className="news_photo">
                <img className="news_photo" src={item.photo} alt="" />
              </div>
<h6>{item.slug}</h6>
              
            </Col>

         
  </div>
  
})}

        
          </Row>
        </Container>
    </div>
  )
}

export default Newsbox