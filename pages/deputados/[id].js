import React from 'react'
import Pagina from '../../component/Pagina'
import apiDeputados from '../../services/apiDeputados'
import { Card, Col, Row, Table } from 'react-bootstrap'
import Link from 'next/link'

const Detalhes = ({ deputado, profissoes, despesas }) => {
    return (
        <Pagina>
            <Row>
                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={deputado.ultimoStatus.urlFoto} />
                        <Card.Body>
                            <Card.Title>{deputado.nomeCivil}</Card.Title>
                            <Card.Text>Partido:<strong>{deputado.ultimoStatus.siglaPartido}</strong><br />UF Partido: {deputado.ultimoStatus.siglaUf}
                            </Card.Text>
                            <Link className='btn btn-danger' href={'/deputados/'}>Voltar</Link>
                        </Card.Body>
                    </Card>
                </Col >
                <Col md={6}>   <h1>Despesas</h1> 
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {despesas.map(item => (
                        <tr>
                            <td>{item.dataDocumento}</td>
                            <td>{item.tipoDespesa}</td>
                            <td>{item.valorLiquido}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
                </Col>
                <Col md={3}>
                    <h1>Profissões 2</h1>
                    <ul>
                        {profissoes.map(item => (
                            <li>{item.titulo}</li>
                        ))}

                    </ul>
                </Col>
            </Row>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </Pagina>
    )
}

export default Detalhes
export async function getServerSideProps(context) {
    const id = context.params.id

    const resultado = await apiDeputados.get('/deputados/' + id)
    const deputado = resultado.data.dados

    const resproficao = await apiDeputados.get('/deputados/' + id + "/profissoes")
    const profissoes = resproficao.data.dados

    const resdespesa = await apiDeputados.get('/deputados/' + id + "/despesas")
    const despesas = resdespesa.data.dados






    return {
        props: { deputado, profissoes, despesas },
    }
}