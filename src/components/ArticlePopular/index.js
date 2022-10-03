import { useSelector } from 'react-redux'
import ArticleItem from '../ArticleItem'
import MainTitle from '../shared/MainTitle'
import './popular-news-list.css'
import { Skeleton } from 'antd';

function ArticlePopular() {
  const posts = useSelector(state => state.Post.articlePopular)
  const isFetched = useSelector(state => state.Post.isFetched )
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        <MainTitle>Bài viết phổ biến</MainTitle>
        
      {
        isFetched ? <div className="popular-news__list spacing">
        <div className="popular-news__list--left">
          <div className="popular-news__list--row">
            {/* Popular news card */}
            <div className="popular-news__list--card">
              <ArticleItem isStyleCard isShowCategoies isShowDesc post={posts[0]} />
            </div>
            {/* End Popular news card */}
            {/* Popular news card */}
            <div className="popular-news__list--card">
              <ArticleItem isStyleCard isShowCategoies isShowDesc post={posts[1]} />
            </div>
            {/* End Popular news card */}
          </div>
        </div>
        <div className="popular-news__list--right">
          <div className="popular-news__list--row">
            {/* Popular news card */}
            <div className="popular-news__list--card">
              <ArticleItem isStyleCard isStyleRow isShowDesc post={posts[2]} />
            </div>
            {/* End Popular news card */}
          </div>
        </div>
      </div> : <Skeleton active />
      }
      </div>
    </div>

  )
}

export default ArticlePopular