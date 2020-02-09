import React, { Component } from 'react';
import './headerNav.scss';
import $ from 'jquery';
import { Input, Button } from 'antd';
const { Search } = Input;

class HeaderNav extends Component {
    componentDidMount() {
        $(window).scroll(res => {
            if($(window).scrollTop() > 10){
                $(".header-nav").css({
                    'box-shadow': '0 0 10px 0 rgba(0,0,0,.4)',
                    '-webkit-box-shadow': '0 0 10px 0 rgba(0,0,0,.4)',
                    '-moz-box-shadow': '0 0 10px 0 rgba(0,0,0,.4))',
                    '-o-box-shadow': '0 0 10px 0 rgba(0,0,0,.4)'
                })
            } else {
                $(".header-nav").css({
                    'box-shadow': 'none',
                    '-webkit-box-shadow': 'none',
                    '-moz-box-shadow': 'none',
                    '-o-box-shadow': 'none'
                })
            }
        })
    }

    render() {
        return (
            <div className="header-nav">
                <div className="nav-important">
                    <div className="logo">
                        <img src={require('../../../assets/images/logo.png')}/>
                    </div>
                    <Search
                        placeholder="Please enter your search"
                        enterButton="Search"
                        size="large"
                        onSearch={value => console.log(value)}
                    />
                    <div className="login-module">
                        <Button type="link" className="register" shape="round" ghost size={'large'}>Register</Button>
                        <Button type="primary" className="login" shape="round" size={'large'}>Login</Button>
                    </div>
                </div>
                <div className="nav-text">
                    <ul>
                        <li><a href="javascript:;">Mail</a></li>
                        <li><a href="javascript:;">News</a></li>
                        <li><a href="javascript:;">Finance</a></li>
                        <li><a href="javascript:;">Sports</a></li>
                        <li><a href="javascript:;">Politics</a></li>
                        <li><a href="javascript:;">Lifestyle</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HeaderNav
