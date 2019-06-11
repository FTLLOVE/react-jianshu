import React, { PureComponent } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { actionCreator } from './store'

class Detail extends PureComponent {
   render() {
      console.log(this.props)
      const { title, content } = this.props
      return (
         <DetailWrapper>
            <Header>{title}</Header>
            <Content
               dangerouslySetInnerHTML={{ __html: content }}
            />
         </DetailWrapper>
      )
   }

   componentDidMount() {
      const id = this.props.match.params.id
      this.props.getDetail(id)
   }
}

const mapStateToProps = (state) => {
   return {
      title: state.get('detail').get('title'),
      content: state.get('detail').get('content')
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      getDetail(id) {
         dispatch(actionCreator.getDetail(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
