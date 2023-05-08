import { Component } from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import { } from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Pagina = (props) => {


    return (
        <div style={{backgroundImage:'url("/images/hpr4bwbs.png")', backgroundSize:'cover', }}>
            <Cabecalho />
            <div className=''>
                <div className='text-center text-dark text-outline-danger p-5'>
                    <h1 className='' >{props.titulo}</h1>
                </div>
                <Container className='mb-5 '>
                    {props.children}
                </Container>
            </div>
            <Rodape/>
        </div>

    )
}

export default Pagina
