import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
   z-index: 1;
   height: 58px;
   border-bottom: 1px solid #f0f0f0;
   position:relative;
`

export const Logo = styled.div`
   top: 0;
   left: 50px;
   display: block;
   width: 100px;
   height: 58px;
   position: absolute;
   background: url(${logoPic});
   background-size: contain
`
export const Nav = styled.div`
   width: 800px;
   height: 58px;
   margin: 0 auto;
   // padding-right: 40px;
   box-sizing: contain;
`

export const NavItem = styled.div`
   font-size: 17px;
   // font-weight: 600;
   line-height: 58px;
   padding: 0 15px;
   color: #333;

   &.left {
      cursor: pointer;
      float: left
   }

   &.right {
      cursor: pointer;
      float: right;
      color: #969696
   }

   &.active {
      color: #ea6f5a;
      cursor: pointer;
   }
   &.download {
      cursor: pointer;
   }
`

export const NavSearch = styled.input.attrs({
   placeholder: '搜索'
})`
   width: 200px;
   height: 38px;
   padding: 0 40px 0 20px;
   margin-top: 9px;
   margin-left: 40px;
   box-sizing: border-box;
   border: none;
   outline: none;
   border-radius: 19px;
   background: #eee;
   font-size: 14px;
   color: #666;

   &.focused {
      width: 300px;
      // background: #969696
   }
   
   &::placeholder {
      color: #999;
      font-weight: 550
   }

   &.slide-enter {
		transition: all 0.5s ease-out;
	}
	&.slide-enter-active {
		width: 300px;
	}
	&.slide-exit {
		transition: all 0.5s ease-out;
	}
	&.slide-exit-active {
		width: 200px;
	}
`

export const Addition = styled.div`
   position: absolute;
   right: 100px;
   top: 0;
   height: 58;
   cursor: pointer;
`

export const Button = styled.div`
   height: 32px;
	float: right;
	margin-top: 12px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 34px;
	border-radius: 17px;
   border: 1px solid #ec6149;
   font-weight: 600;
	font-size: 15px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`

export const SearchWrapper = styled.div`
   position:relative;
   float: left;
   .zoom {
      position: absolute;
      right: 5px;
      bottom: 3px;
      width: 30px;
      line-height: 30px;
      border-radius: 15px;
      text-align: center;
   }

   .focus-icon {
      background: #969696
   }
`

export const SearchInfo = styled.div`
   position: absolute;
   left: 45px;
   top: 58px;
   width: 240px;
   padding: 5px 20px 10px 20px;
   box-shadow: 0 0 8px rgba(0,0,0,0.2);
`

export const SearchInfoTitle = styled.div`
   margin-top: 20px;
   color: #969696;
   line-height: 20px;
   margin-bottom: 15px;
   font-size: 14px
`

export const SearchInfoSwitch = styled.a`
   display:block;
   float: right;
   font-size: 13px
`

export const SearchInfoItem = styled.a`
   display: block;
   color: #969696;
   border-radius: 3px;
   border: 1px solid #ccc;
   font-size: 12px;
   padding: 2px 5px;
   margin-right: 10px;
   margin-bottom: 7px;
   float: left;
   line-height: 15px
`

export const SearchInfoList = styled.div`
   overflow: hidden
`
