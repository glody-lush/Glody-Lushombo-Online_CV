import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {BiCommentDetail} from 'react-icons/bi';
function References(){
    return(<div>
                
                <h4><BiCommentDetail /> REFERENCES</h4>

                <Row>
                  <Col style={{fontWeight:"bolder"}}>
                  Cape Peninsula
                  University Of
                  Technology
                  </Col>

                  <Col>
                  Mr. Sello Nkwana:
                  021 959 5560
                  nkwanas@cput.ac.za
                  </Col>
                  </Row>
                  <Row>
                  <Col style={{fontWeight:"bolder"}}>
                  Cape Peninsula
                  University Of
                  Technology
                  </Col>

                  <Col>
                  Mr. Adonis MT:
                  +27 72 123 9050
                  adonismt@cput.ac.za  
                  </Col>
                  </Row>
    </div>)
}

export default References;