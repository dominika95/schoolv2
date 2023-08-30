import { Menu } from '../../components/menu';
import { Footer } from '../../components/footer';
import { TopBar } from '../../components/topBar';
import { RowTitle } from '../../components/rowTitle';
import { Container, Row, Col } from 'react-bootstrap';
import schoolPhoto from '../../assets/szamocin.jpg';
import schoolRegister from '../../assets/vulcan.png';
import schoolFb from '../../assets/facebook.webp';
import { SchoolPhoto, SchoolRegister, SchoolMap, SchoolButton } from '../../common/school.styled';
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'


export function SzamocinPage() {
    return (
        <>
          <TopBar/>
          <Menu />
          <Container>
            <RowTitle title='Niepubliczna Szkoła Podstawowa i Branżowa Szkoła I stopnia w Szamocinie'/>
            <Container>
              <Row  className='justify-content-center align-items-center'>
                <Col xs="6" md="4"><SchoolPhoto as='img' src={ schoolPhoto }/></Col>
                <Col xs="6" md="4"> 
                  <Row>
                    <Col><a href=""><SchoolRegister as='img' src={ schoolRegister }/></a></Col>
                    <Col><a href="https://www.facebook.com/profile.php?id=100063644736977"><SchoolRegister as='img' src={ schoolFb }/></a></Col>
                  </Row>
                </Col>
              </Row>
            </Container>

            <RowTitle title='Aktualności'/>
            <Container>
              <Row className='justify-content-center'>
                <div>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063644736977&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
              </Row>
            </Container>

            <RowTitle title='Dokumenty'/>
            <Container>
              <Row  className='align-items-center'>
                <Col>Statut szkoły</Col>
                <Col> 
                  <SchoolButton>Pobierz</SchoolButton>
                </Col>
              </Row>
            </Container>

            <RowTitle title='Kontakt'/>
            <Container>
              <Row>
                <Col>
                  <Row className='justify-content-center'>
                    <Col xs="4" md="1"><MdLocationOn/></Col>
                    <Col xs="8" md="4">Szamocin, ul. Szkolna 11</Col>
                  </Row>
                  <Row className='justify-content-center'>
                    <Col xs="4" md="1"><BsFillTelephoneFill/></Col>
                    <Col xs="8" md="4">67 284 90 93</Col>
                  </Row>
                  <Row className='justify-content-center'>
                    <Col xs="4" md="1"><MdEmail/></Col>
                    <Col xs="8" md="4">szamocin@lubasz.edu.pl</Col>
                  </Row>
                </Col>
              </Row>
              <Row  className='justify-content-center'>
                  <SchoolMap as="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.23499241787!2d17.12017397671245!3d53.03411387220046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470392659679c531%3A0x18d18bc9904ac3c9!2sNiepubliczna%20Szko%C5%82a%20Podstawowa%20W%20Szamocinie!5e0!3m2!1sen!2spl!4v1693421758184!5m2!1sen!2spl"></SchoolMap>
              </Row>
            </Container>
          </Container>
          <Footer />
        </>
    )
}