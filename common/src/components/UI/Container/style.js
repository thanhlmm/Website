import styled, { css } from 'styled-components';

const ContainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${props =>
    props.margin &&
    css`
      margin: auto;
    `};
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: none !important;
    `};
  ${props =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      padding-left: 30px;
      padding-right: 30px;
    `};
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 992px) {
    width: 100%;
  }
  @media (min-width: 1220px) {
    max-width: ${props => props.width || '1170px'};
    width: 100%;
  }
  @media (max-width: 767px) {
    ${props =>
      props.mobileGutter &&
      css`
        padding-left: 20px;
        padding-right: 20px;
      `}
  }
`;

export default ContainerWrapper;
