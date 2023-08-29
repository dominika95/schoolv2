import { Menu } from '../../components/menu';
import { Footer } from '../../components/footer';
import { TopBar } from '../../components/topBar';
import { RowTitle } from '../../components/rowTitle';
import { Container, Row, Col } from 'react-bootstrap';
import { SchoolName, SchoolGoToPage, SchoolPhoto } from './mainPage.styled';
import schoolPhoto from '../../assets/szkola_niechanowo.jpg';

export function MainPage() {
    return (
        <>
          <TopBar/>
          <Menu />
          <Container>
            <RowTitle title='Strona główna'/>
            <Container>
              <Row>
                <SchoolName>Niepubliczna Szkoła Podstawowa w Niechanowie</SchoolName>
              </Row>
              <Row className='justify-content-center align-items-center'>
                <Col md="4" xs="6">
                  <div>
                    <SchoolPhoto as="img" src={schoolPhoto}/>
                  </div>
                </Col>
                <Col md="4"  xs="6">
                  <SchoolGoToPage>Zobacz więcej</SchoolGoToPage>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <SchoolName>Niepubliczna Szkoła Podstawowa w Niechanowie</SchoolName>
              </Row>
              <Row className='justify-content-center align-items-center'>
                <Col md="4" xs="6">
                  <div>
                    <SchoolPhoto as="img" src={schoolPhoto}/>
                  </div>
                </Col>
                <Col md="4" xs="6">
                  <SchoolGoToPage>Zobacz więcej</SchoolGoToPage>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <SchoolName>Niepubliczna Szkoła Podstawowa w Niechanowie</SchoolName>
              </Row>
              <Row className='justify-content-center align-items-center'>
                <Col md="4" xs="6">
                  <div>
                    <SchoolPhoto as="img" src={schoolPhoto}/>
                  </div>
                </Col>
                <Col md="4" xs="6">
                  <SchoolGoToPage>Zobacz więcej</SchoolGoToPage>
                </Col>
              </Row>
            </Container>

          </Container>
          <Footer />
        </> 
    )
}