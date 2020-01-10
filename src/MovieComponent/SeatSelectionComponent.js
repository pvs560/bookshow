import { Modal,Button } from 'react-bootstrap';
import React from "react";

 export const  SeatSelectionComponent = (props)=>{

        return (<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {`Select Seats for ${props.name} Movie`} 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        <input type="checkbox" name="A1" value="A1"/>A1 
        <input type="checkbox" name="A2" value="A2"/>A2
        <input type="checkbox" name="A3" value="A3"/>A3
        <input type="checkbox" name="A4" value="A4"/>A4
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Book</Button>
      </Modal.Footer>
    </Modal>)
        
}