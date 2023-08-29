import { Container, Col, Row } from 'react-bootstrap';
import { FooterComponent, FooterGoTop } from './footer.styled';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { FaRegCopyright } from 'react-icons/fa';

export function Footer() {
    function goToTopOfPage() {
        window.scrollTo(0,0);
    };

    return (
        <FooterComponent>
            <Container>
                <Row xs="12">
                    <Col xs="7">COPYRIGHT <FaRegCopyright/> Edukacja Lubasz s.c.</Col>
                    <FooterGoTop onClick={goToTopOfPage} className='col col-xs-5'>Powrót do góry <AiOutlineArrowUp/></FooterGoTop>
                </Row>
            </Container>
        </FooterComponent>
    )
}