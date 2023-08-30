import { Menu } from '../../components/menu';
import { Footer } from '../../components/footer';
import { TopBar } from '../../components/topBar';
import { RowTitle } from '../../components/rowTitle';
import { Container, Row, Col } from 'react-bootstrap';
import schoolPhoto from '../../assets/prochnowo.jpg';
import schoolRegister from '../../assets/vulcan.png';
import schoolFb from '../../assets/facebook.webp';
import { SchoolPhoto, SchoolRegister, SchoolMap, SchoolButton } from '../../common/school.styled';
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'


export function ProchnowoPage() {
    return (
        <>
          <TopBar/>
          <Menu />
          <Container>
            <RowTitle title='Niepubliczna Szkoła Podstawowa i Branżowa Szkoła I Stopnia w Próchnowie'/>
            <Container>
              <Row  className='justify-content-center align-items-center'>
                <Col xs="6" md="4"><SchoolPhoto as='img' src={ schoolPhoto }/></Col>
                <Col xs="6" md="4"> 
                  <Row>
                    <Col><a href=""><SchoolRegister as='img' src={ schoolRegister }/></a></Col>
                    <Col><a href="https://www.facebook.com/p/Niepubliczna-Szko%C5%82a-Podstawowa-i-Bran%C5%BCowa-Szko%C5%82a-I-Stopnia-w-Pr%C3%B3chnowie-100086278047587/"><SchoolRegister as='img' src={ schoolFb }/></a></Col>
                  </Row>
                </Col>
              </Row>
            </Container>

            <RowTitle title='Aktualności'/>
            <Container>
              <Row className='justify-content-center'>
                <div>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FNiepubliczna-Szko%25C5%2582a-Podstawowa-i-Bran%25C5%25BCowa-Szko%25C5%2582a-I-Stopnia-w-Pr%25C3%25B3chnowie-100086278047587%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
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
                    <Col xs="8" md="4">Próchnowo 26</Col>
                  </Row>
                  <Row className='justify-content-center'>
                    <Col xs="4" md="1"><BsFillTelephoneFill/></Col>
                    <Col xs="8" md="4">67 283 58 55</Col>
                  </Row>
                  <Row className='justify-content-center'>
                    <Col xs="4" md="1"><MdEmail/></Col>
                    <Col xs="8" md="4">prochnowo@lubasz.edu.pl</Col>
                  </Row>
                </Col>
              </Row>
              <Row  className='justify-content-center'>
                  <SchoolMap as="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.565228548974!2d17.135842375479434!3d52.93825190518121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47038fde50fa4b17%3A0x4b1f7b5c35833452!2zUEHFgUFD!5e0!3m2!1sen!2spl!4v1693421828531!5m2!1sen!2spl"></SchoolMap>
              </Row>
            </Container>
          </Container>
          <Footer />
        </>
    )
}