import React, { Component } from 'react';
import $ from 'jquery';
import './header.scss';
import { Icon } from 'antd';
import {Player, ControlBar} from 'video-react';
import Swiper from 'swiper/js/swiper.min.js';
import 'swiper/css/swiper.min.css';

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isPlay: true
    }

    this.videoPlayer = React.createRef();
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    $("#videoPlayer").find(".video-react-big-play-button").remove();

    let mySwiper = new Swiper('.header-swiper-container', {
      autoplay: false,
      loop: true,
      delay: 100,
      speed: 700,
		  centeredSlides: false,       //为true设置模块居中
		  spaceBetween : 20,          //slide之间的距离
      slidesOffsetBefore: 50,     //设定slides与wrapper左边框的偏移量
      slidesOffsetAfter: 50,      //设定slides与wrapper右边框的偏移量
		  slidesPerView : 'auto',
    	// navigation: {
    	// 	nextEl: '.swiper-button-next',
    	// 	prevEl: '.swiper-button-prev',
    	// },
    });
    mySwiper.el.onmouseover = function(){
      mySwiper.autoplay.start();
    }
    mySwiper.el.onmouseout = function(){
      mySwiper.autoplay.stop();
    }
  }

  play(){
    $("#videoPlayer").find(".video-react-control-bar").remove();
  }

  pause(){
    const videoPlayer = this.player.getState();
    if(videoPlayer.player.ended){
      this.player.load();
    }
  }

  goPlay(){
    this.player.play();
    this.setState({
      isPlay: true
    })
  }

  goPause(){
    this.player.pause();
    this.setState({
      isPlay: false
    })
  }

  render() {
    const isPlay = this.state.isPlay;

    return (
      <header className="header">
        <div className="banner-module" id="videoPlayer">
          <div className="img-module">
            <img src={require('../../../assets/images/photo.jpg')}/>
          </div>
          <div className="banner-content">
            {/*背景视频*/}
            <Player
              className="video-module"
              style={{height:'100%'}}
              ref={player => { this.player = player }}
              autoPlay
              muted={false}
              fluid={false}
              height={'100%'}
              onPlay={(e) => this.play(e)}
              onPause={(e) => this.pause(e)}
            >
              <source src={require('../../../assets/images/headvideo.mp4')} />
              <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />
              <ControlBar autoHide={true}></ControlBar>
            </Player>
            {/*头部内容*/}
            <div className="header-content">
              <div className="banCont">
                <div className="banTitle">
                  <p className="bigTitle">Amercian Muslim Today</p>
                  <p className="smallTitle">The best Muslim community</p>
                </div>
                {isPlay ?
                <Icon type="pause-circle" style={{fontSize:'56px',color:'#AEAEAE'}} onClick={(e) => this.goPause(e)}/>
                : <Icon type="play-circle" style={{fontSize:'56px', color:'#AEAEAE'}} onClick={(e) => this.goPlay(e)}/>}
              </div>
            </div>

            <div className="swiper-module">
              <div className="swiper-container header-swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="javascript:;">
                      <img src={require('../../../assets/images/one.jpg')}/>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="javascript:;">
                      <img src={require('../../../assets/images/one.jpg')}/>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="javascript:;">
                      <img src={require('../../../assets/images/one.jpg')}/>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="javascript:;">
                      <img src={require('../../../assets/images/one.jpg')}/>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="javascript:;">
                      <img src={require('../../../assets/images/one.jpg')}/>
                    </a>
                  </div>
                </div>
                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
