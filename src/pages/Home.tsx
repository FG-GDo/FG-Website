import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Home.css'
type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Container >
        <Row>
          <Col><h1 className='description'>REAL-TIME LAST MILE DELIVERY MONITORING & MANAGEMENT</h1></Col>
        </Row>
        <Row>
          <Col>
            <p className='description-p'>Imagine the ability to see every delivery provider, every scheduled route,
              stop preformance, and actionable analytics in a single dashboard</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <button className='expert-button'>REACH AN EXPERT</button>
          </Col>
        </Row>
        <Row>
          <Col xs={4}><div className="shippers-pic-link"><a href='Solutions/Shippers'>SHIPPERS</a></div></Col>
          <Col xs={4}><div className="delivery-agents-pic-link"><a href='Solutions/DeliveryAgents'>DELIVERY AGENTS</a></div></Col>
          <Col xs={4}><div className="third-party-providers-pic-link"><a href='Solutions/ThirdPartyProviders'>THIRD PARTY PROVIDERS</a></div></Col>
        </Row>
        {/* <h1 className='description'>REAL-TIME LAST MILE DELIVERY MONITORING & MANAGEMENT</h1> */}
        {/* <p className='description-p'>Imagine the ability to see every delivery provider, every scheduled route,
          stop preformance, and actionable analytics in a single dashboard</p> */}
        {/* <button className='expert-button'>REACH AN EXPERT</button> */}
        {/* <div className="shippers-pic-link"><a href='Solutions/Shippers'>SHIPPERS</a></div>
        <div className="delivery-agents-pic-link"><a href='Solutions/DeliveryAgents'>DELIVERY AGENTS</a></div>
        <div className="third-party-providers-pic-link"><a href='Solutions/ThirdPartyProviders'>THIRD PARTY PROVIDERS</a></div> */}
      </Container>
    </div>
  )
}

export default Home