import React, { Component } from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
import './centerModule.scss';
import Swiper from 'swiper/js/swiper.min.js';
import 'swiper/css/swiper.min.css';
import $ from 'jquery';
import "animate.css";

class CenterModule extends Component {

  constructor() {
  super();
  this.state = {
    news: [],
    headline_news:[],
    type: '111',
    repoName:'',
    repoUrl:'',
    page:1,
    more_news:true,
    adv1:[]

  };
}

componentWillMount() {

    }

    componentDidMount() {
      console.log(this.state.news);
      var myFetchOptions = {
          method: 'GET'
        };
        console.log('1111');
        fetch("https://api.americanmuslimtoday.net/amt-news/api/v1/news?page=1&category=94821302-a50b-48dc-9252-964b708d1d40", myFetchOptions)
     .then(res => res.json())
     .then(data => {
         console.log(data.list[0])
         this.setState({
           news: data.list,
           headline_news: data.list[0]
         });
       })
     .catch(error => {
       this.setState({
         isLoaded: true,
         error
       });
     })


      console.log(this.state.news);
    //   this.scrollFadeIn();

        let listSwiper = new Swiper('.bottom-img-block', {
            autoplay: true,
            loop: true,
            delay: 200,
            speed: 1000,
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
        listSwiper.el.onmouseover = function(){
            listSwiper.autoplay.start();
        }
        listSwiper.el.onmouseout = function(){
            listSwiper.autoplay.stop();
        }

    }

    scrollFadeIn() {
        let num = 0,
            topArr = [];

        $(".center-module").find(".news-li-list").each(function(){
            topArr.push($(this).offset().top - $(window).height() + 25);
        });
        console.log(topArr)
        $(window).scroll(res => {
            if($(window).scrollTop() > 5){
                $(".center-module").find(".news-module").addClass('fadeInUp');
            }
            if(num < topArr.length && $(window).scrollTop() > topArr[num]){
                $(".center-module").find(".news-li-list").eq(num).addClass('fadeInUp');
                num += 1;
            }
        })
    }

    render() {


      	const {headline_news} = this.state;
        let imgBack;
        if(document.body.clientWidth > 1366){
            let imgUrl =  headline_news.bannerImage ;
    //        let imgUrl = '/static/media/onePhoto.bb45fbbf.jpg';
            const showImage = {
                backgroundImage: 'url(' + imgUrl + ')'
            }
            imgBack = <div className="img-back" style={showImage}></div>;
        } else {
            imgBack = '';
        }
	const {news} = this.state;
  const styeH3 = {
  width: "170px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
};
  const newsList = news.length
			? news.map((newsItem, index) => (
        <li key={index} className="news-li-list animated">
            <a href="javascript:;" className="a-link">
                <img className="img-show" src={newsItem.bannerImage}/>
                <div className="text-box">
                    <p className="author">{newsItem.updatedDate}</p>
                    <span className="title">{newsItem.headline}</span>
                    <p className="content">{newsItem.link}</p>
                </div>
            </a>
        </li>

			))
			: 'We are loading news...';

      const news_swiper = news.length
    			? news.map((newsItem, index) => (
            <div key={index} className="swiper-slide">
                <a href="javascript:;">
                      <img src={newsItem.bannerImage}/>
                      <span className="text" style={styeH3}>{newsItem.headline}</span>

                </a>
            </div>


    			))
    			: 'We are loading news...';

            console.log(this.state.news);
            if (news.length>0){   this.scrollFadeIn(); }



        return (
            <div className="center-module">

                <div className="news-module animated">
                    <div className="top-img-block">
                        <a className="top-img-link" href="javascript:;">
                            {imgBack}
                            <div className="text-block">
                                <a href="javascript:;" className="text-title"> {this.state.headline_news.headline} </a>
                                <p className="text">{this.state.headline_news.headline} </p>
                                <a href="javascript:;" className="a-link">'No rules, no protocol' »</a>
                                <div className="pinglun">
                                    <span className="img"></span>
                                    <span>8,170 people reacting</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="bottom-img-block swiper-container">
                        <div className="swiper-wrapper">
                            {news_swiper}
                            <div className="swiper-slide">
                                <a href="javascript:;">
                                    <img src={require('../../../assets/images/one.jpg')}/>
                                    <span className="text">Tennis player defends asking ball girl to peel banana</span>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="javascript:;">
                                    <img src={require('../../../assets/images/one.jpg')}/>
                                    <span className="text">Tennis player defends asking ball girl to peel banana</span>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="javascript:;">
                                    <img src={require('../../../assets/images/one.jpg')}/>
                                    <span className="text">Tennis player defends asking ball girl to peel banana</span>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="javascript:;">
                                    <img src={require('../../../assets/images/one.jpg')}/>
                                    <span className="text">Tennis player defends asking ball girl to peel banana</span>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="javascript:;">
                                    <img src={require('../../../assets/images/one.jpg')}/>
                                    <span className="text">Tennis player defends asking ball girl to peel banana</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="news-list">

                    {newsList}
                    <li className="news-li-list animated">
                        <a href="javascript:;" className="a-link">
                            <img className="img-show" src={require('../../../assets/images/onePhoto.jpg')}/>
                            <div className="text-box">
                                <p className="author">Celebrity TheBlast</p>
                                <span className="title">Khloé Kardashian Shares Insane Booty Shots of Kourtney During Gym Workout</span>
                                <p className="content">Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                            </div>
                        </a>
                    </li>

                    <li className="news-li-list animated">
                        <a href="javascript:;" className="a-link">
                            <img className="img-show" src={require('../../../assets/images/onePhoto.jpg')}/>
                            <div className="text-box">
                                <p className="author">Celebrity TheBlast</p>
                                <span className="title">Khloé Kardashian Shares Insane Booty Shots of Kourtney During Gym Workout</span>
                                <p className="content">Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                            </div>
                        </a>
                    </li>

                    <li className="news-li-list animated">
                        <a href="javascript:;" className="a-link">
                            <img className="img-show" src={require('../../../assets/images/onePhoto.jpg')}/>
                            <div className="text-box">
                                <p className="author">Celebrity TheBlast</p>
                                <span className="title">Khloé Kardashian Shares Insane Booty Shots of Kourtney During Gym Workout</span>
                                <p className="content">Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                            </div>
                        </a>
                    </li>

                    <li className="news-li-list animated">
                        <a href="javascript:;" className="a-link">
                            <img className="img-show" src={require('../../../assets/images/onePhoto.jpg')}/>
                            <div className="text-box">
                                <p className="author">Celebrity TheBlast</p>
                                <span className="title">Khloé Kardashian Shares Insane Booty Shots of Kourtney During Gym Workout</span>
                                <p className="content">Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                            </div>
                        </a>
                    </li>

                    <li className="news-li-list animated">
                        <a href="javascript:;" className="a-link">
                            <img className="img-show" src={require('../../../assets/images/onePhoto.jpg')}/>
                            <div className="text-box">
                                <p className="author">Celebrity TheBlast</p>
                                <span className="title">Khloé Kardashian Shares Insane Booty Shots of Kourtney During Gym Workout</span>
                                <p className="content">Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                            </div>
                        </a>
                    </li>

                    <li className="news-li-list animated">
                        <a href="javascript:;" className="a-link">
                            <img className="img-show" src={require('../../../assets/images/onePhoto.jpg')}/>
                            <div className="text-box">
                                <p className="author">Celebrity TheBlast</p>
                                <span className="title">Khloé Kardashian Shares Insane Booty Shots of Kourtney During Gym Workout</span>
                                <p className="content">Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                            </div>
                        </a>
                    </li>

                    <li className="news-li-list animated">
                        <a href="javascript:;" className="a-link">
                            <img className="img-show" src={require('../../../assets/images/onePhoto.jpg')}/>
                            <div className="text-box">
                                <p className="author">Celebrity TheBlast</p>
                                <span className="title">Khloé Kardashian Shares Insane Booty Shots of Kourtney During Gym Workout</span>
                                <p className="content">Nick Cannon issued a thoughtful response after the "That's So Raven" actor claimed they had a sexual relationship.</p>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        )
    }
}

export default CenterModule
