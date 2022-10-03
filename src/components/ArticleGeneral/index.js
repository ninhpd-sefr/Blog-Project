import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import { usePostsPaging } from '../../hooks/usePostsPaging'
import { useSelector } from "react-redux";
import { Skeleton } from "antd";

function ArticleGeneral() {
  const {
    posts,
    renderButtonLoadMore
  } = usePostsPaging()

  const isFetched = useSelector(state => state.Post.isFetched)
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem Thêm">Bài viết tổng hợp</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {
            isFetched ?   posts.map(item => {
              return (
                <div className="tcl-col-12 tcl-col-md-6" key={item.id}>
                  <ArticleItem isStyleCard isShowAvatar={false} post={item} />
                </div>
              )
            }) : <Skeleton active/>
          }
        </div>

        { renderButtonLoadMore() }
      </div>
    </div>
  )
}

export default ArticleGeneral