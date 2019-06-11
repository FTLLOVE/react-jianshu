import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link} from 'react-router-dom'

class List extends PureComponent {
   render() {
      const { articleList, getMoreList } = this.props
      return (
         <div>
            {
               articleList.map((item) => {
                  return (
                     <Link key={item.get('id')} to={'/detail/' + item.get('id')}>
                        <ListItem >
                           <img alt='' className='pic' src={item.get('imgUrl')} />
                           <ListInfo>
                              <h3 className='title'>{item.get('title')}</h3>
                              <p className='desc'>{item.get('desc')}</p>
                           </ListInfo>
                        </ListItem>
                     </Link>
                  )
               })
            }
            <LoadMore onClick={() => getMoreList()}>加载更多</LoadMore>
         </div>

      )
   }
}
const mapStateToProps = (state) => {
   return {
      articleList: state.get('home').get('articleList')
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      getMoreList() {
         dispatch(actionCreators.getMoreList())
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)