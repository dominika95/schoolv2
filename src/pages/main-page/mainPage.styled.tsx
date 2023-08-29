import { styled } from "styled-components";
import { BLUE_COLOR, WHITE_COLOR } from '../../common/styleConst';

export const SchoolName = styled.div`
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bold;
`

export const SchoolGoToPage = styled.button`
    background-color: ${BLUE_COLOR};
    color: ${WHITE_COLOR};
    border-radius: 10px;
    padding: 3px 10px;
`

export const SchoolPhoto = styled.img`
    width: 100%;
    padding: 10px 0;
    border-radius: 10px;
`