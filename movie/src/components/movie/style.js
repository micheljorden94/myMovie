import styled from 'styled-components';

export const MovieItemContainer = styled.div`
  display: inline-flex;
`;
export const MovieItemWrapper = styled.div`
  padding: 4px;
  border-radius: 2px;
  margin: 6px;
  width: 170px;
  height: 300px;
  cursor: pointer;
  text-align: center;
  border: 1px solid #ddd;
  box-shadow: 0 0 8px #ddd;
  trsndition: all 0.5s ease;
  &:hover{
    opacity: 0.9;
    transform: scale(1.03) rotate(1deg);
  }
`;

export const MovieItemImage = styled.img.attrs(props => ({
  src: props.imgUrl
}))`
  width: 100px;
  height: 140px;
`;

export const MovieItemTitle = styled.h4`
  margin-top: 10px;
`;
export const MovieItemYear = styled.h4`
  margin: 0;
  padding: 0;
`;
export const MovieItemGenres = styled.h4`
  margin: 0;
  padding: 0;
`;

export const MovieDetailWrapper = styled.div`
  text-align: center;
`;

export const MovieDetailTitle = styled.p`
  font-size: 30px;
`;

export const MovieDetailImage = styled.img.attrs((props) => ({
  src: props.imgUrl
}))`
  padding: 10px;
  margin: 0px auto;
  display: block;
`;

export const MovieDetailArticle = styled.p`
  margin-top: 20px;
`;