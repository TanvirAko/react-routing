
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { Data } from './../faker/data';
const Sengale = () => {
  const {slug} = useParams()
  const sengalePost = Data.find((data)=> data.slug ==slug)
  return (
    <>
    <Header/>
    {sengalePost ? <Container>



<Row>
    <Col>
    <img src={sengalePost.photo} alt="" />
    </Col>
</Row>
<Row>
    <h1>{sengalePost.contant}</h1>
    <p> {sengalePost.artaciles} </p>
</Row>
</Container> : "post not founds"}

    
    
    </>
  )
}

export default Sengale