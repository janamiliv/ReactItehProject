import Navbar from './Navbar.js';
import AddSunglasses from './AddSunglasses';
import Sunglasses_view from './Sunglasses_View';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';


const Home = () => {

  let baseSunglasses = [
    {
      id: 1,
      name: "Hally & Son 745 S02",
      color: "Braon",
      dimensions: "50-22 140",
      matherial: "Plastika",
      shape: "Ovalni",
      price: "100",
      type: "Pun okvir",
      img: 'http://oculusoptika.rs/wp-content/uploads/2021/01/Hally-and-Son-HS-745-S02.jpg',
      desc: `Ženske naočare za sunce brenda Hally & Son sa većim dimenzijama i ovalnim shapeom`,
    },
    {
      id: 2,
      name: "Versace VE4395",
      color: "Braon/color kornjače",
      dimensions: "60.3",
      matherial: "Acetat",
      shape: "Četvrtast",
      price: "500",
      type: "Četvrtast shape, najbolji za ovalna i okrugla lica",
      img: 'https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwbeb2bf03/original/90_O4395-O53458759_ONUL_20_GrecaSunglasses-Eyewear-versace-online-store_0_5.jpg',
      desc: `Ženske naočare nošene od strane Kaia-e Gerber na jesen-zima reviji 2020. godine. Lanac koji se skida i ukrasne strane naočara, čine da ove naočare budu mnogo više od običnog aksesoara.`,
    },
    {
      id: 3,
      name: "Dolce & Gabbana Khaled Khaled",
      color: "Zlatna",
      dimensions: "62-10-145",
      matherial: "Metal",
      shape: "Ljubičasta stakla sa leptirima",
      price: "350",
      type: "Zlatni metalni okvir sa prilagodljivim papučicama",
      img: 'https://us.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dw6ac3ff8e/images/zoom/VG2248VM21A_9V000_0.jpg',
      desc: `Ženske naočare za sunce brenda Dolce & Gabbana sa ljubičastim staklima i zlatnim okvirom`,
    },
    {
      id: 4,
      name: "Ray Ban RB 3548N 001/8O",
      color: "Zlatna/Roze",
      dimensions: "51-21 145",
      matherial: "Metal",
      shape: "Četvrtast",
      price: "180",
      type: "Pun okvir",
      img: 'https://oculusoptika.rs/wp-content/webp-express/webp-images/uploads/2020/12/Ray-Ban-RB-3548n-0018O.jpg.webp',
      desc: `Ženske naočare za sunce brenda Ray Ban sa punim okvirom, koje odgovaraju za ovalni, okrugli i srcoliki shape lica`,
    },
    {
      id: 5,
      name: "Moschino 828S02",
      color: "Braon/Zelena",
      dimensions: "50-20 140",
      matherial: "Plastika",
      shape: "Mačkasti",
      price: "150",
      type: "Pun okvir",
      img: 'https://oculusoptika.rs/wp-content/uploads/MO828S02-02.jpg',
      desc: `Predivne “mačkaste” naočare brenda Moschino u mirnom animal printu. Odgovaraju ovalnom i okruglom typeu lica.`,
    },
    {
      id: 6,
      name: "Vivienne Westwood 996 S02",
      color: "Crna/Siva",
      dimensions: "45-22 145",
      matherial: "Plastika",
      shape: "Mačkasti",
      price: "140",
      type: "Pun okvir",
      img: 'https://oculusoptika.rs/wp-content/webp-express/webp-images/uploads/2019/05/Westwood-996-02.jpg.webp',
      desc: `Ženske naočare za sunce brenda Vivienne Westwood sa punim okvirom, koje odgovaraju za ovalni, okrugli i srcoliki shape lica`,
    }
  ];

  const [allSunglasses, setAllSunglasses] = useState(baseSunglasses);
  const [searchedSunglasses, setSearchedSunglasses] = useState([]);
  const [hasSearch, setHasSearch] = useState(false);

  // Add Sunglasses
  function addSunglasses(sunglasses) {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newSunglasses = { id, ...sunglasses };
    baseSunglasses.push(newSunglasses);
    setAllSunglasses([...allSunglasses, newSunglasses]);
  }

  // Delete Sunglasses
  function deleteSunglasses(id) {
    setAllSunglasses(allSunglasses.filter((sunglasses) => sunglasses.id !== id));
  }

  // Search Sunglasses
  function searchSunglasses(name) {
    setSearchedSunglasses(allSunglasses.filter((sunglasses) => sunglasses.name.toLowerCase().includes(name.toLowerCase())));
    if (name === '') {
      setHasSearch(false);
    } else {
      setHasSearch(true);
    }
  }

  return (
    <>
      <Navbar hasSearch={true} onSearch={searchSunglasses} />

      <Container>
        <Sunglasses_view sunglasses_view={allSunglasses} searchedSunglasses={searchedSunglasses} onDelete={deleteSunglasses} hasSearch={hasSearch} />
        <Row className="mt-5 mb-5">
          <Col className="text-center">
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Button variant="light">Dodaj nove naočare <FaPlus style={{ position: "relative", top: "-1px" }} /></Button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <AddSunglasses onAdd={addSunglasses} />
              </Accordion.Collapse>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
