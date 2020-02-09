import React, { Component } from 'react';
import './leftModule.scss';
import $ from 'jquery';
import "animate.css";

class LeftModule extends Component {
    componentDidMount() {
        let num = 0, 
            topArr = [];

        $(".left-module").find(".news-block").each(function(){
            topArr.push($(this).offset().top - $(window).height() + 75)
        });
        
        $(window).scroll(res => {
            if($(window).scrollTop() > 20){
                $(".left-module").find(".module-title").addClass('fadeInLeft');
            }
            if(num < topArr.length && $(window).scrollTop() > topArr[num]){
                $(".left-module").find(".news-block").eq(num).addClass('fadeInLeft');
                num += 1;
            }
        })
    }

    render() {
        let imgUrl = '../../../assets/images/one.jpg';
        const showImage = {
            backgroundImage: 'url(' + imgUrl + ')'
        }

        return (
            <div className="left-module">
                <div className="module-title animated">
                    <svg className="icon" aria-hidden="true" style={{width: 35,height: 30}}>
                        <use xlinkHref="#icon-xinwen3"></use>
                    </svg>
                    <span className="title-text" style={{color:'#000000'}}>Treading News</span>
                </div>
                <div className="news-module">
                    <div className="news-block animated">
                        <a href="javascript:;" className="toLink">
                            <div className="row-article">
                                <div className="img-comp">
                                    <div className="img-show" style={showImage}></div>
                                </div>
                                <div className="art-comp" span={20}>
                                    <span className="art-title">Samsung confirms Galaxy S11 event for February 11th-The Verge</span>
                                    <span className="art-content">by Chris Welch</span>
                                </div>
                            </div>
                            <p className="art-time">2020-01-13</p>
                            <div className="big-imgShow">
                                <img src={require('../../../assets/images/one.jpg')} alt=""/>
                            </div>
                        </a>
                    </div>

                    <div className="news-block animated">
                        <a href="javascript:;" className="toLink">
                            <div className="row-article">
                                <div className="img-comp">
                                    <div className="img-show" style={showImage}></div>
                                </div>
                                <div className="art-comp" span={20}>
                                    <span className="art-title">Samsung confirms Galaxy S11 event for February 11th-The Verge</span>
                                    <span className="art-content">by Chris Welch</span>
                                </div>
                            </div>
                            <p className="art-time">2020-01-13</p>
                        </a>
                    </div>

                    <div className="news-block animated">
                        <a href="javascript:;" className="toLink">
                            <div className="row-article">
                                <div className="img-comp">
                                    <div className="img-show" style={showImage}></div>
                                </div>
                                <div className="art-comp" span={20}>
                                    <span className="art-title">Samsung confirms Galaxy S11 event for February 11th-The Verge</span>
                                    <span className="art-content">by Chris Welch</span>
                                </div>
                            </div>
                            <p className="art-time">2020-01-13</p>
                            <div className="big-imgShow">
                                <img src={require('../../../assets/images/one.jpg')} alt=""/>
                            </div>
                        </a>
                    </div>

                    <div className="news-block animated">
                        <a href="javascript:;" className="toLink">
                            <div className="row-article">
                                <div className="img-comp">
                                    <div className="img-show" style={showImage}></div>
                                </div>
                                <div className="art-comp" span={20}>
                                    <span className="art-title">Samsung confirms Galaxy S11 event for February 11th-The Verge</span>
                                    <span className="art-content">by Chris Welch</span>
                                </div>
                            </div>
                            <p className="art-time">2020-01-13</p>
                        </a>
                    </div>

                    <div className="news-block animated adver">
                        <a href="javascript:;" className="toLink">
                            <img src={require('../../../assets/images/one.jpg')} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftModule