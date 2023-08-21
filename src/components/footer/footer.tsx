import { Container, Col, Row } from 'react-bootstrap';
import { FooterComponent, FooterGoTop } from './footer.styled';
import { BiCopyright } from 'react-icons/bi';
import { AiOutlineArrowUp } from 'react-icons/ai';

export function Footer() {
    function goToTopOfPage() {
        window.scrollTo(0,0);
    };

    return (
        <FooterComponent>
            <Container>
                <Row xs="12">
                    <Col xs="6">COPYRIGHT <BiCopyright/></Col>
                    <FooterGoTop xs="6" onClick={goToTopOfPage} className='col'>Powrót do góry <AiOutlineArrowUp/></FooterGoTop>
                </Row>
            </Container>
        </FooterComponent>
    )
}