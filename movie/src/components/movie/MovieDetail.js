import React, { Component, Fragment } from 'react';
import { Button, Icon } from 'antd';
import { Spin } from 'antd';
import fetchJSONP from 'fetch-jsonp';
import { MovieDetailWrapper, MovieDetailTitle, MovieDetailImage, MovieDetailArticle } from './style';

class MovieDetail extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      info: '',
      isLoading: true
    };
  }

  componentDidMount() {
    this.getDetailData();
  }

  getDetailData() {
    const id = this.props.match.params.id;
    const url = `https://api.douban.com/v2/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`;

    fetchJSONP(url).then((response => {
      return response.json();
    })).then((result) => {
      this.setState({
        title: result.title,
        image: result.images.large,
        info: result.summary,
        isLoading: false
      });
    });
  }

  render() {
    return (
      <Fragment>
        {this.renderDetail()}
      </Fragment>
    )
  }

  renderDetail() {
    if(this.state.isLoading){
      return (
        <Spin tip="Loading..." style={{fontSize: '30px',marginLeft: '50%'}}>
        </Spin>
      )
    }else{
      return(
        <div>
          <Button type='primary' onClick={this.goBackMovieList.bind(this)}>
            <Icon type='left' />
            返回电影列表
          </Button>
          <MovieDetailWrapper>
            <MovieDetailTitle>{this.state.title}</MovieDetailTitle>
            <MovieDetailImage imgUrl={this.state.image.replace('img3', 'img1')}></MovieDetailImage>
            <MovieDetailArticle>{this.state.info}</MovieDetailArticle>
          </MovieDetailWrapper>
        </div>
      )
    }
  }

  goBackMovieList() {
    this.props.history.go(-1);
  }
}

export default MovieDetail;