import { styled } from "styled-components";
import { ORANGE_COLOR, WHITE_COLOR } from '../../common/styleConst';

export const RowTitleComponent = styled.div`
    background-color: ${ ORANGE_COLOR };
    text-align: left;
    color: ${ WHITE_COLOR };
    border-radius: 10px;
    padding: 4px 10px;
    text-transform: uppercase;
    font-size: 15px;
    margin: 10px 0;
`