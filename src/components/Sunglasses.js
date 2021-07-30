import { FaExclamationCircle, FaTimes } from 'react-icons/fa';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'

const Task = ({ sunglasses, onDelete }) => {

  function description() {
    if (sunglasses.desc.length > 150) {
      return <Accordion>
        {sunglasses.desc.substring(0, 150)}
        <Accordion.Collapse eventKey="0">
          <Card.Body className="p-0">{sunglasses.desc.substring(150)}</Card.Body>
        </Accordion.Collapse>
        <Accordion.Toggle className="pl-0 d-block" as={Button} variant="link" eventKey="0">
          Prikaži više
        </Accordion.Toggle>

      </Accordion>;
    }

    return sunglasses.desc;
  }

  return (
    <Card>
      <Card.Img variant="top" src={sunglasses.img} />
      <Card.Body>
        <Card.Title>{sunglasses.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{sunglasses.color}</Card.Subtitle>
        <p className='m-0'>dimenzije: {sunglasses.dimensions} mm</p>
        <p className='m-0'>materijal: {sunglasses.matherial} </p>
        <p className='m-0'>oblik: {sunglasses.shape}</p>
        <p className='m-0'>tip: {sunglasses.type} </p>
        <p className='m-0 mb-2'>cena: {sunglasses.price} &euro;</p>
        
        <Card.Text className="mb-0">
          {description()}
        </Card.Text>

        <Button variant="secondary" onClick={() => onDelete(sunglasses.id)} >Obriši <FaExclamationCircle style={{position: "relative", top: "-1px"}} /></Button>
      </Card.Body>
    </Card>
  )
}

export default Task
