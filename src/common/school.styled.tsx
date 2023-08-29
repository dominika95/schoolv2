import { styled } from "styled-components";
import { BLUE_COLOR, WHITE_COLOR } from './styleConst';

export const SchoolPhoto = styled.div`
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
`;

export const SchoolRegister = styled.div`
    width: 50%;
    cursor: pointer;
`

export const SchoolMap = styled.div`
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    margin-bottom: 60px;
`

export const SchoolButton = styled.button`
    background-color: ${BLUE_COLOR};
    color: ${WHITE_COLOR};
    border-radius: 10px;
    padding: 3px 10px;
`