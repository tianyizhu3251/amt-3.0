import React, { Component } from 'react';
import './rightModule.scss';
import $ from 'jquery';
import "animate.css";

class RightModule extends Component {
    componentDidMount() {
        this.scrollFadeIn();
    }

    scrollFadeIn() {
        let num = 0, 
            topArr = [];

        $(".right-module").find(".module-box").each(function(){
            topArr.push($(this).offset().top - $(window).height() + 25);
        });
        
        $(window).scroll(res => {
            if($(window).scrollTop() > 20){
                $(".right-module").find(".module-box").eq(0).addClass('fadeInRight');
            }
            if(num < topArr.length && $(window).scrollTop() > topArr[num]){
                $(".right-module").find(".module-box").eq(num).addClass('fadeInRight');
                num += 1;
            }
        })
    }

    render() {
        return (
            <div className="right-module">
                <div className="module-box animated">
                    <div className="module-title">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-facebook"></use>
                        </svg>
                        <span className="title-text" style={{color:'#15549B'}}>Facebook</span>
                    </div>
                    <div className="news-block">
                        <a href="javascript:;" className="toLink">
                            <img src={require('../../../assets/images/one.jpg')} alt=""/>
                        </a>
                    </div>
                </div>
                
                <div className="module-box animated">
                    <div className="module-title" style={{marginTop: 20}}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-twitter"></use>
                        </svg>
                        <span className="title-text" style={{color:'#078BC9'}}>Twitter</span>
                    </div>
                    <div className="news-block">
                        <a href="javascript:;" className="toLink">
                            <img src={require('../../../assets/images/one.jpg')} alt=""/>
                        </a>
                    </div>
                </div>
                
                <div className="module-box animated">
                    <div className="module-title" style={{marginTop: 20}}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-githair-instagram"></use>
                        </svg>
                        <span className="title-text" style={{color:'#CE4A95'}}>instagram</span>
                    </div>
                    <div className="news-block">
                        <a href="javascript:;" className="toLink">
                            <img src={require('../../../assets/images/one.jpg')} alt=""/>
                        </a>
                    </div>
                </div>
                
                <div className="module-box animated">
                    <div className="module-title" style={{marginTop: 20}}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-Yahoo"></use>
                        </svg>
                        <span className="title-text" style={{color:'#6001D2'}}>Yahoo</span>
                    </div>
                    <div className="news-block">
                        <a href="javascript:;" className="toLink">
                            <img src={require('../../../assets/images/one.jpg')} alt=""/>
                        </a>
                    </div>
                </div>
                
                <div className="module-box animated">
                    <div className="module-title" style={{marginTop: 20}}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon---"></use>
                        </svg>
                        <span className="title-text" style={{color:'#000000'}}>Sports</span>
                    </div>
                    <div className="news-block">
                        <a href="javascript:;" className="toLink">
                            <img src={require('../../../assets/images/one.jpg')} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightModule