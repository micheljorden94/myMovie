import React from 'react';
import { Rate } from 'antd';
import { MovieItemContainer, MovieItemWrapper, MovieItemImage, MovieItemTitle, MovieItemGenres, MovieItemYear } from './style';

class MoveItem extends React.Component{

  goDetailPage () {
    this.props.history.push(`/movie/detail/${this.props.id}`)
  }

  render() {
    return (
        <MovieItemContainer onClick={this.goDetailPage.bind(this)}>
          <MovieItemWrapper>
            <MovieItemImage imgUrl={this.props.images.small.replace(
              'img3.doubanio.com','img1.doubanio.com'
            )}>
            </MovieItemImage>
            <MovieItemTitle>电影名称：{this.props.title}</MovieItemTitle>
            <MovieItemYear>上映年份：{this.props.year}</MovieItemYear>
            <MovieItemGenres>电影类型：{this.props.genres.join('，')}</MovieItemGenres>
            <Rate disabled defaultValue={Math.ceil(this.props.rating.average*0.5)}/>
          </MovieItemWrapper>
        </MovieItemContainer>
    )
  }
}

export default MoveItem;