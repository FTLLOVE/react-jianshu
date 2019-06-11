import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
import { actionCreator  as loginActionCreator } from '../../pages/login/store'
import {
   HeaderWrapper,
   Logo,
   Nav,
   NavItem,
   NavSearch,
   Addition,
   Button,
   SearchWrapper,
   SearchInfo,
   SearchInfoTitle,
   SearchInfoSwitch,
   SearchInfoItem,
   SearchInfoList
} from './styles'

class Header extends PureComponent {

   getListArea = () => {
      const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, hanleChangePage } = this.props
      const newList = list.toJS()
      const pageList = []
      if (newList.length) {
         for (let i = (page - 1) * 10; i < page * 10; i++) {
            pageList.push(
               <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
         }
      }

      if (focused || mouseIn) {
         return (
            <SearchInfo
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
            >
               <SearchInfoTitle>
                  热门搜索
                  <SearchInfoSwitch
                     onClick={() => { hanleChangePage(page, totalPage) }}
                  >
                     <i className='spin iconfont iconspin' style={{ fontSize: 12 }}></i>
                     换一批
                  </SearchInfoSwitch>
               </SearchInfoTitle>
               <SearchInfoList>
                  {pageList}
               </SearchInfoList>
            </SearchInfo>
         )
      } else {
         return null
      }
   }
   render() {
      const { focused, list, handleInputFocus, handleInputBlur, handleDownLoad, login, logout } = this.props
      return (
         <HeaderWrapper>
            <Link to="/">
               <Logo />
            </Link>
            <Nav>
               <Link to="/">
                  <NavItem className='left active'>首页</NavItem>
               </Link>
               <NavItem className='left download' onClick={() => { handleDownLoad() }}>下载APP</NavItem>
               {
                  login ?
                     <NavItem className='right' onClick={logout}>退出</NavItem> :
                     <Link to="/login"><NavItem className='right'>登录</NavItem></Link>
               }
               <NavItem className='right'>
                  <i className='iconfont iconAa' style={{ fontSize: 25 }}></i>
               </NavItem>
               <SearchWrapper>
                  <CSSTransition
                     in={this.props.focused}
                     timeout={500}
                     classNames='slide'
                  >
                     <NavSearch
                        className={focused ? 'focused' : ''}
                        onFocus={() => { handleInputFocus(list) }}
                        onBlur={() => { handleInputBlur() }}
                     ></NavSearch>
                  </CSSTransition>
                  <i className={focused ? 'focus-icon iconfont iconxiazai17 zoom' : 'iconfont iconxiazai17 zoom'}></i>
                  {this.getListArea()}
               </SearchWrapper>

               <Addition>
                  <Button className='writting'>
                     <i className='iconfont iconpen' style={{ fontSize: 12, marginRight: 5, }}></i>
                     写文章</Button>
                  <Button className='reg'>注册</Button>
               </Addition>
            </Nav>
         </HeaderWrapper>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      focused: state.get('header').get('focused'),
      list: state.get('header').get('list'),
      mouseIn: state.get('header').get('mouseIn'),
      page: state.get('header').get('page'),
      totalPage: state.get('header').get('totalPage'),
      login: state.get('login').get('login')
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      handleInputFocus(list) {
         if (list.size === 0) {
            dispatch(actionCreators.getList())
         }
         dispatch(actionCreators.searchFocus())
      },
      handleInputBlur() {
         dispatch(actionCreators.searchBlur())
      },
      handleMouseEnter() {
         dispatch(actionCreators.mouseEnter())
      },
      handleMouseLeave() {
         dispatch(actionCreators.mouseLeave())
      },
      hanleChangePage(page, totalPage) {
         console.log(page, totalPage)
         if (page < totalPage) {
            dispatch(actionCreators.changePage(page + 1))
         } else {
            dispatch(actionCreators.changePage(1))
         }
      },
      handleDownLoad() {
         window.location.href = "https://www.jianshu.com/apps?utm_medium=desktop&utm_source=navbar-apps"
      },
      logout() {
         dispatch(loginActionCreator.logout())
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)