import { Container, Row } from "react-bootstrap"
import Header from "../components/Header"
import { useState } from "react"

const Politics= () => {


const [count,setCount] = useState(0);

const hendelcounterInc =() =>{setCount ((prevstate)=> prevstate + 1)}
const hendelercounterDec = ()=>{setCount ((prevstate)=> prevstate - 1)}
const hendelcounterResate = ()=>{setCount(0)}

const [bg,setbg] = useState("red");




  return (
    <>
      <Header/>
      
      <Container>
        <Row>
          <div className="col-md-6 m-auto">
            <div className="card" style={{backgroundColor:bg}}>
              <div className="card-body shadow">
                <h4 className=" text-center" style={{fontSize:"50px"}}> {count} </h4> 
                </div>
              <div className=" card-footer shadow">
                <div className="button-box text-center">
                  <button className=" btn btn-danger p-0 w-25 shadow" onClick={hendelercounterDec}>--</button> &nbsp;
                  <button className=" btn btn-info p-0 w-25 shadow" onClick={hendelcounterInc}>++</button>&nbsp;
                  <button className=" btn btn-warning p-0 w-25 shadow" onClick={hendelcounterResate}>Reaset</button>
                </div>
              </div>
              <div className=" card-footer">
                <div className="colors- text-center">
                <button  className="btn btn-primary"onClick={()=>setbg("#42bff5")}>Primary</button>&nbsp;
                <button  className="btn btn-secondary"onClick={()=>setbg("#dde6eb")}>Secondary</button>&nbsp;
                <button  className="btn btn-success" onClick={()=>setbg("	#22bb33")}>Success</button>&nbsp;
                <button  className="btn btn-danger" onClick={()=>setbg("	#bb2124")}>Danger</button>&nbsp;
                <button  className="btn btn-warning"onClick={()=>setbg("#E4fb00")}>Warning</button>&nbsp;
                <button  className="btn btn-info"onClick={()=>setbg("#00dcfb")}>Info</button>&nbsp;
                <button  className="btn btn-dark"onClick={()=>setbg("#000000")}>Dark</button>&nbsp;
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Politics