
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const AddSunglasses = ({ onAdd }) => {

  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [dimensions, setDimension] = useState('')
  const [matherial, setMatherial] = useState('')
  const [shape, setShape] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDescription] = useState('')
  const [img, setIMG] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();


    console.log("A");

    if (!name) {
      alert("Molim Vas unesite ime!");

      return;
    }

    if (!color) {
      alert("Molim Vas unesite boju!");

      return;
    }

    if (!dimensions) {
      alert("Molim Vas unesite dimenzije!");

      return;
    }

    if (!matherial) {
      alert("Molim Vas unesite materijal!");

      return;
    }

    if (!shape) {
      alert("Molim Vas unesite oblik!");

      return;
    }

    if (!type) {
      alert("Molim Vas unesite tip!");

      return;
    }

    if (!price) {
      alert("Molim Vas unesite cenu!");

      return;
    }

    if (!desc) {
      alert("Molim Vas unesite opis!");

      return;
    }

    if (!img) {
      alert("Molim Vas dodajte sliku!");

      return;
    }


    console.log("A");

    onAdd({ name, color, dimensions, matherial, shape, price, type, img, desc });
    setName('');
    setColor('');
    setDimension('');
    setMatherial('');
    setShape('');
    setType('');
    setPrice('');
    setDescription('');
    setIMG('');
  }

  return (
    <Form className="text-left" onSubmit={onSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Ime</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Unesite ime naočara" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Boja</Form.Label>
        <Form.Control type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Unesite boju naočara" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Dimenzija</Form.Label>
        <Form.Control type="number" value={dimensions} onChange={(e) => setDimension(e.target.value)} placeholder="Unesite dimenziju naočara" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Materijal</Form.Label>
        <Form.Control type="text" value={matherial} onChange={(e) => setMatherial(e.target.value)} placeholder="Unesite materijal naočara" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Oblik</Form.Label>
        <Form.Control type="text" p value={shape} onChange={(e) => setShape(e.target.value)} placeholder="Unesite oblik naočara" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Tip</Form.Label>
        <Form.Control type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Unesite tip naočara" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Cena</Form.Label>
        <Form.Control type="number" p value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Unesite cenu naočara" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Opis</Form.Label>
        <Form.Control as="textarea" value={desc} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="Unesite opis" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Slika</Form.Label>
        <Form.Control type="text" p value={img} onChange={(e) => setIMG(e.target.value)} placeholder="Unesite URL slike" />
      </Form.Group>

      <button className="d-block w-100 btn btn-outline-dark" type="submit">Sačuvaj <FaCheck style={{ position: "relative", top: "-1px" }} /></button>
    </Form>
  )
}

export default AddSunglasses
