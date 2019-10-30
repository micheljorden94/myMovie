import React, {Component} from 'react';
import MovieItem from './MovieItem';
import { Spin, Pagination } from 'antd';
import fetchJSONP from 'fetch-jsonp';
class MovieList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      movies: [], //电影列表
      nowPage: parseInt(props.match.params.page) || 1, //当前展示第几页的数据
      pageSize: 14, //每页展示多少条数据
      total: 0, //当前电影分类下总共有多少条
      isLoading: true,  //正在加载的动画 使用antd插件中的spin
      movieType: props.match.params.type
    };
  }

  componentDidMount() {
    this.loadMovieList();
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    this.setState(() => ({
      isLoading: true,
      movieType: nextProps.match.params.type || 1,
      nowPage: nextProps.match.params.page
    }),() => {
      this.loadMovieList();
    });
  }

  loadMovieList = () => {
    const start = this.state.pageSize * (this.state.nowPage - 1);
    const url = `https://api.douban.com/v2/movie/${this.state.movieType}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}`
    
    fetchJSONP(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        movies: data.subjects,
        isLoading: false,
        total: data.total
      });
    })
  }

  pageChanged(page) {
    this.props.history.push(`/movie/${this.state.movieType}/${page}`);
  }

  renderList() {
    if(this.state.isLoading){
      return (
        <Spin tip="Loading..." style={{fontSize: '30px',marginLeft: '50%'}}>
        </Spin>
      )
    }else{
      return (
        <div>
          <div>
          {
            this.state.movies.map((item) => {
              return <MovieItem {...item} key={item.id} history={this.props.history}/>
            })
          }
          </div>
          <div style={{width: '100%', textAlign: 'center'}}>
            <Pagination
              defaultCurrent={parseInt(this.state.nowPage)}
              pageSize={this.state.pageSize}
              total={parseInt(this.state.total)}
              onChange={this.pageChanged.bind(this)}
            >
            </Pagination>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

export default MovieList;