import Hero from "../Hero";
import "./Home.css";
import NavbarComponent from "../NavbarComponent";
import heroImg from '../../assets/fon2.jpg';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { useState } from "react";

function Home(args) {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>

      <NavbarComponent />
      <Hero
        className="hero"
        heroImg={heroImg}
        title=""
        text=""
        buttonText=""
        url="/"
        btnClass=""
      />

      <div className="container">

        <h1>В каких странах мы имеемся?</h1>

        <div className="d-flex justify-content-between flex-wrap gap-3">
          <Card
            style={{
              width: '18rem',
            }}
            onClick={toggle}
          >
            <Modal isOpen={modal} toggle={toggle} {...args}>
              <ModalHeader toggle={toggle}>Sabina</ModalHeader>
              <ModalBody>
                <img alt="123" src="https://upload.wikimedia.org/wikipedia/commons/6/63/Devonaboy_Jome_Mosque_in_Andijan.jpg" />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Do Something
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
            <img
              alt="Sample"
              src="https://upload.wikimedia.org/wikipedia/commons/6/63/Devonaboy_Jome_Mosque_in_Andijan.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >

              </CardSubtitle>
              <CardText>
                Андижанская область 24/7
              </CardText>
            </CardBody>

          </Card>

          <Card
            style={{
              width: '18rem'

            }}
          >
            <img
              alt="Sample"
              src="https://storage.otpusk.uz/source/1/1kEv2WdCqB5bPLjZE8l4zwR1QLWCTOf9.webp"
            />
            <CardBody>
              <CardTitle tag="h5">
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >

              </CardSubtitle>
              <CardText>
                Бухарская область 24/7
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="https://milliycha.uz/wp-content/uploads/2021/08/jizzax.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >

              </CardSubtitle>
              <CardText>
                Джиззакская область 24/7
              </CardText>
            </CardBody>
          </Card>

          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="https://qashqadaryo.uz/images/news/ad48c9bd68aa9fed7d5c306babb5d1a0.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >

              </CardSubtitle>
              <CardText>
                Кашкадарьинская область 24/7
              </CardText>
            </CardBody>
          </Card>

          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="https://static.norma.uz/images/135834_2962545b930189cbd63538b5564d.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >

              </CardSubtitle>
              <CardText>
                Навоийская область 24/7
              </CardText>
            </CardBody>
          </Card>

          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="https://i.ytimg.com/vi/-8N0HLMheec/maxresdefault.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >

              </CardSubtitle>
              <CardText>
                Наманганская область 24/7
              </CardText>
            </CardBody>
          </Card>

          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="https://storage.otpusk.uz/source/1/1kEv2WdCqB5bPLjZE8l4zwR1QLWCTOf9.webp"
            />
            <CardBody>
              <CardTitle tag="h5">
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >

              </CardSubtitle>
              <CardText>
                Самаркандская область 24/7
              </CardText>
            </CardBody>
          </Card>

          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="https://xs.uz/upload/post/2019/6/10/c1eb5cf721ae1758aa35ce85ead96d050610.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >

              </CardSubtitle>
              <CardText>
                Сырдарьинская область 24/7
              </CardText>
            </CardBody>
          </Card>

          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="https://uzbekistaninfo.ru/wp-content/uploads/2022/03/1582558627_termez-1-e1647545070737.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >

              </CardSubtitle>
              <CardText>
                Сурхандарьинская область 24/7
              </CardText>
            </CardBody>
          </Card>

          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="https://storage.kun.uz/source/5/POcwOWv0bvnBkphiJ7nIh2mj_LupH3OU.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >

              </CardSubtitle>
              <CardText>
                Ташкентская область 24/7
              </CardText>
            </CardBody>
          </Card>

          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="https://podrobno.uz/upload/iblock/873/17.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >

              </CardSubtitle>
              <CardText>
                Ферганская область 24/7
              </CardText>
            </CardBody>
          </Card>

          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="https://podrobno.uz/upload/iblock/8d6/hiva.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >

              </CardSubtitle>
              <CardText>
                Хорезмская область 24/7
              </CardText>
            </CardBody>
          </Card>

        </div>

      </div>
    </>
  )
}


export default Home;