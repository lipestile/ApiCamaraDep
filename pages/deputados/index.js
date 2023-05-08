import React, { useEffect, useState } from 'react'
import Pagina from '../../component/Pagina'
import apiCamara from '../../services/apiDeputados'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

const hooks = () => {

  const [deputados, setDeputados] = useState([])
  useEffect(() => {
    apiCamara.get("/deputados").then(resultado => {
      setDeputados(resultado.data.dados)
    })
  }, [])


  return (
    <Pagina titulo="Deputados">
      <Row md={'4'}> 
      {deputados.map(item => ( 
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.urlFoto} />
          <Card.Body>
            <Card.Title>{item.nome}</Card.Title>
            <Card.Text>{item.email}<br/><strong>{item.siglaPartido}</strong>
            </Card.Text>
            <Link className='btn btn-dark' href={'/deputados/' + item.id}>Detalhes</Link>
          </Card.Body>
        </Card>  
        </Col>
      ))}
      
      </Row>
    </Pagina>
  )
}

export default hooks

