import React from 'react'
import { Link } from 'react-router-dom'
//import Image from 'react-bootstrap/Image'
import { Row, Col } from 'react-bootstrap';

const Card = ({ pokemon, loading, infoPokemon }) => {
    return (
        <>
            {
                
                loading ? <h1 className='d-flex justify-content-center '>Loading...</h1> :
                    <Row xs={1} sm={2} md={4} lg={4} className="g-4 justify-content-center" style={{gap : "1rem"}} >
                        {pokemon.map((item) => {
                            return (
                                <Col className=' cardCss card border mt-5 '>
                                    <Link title={item.name} className='text-decoration-none' to={`/pokemon-detail/${item.id} `}>

                                        <div className="cardName justify-content-center" key={item.id} onClick={() => infoPokemon(item)}>
                                            <h2 className='d-flex justify-content-center text-dark'>{item.id}</h2>
                                            <div className='d-flex justify-content-center'>
                                            <img className='img-rounded d-flex justify-content-center' src={`${item.sprites.front_default}`} alt="" />
                                            </div>
                                            <h2 className='d-flex justify-content-center text-dark'>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h2>
                                        </div>
                                    </Link>
                                </Col>
                            )
                        })}
                    </Row>


            }

        </>
    )
}

export default Card