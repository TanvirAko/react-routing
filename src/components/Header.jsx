import { Col, Container, Row } from "react-bootstrap"
import "../assets/stayle.css"
import { Link } from "react-router-dom"




const Header = () => {
  return (
    <>
<Container className="box">
  <Row>
    <Col   className="col-3">
      <div className="logo">
        <Link to="/"><img className="logo_images" src="data:image/png;base64,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" alt="" /></Link>
      </div>
    </Col>
    <Col   className="col-9">
      <div className="menu d-flex ul-menu">
        <ul className="nav  ">
          <li className="nav-item "><Link to="/#" className="nav-link li_menu">সর্বশেষ</Link></li>
          <li className="nav-item"><Link to="/politics" className="nav-link li_menu">রাজনীতি</Link></li>
          <li className="nav-item"><Link to="/national" className="nav-link li_menu">জাতীয়</Link></li>
          <li className="nav-item"><Link to="/international" className="nav-link li_menu">আন্তর্জাতিক</Link></li>
          <li className="nav-item"><Link to="/economy" className="nav-link li_menu">অর্থনীতি</Link></li>
          <li className="nav-item"><Link to="/bangladesh" className="nav-link li_menu">সারাদেশ</Link></li>
          <li className="nav-item"><Link to="/sports" className="nav-link li_menu">খেলা</Link></li>
          <li className="nav-item"><Link to="/entertainment" className="nav-link li_menu">বিনোদন</Link></li>
          <li className="nav-item"><Link to="/jobss" className="nav-link li_menu">জবস</Link></li>
         
        </ul>
      </div>
    </Col>
  </Row>
  


  
</Container>
    </>
  )
}

export default Header