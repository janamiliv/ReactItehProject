
import Sunglasses from './Sunglasses';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Sunglasses_view = ({ sunglasses_view, onDelete, searchedSunglasses, hasSearch }) => {

  if (hasSearch) {
    return (
      <>
        <h1 className="mt-5 mb-5">Ženske naočare za sunce<hr /></h1>

        <Row className="sunglasses-row">
          {searchedSunglasses.map((sunglasses) => (
            <Col key={sunglasses.id} md={4}>
              <Sunglasses onDelete={onDelete} key={sunglasses.id} sunglasses={sunglasses} />
            </Col>
          ))}
        </Row>
      </>
    )
  }

  return (
    <>
      <h1 className="mt-5 mb-5">Ženske naočare za sunce<hr /></h1>

      <Row className="sunglasses-row">
        {sunglasses_view.map((sunglasses) => (
          <Col key={Sunglasses.id} md={4}>
            <Sunglasses onDelete={onDelete} key={sunglasses.id} sunglasses={sunglasses} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Sunglasses_view

