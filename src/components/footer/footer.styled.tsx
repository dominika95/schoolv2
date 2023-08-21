import { styled } from 'styled-components';
import { BLUE_COLOR, LIGHT_BLUE_COLOR } from '../../common/styleConst';

export const FooterComponent = styled.div`
    background-color: ${BLUE_COLOR};
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    color: ${ LIGHT_BLUE_COLOR };
    padding: 20px 0;
    font-size: 12px;
`

export const FooterGoTop = styled.div`
    cursor: pointer;
`