import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import './home.scss';
import $ from 'jquery';
import HeaderNav from '@/components/home/header/headerNav';
import Header from '@/components/home/header/header';
import LeftModule from '@/components/home/content/leftModule';
import CenterModule from '@/components/home/content/centerModule';
import RightModule from '@/components/home/content/rightModule';
import Footer from '@/components/home/footer/footer';

class Home extends Component {
  componentDidMount() {
    console.log('1111');
    $(window).scroll(res => {
      // console.log($(window).scrollTop());

      var headerHeight = $(".header").height() + parseInt($(".header").css('margin-bottom'));
      if($(window).scrollTop() > headerHeight){
        $(".header-nav").css({
          'position': 'fixed',
          'top': '0',
        });
      } else {
        $(".header-nav").css({
          'position': 'relative',
          'top': 'unset',
        });
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header/>
          <HeaderNav className="header-nav"/>
          <div className="content-module-box">
            <Row>
              <Col span={6} id="content-left" className="content-left">
                <LeftModule/>
              </Col>
              <Col span={12} id="content-center" className="content-center">
                <CenterModule/>
              </Col>
              <Col span={5} id="content-right" className="content-right">
                <RightModule/>
              </Col>
            </Row>
          </div>
          <Footer/>
        </Layout>
      </div>
    )
  }
}

export default Home
