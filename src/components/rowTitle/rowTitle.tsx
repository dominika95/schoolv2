import { RowTitleComponent } from './rowTitle.styled';
import { Row } from 'react-bootstrap'

interface RowTitleTypes {
    title: string;
}

export function RowTitle({title} : RowTitleTypes) {

    return (
        <Row>
            <RowTitleComponent>
                { title }
            </RowTitleComponent>
        </Row>
    )
}