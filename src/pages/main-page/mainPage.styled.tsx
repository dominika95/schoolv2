import { styled } from "styled-components";
import { BLUE_COLOR, WHITE_COLOR } from '../../common/styleConst';

export const SchoolName = styled.div`
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bold;
`

export const SchoolGoToPage = styled.button`
    background-color: ${BLUE_COLOR};
    border-radius: 10px;
    padding: 3px 10px;

    a {
        text-decoration: none; 
        color: ${WHITE_COLOR};
    }
`

export const SchoolPhoto = styled.img`
    width: 100%;
    margin: 10px 0;
    border-radius: 10px;
`

export const Empty = styled.div`
    height: 70px;
` 