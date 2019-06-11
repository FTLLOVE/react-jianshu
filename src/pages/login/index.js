import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { Redirect } from 'react-router-dom'
import { actionCreator } from './store'

class Login extends PureComponent {
   render() {
      const { loginStatus, login } = this.props
      if (!loginStatus) {
         return (
            <LoginWrapper>
               <LoginBox>
                  <Input placeholder='账号' innerRef={(input) => { this.account = input }} />
                  <Input placeholder='密码' type="password" innerRef={(input) => { this.password = input }} />
                  <Button onClick={() => { login(this.account, this.password) }}>登录</Button>
               </LoginBox>
            </LoginWrapper>
         )
      } else {
         return <Redirect to="/" />
      }


   }
}

const mapStateToProps = (state) => {
   return {
      loginStatus: state.get('login').get('login')
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      login(account, password) {
         dispatch(actionCreator.login(account.value, password.value))
         // console.log(account.value, password.value)
         // dispatch(actionCreator.login(account.value, password.value))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);