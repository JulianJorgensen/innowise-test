import styled from 'styled-components';

export const SliderContainer = styled.section`
  margin: 0 auto;
`;

export const SliderItemContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 295px;
  margin-top: 185px;
  margin-bottom: 34px;

  @media (min-width: 481px) and (max-width: 1920px) {
    height: 595px;
  }

  @media (min-width: 1921px) {
    height: 885px;
  }
`;

export const SliderCentralItem = styled.div`
  height: 295px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 480px) {
    width: 220px;
    background-image: url(${props => props.img.small});
  }

  @media (min-width: 481px) and (max-width: 1920px) {
    width: 440px;
    height: 590px;
    background-image: url(${props => props.img.medium})
  }

  @media (min-width: 1921px) {
    width: 660px;
    height: 885px;
    background-image: url(${props => props.img.large})
  }
`;

export const SliderSideItem = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-position-y: center;

  @media (max-width: 480px) {
    width: 78px;
    background-image: url(${props => props.sideImg.small});
  }

  @media (min-width: 481px) and (max-width: 1920px) {
    width: 156px;
    background-image: url(${props => props.sideImg.medium})
  }

  @media (min-width: 1921px) {
    width: 234px;
    background-image: url(${props => props.sideImg.large})
  }
`;

export const SliderSideImage = styled.img`

`;

export const Image = styled.img`
  position: absolute;
  top: -90px;
`;
