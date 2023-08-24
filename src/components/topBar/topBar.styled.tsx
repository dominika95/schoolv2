import { styled } from 'styled-components';
import { BLUE_COLOR, WHITE_COLOR } from '../../common/styleConst';

export const TopBarComponent = styled.div`
    background-color: ${BLUE_COLOR};
    width: 100%;
    min-height: 50px;
    display: block;
    left: 0;
    top: 0;
    color: ${ WHITE_COLOR };
    padding: 20px 0;
    font-size: 24px;
`