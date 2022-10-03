import './latest-news-list.css'
import ArticleItem from "../ArticleItem";
import MainTitle from '../shared/MainTitle'
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';

import IconLoading from '../shared/IconLoading';

function ArticleLatest() {
  const posts = useSelector(state => state.Post.articleLatest)
  const isFetched = useSelector(state => state.Post.isFetched)
  return (
    <div className="latest-news section">
      <div className="tcl-container">

        <MainTitle>Bài viết mới nhất</MainTitle>

        <div className="latest-news__list spacing">

          {

            isFetched ? posts.map(post => {
              return (
                <div className="latest-news__card" key={post.id}>
                  <ArticleItem post={post} />
                </div>
              )
            }) : <Skeleton active/>
          }

        </div>
      </div>
    </div>

  )
}

export default ArticleLatest