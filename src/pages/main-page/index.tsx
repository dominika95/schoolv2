import { Menu } from '../../components/menu';
import { Footer } from '../../components/footer';
import { TopBar } from '../../components/topBar';
import { RowTitle } from '../../components/rowTitle';
import { Container, Row, Col } from 'react-bootstrap';
import { SchoolName, SchoolGoToPage, SchoolPhoto, Empty } from './mainPage.styled';
import niechanowoPhoto from '../../assets/szkola_niechanowo.jpg';
import szamocinPhoto from '../../assets/szamocin.jpg';
import prochnowoPhoto from '../../assets/prochnowo.jpg';
import { Link } from "react-router-dom";
import { PATH } from '../../components/router';

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
                    <SchoolPhoto as="img" src={niechanowoPhoto}/>
                  </div>
                </Col>
                <Col md="4"  xs="6">
                  <SchoolGoToPage><Link to={PATH.niechanowo}>Zobacz więcej</Link></SchoolGoToPage>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <SchoolName>Niepubliczna Szkoła Podstawowa i Branżowa Szkoła I Stopnia w Próchnowie</SchoolName>
              </Row>
              <Row className='justify-content-center align-items-center'>
                <Col md="4" xs="6">
                  <div>
                    <SchoolPhoto as="img" src={prochnowoPhoto}/>
                  </div>
                </Col>
                <Col md="4"  xs="6">
                  <SchoolGoToPage><Link to={PATH.prochnowo}>Zobacz więcej</Link></SchoolGoToPage>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <SchoolName>Niepubliczna Szkoła Podstawowa i Branżowa Szkoła I stopnia w Szamocinie</SchoolName>
              </Row>
              <Row className='justify-content-center align-items-center'>
                <Col md="4" xs="6">
                  <div>
                    <SchoolPhoto as="img" src={szamocinPhoto}/>
                  </div>
                </Col>
                <Col md="4"  xs="6">
                  <SchoolGoToPage><Link to={PATH.szamocin}>Zobacz więcej</Link></SchoolGoToPage>
                </Col>
              </Row>
            </Container>
            <Empty></Empty>

          </Container>
          <Footer />
        </> 
    )
}