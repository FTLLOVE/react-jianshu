import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import { actionCreators } from './store'

import {
   HomeWrapper,
   HomeLeft,
   HomeRight
} from './style'

class Home extends PureComponent {
   render() {
      return (
         <HomeWrapper>
            <HomeLeft>
               <img className='banner-img' alt='' src="https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
               <Topic />
               <List />
            </HomeLeft>
            <HomeRight>
               <Recommend />
            </HomeRight>
         </HomeWrapper>
      )
   }

   componentDidMount() {
      this.props.changeHomeData()
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      changeHomeData() {
         dispatch(actionCreators.getHomeInfo())
      }
   }
}
export default connect(null, mapDispatchToProps)(Home)