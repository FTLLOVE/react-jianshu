import Axios from "axios";
import * as constants from './constants'

export const getHomeInfo = () => {
   return (dispatch) => {
      Axios.get('/api/home.json').then((res) => {
         const result = res.data.data;
         dispatch(changeHomeData(result))
      })
   }
}


export const getMoreList = () => {
   return (dispatch) => {
      Axios.get('/api/homeList.json').then((res) => {
         const result = res.data.data
         dispatch(addHomeList(result))
      })
   }
}

const addHomeList = (res) => ({
   type: constants.ADD_ARTICLE_LIST,
   list: res
})

const changeHomeData = (res) => ({
   type: constants.CHANGE_HOME_DATA,
   topicList: res.topicList,
   recommendList: res.recommendList,
   articleList: res.articleList
})

