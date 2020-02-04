import ReactDom from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-owl-carousel2/lib/styles.css';
import { } from '../../../../public/css/enrollment/enrollment.css';
// import React from 'react';
const options = {
    item: 4,
    nav: false,
    autoplay: true,
    loop: true,
    autoplayTimeout: 4000,
    responsive: {
        1000: {
            items: 4,
            loop: true,
            nav: false,
        }
    }
};
const events = {
    onDragged: function (event) {

    },
    onChanged: function (event) { }
}

class Enrollment extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="title-tuyen-sinh"><span className="sta">✦</span>Ngành Học</h2>

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <div className="slider-enrollment">

                        <OwlCarousel id="temo" ref="iphone" options={options} events={events}>
                            <div id="0" className="item-img">
                                <img src={require("../../../../public/images/image-entrollment/code.jpg")} alt="" />
                                <p className="title-class">lớp lập trình web</p>
                                <div className="button-enrollment">
                                    <a className="Text-Button-enroller" href="#">Đăng Kí Học</a>
                                </div>
                            </div>
                            <div id="1" className="item-img">
                                <img src={require("../../../../public/images/image-entrollment/3D.jpg")} alt="" />
                                <p className="title-class">thiết kế đồ họa 3D</p>
                                <div className="button-enrollment">
                                    <a className="Text-Button-enroller" href="#">Đăng Kí Học</a>
                                </div>
                            </div>
                            <div id="2" className="item-img">
                                <img src={require("../../../../public/images/image-entrollment/2D.jpg")} alt="" />
                                <p className="title-class">thiết kế đồ họa 2D</p>
                                <div className="button-enrollment">
                                    <a className="Text-Button-enroller" href="#">Đăng Kí Học</a>
                                </div>
                            </div>
                            <div id="3" className="item-img">
                                <img src={require("../../../../public/images/image-entrollment/bartender.jpg")} alt="" />
                                <p className="title-class">nghiệp vụ nhà hàng pha chế</p>
                                <div className="button-enrollment">
                                    <a className="Text-Button-enroller" href="#">Đăng Kí Học</a>
                                </div>
                            </div>
                            <div id="4" className="item-img">
                                <img src={require("../../../../public/images/image-entrollment/cook.jpg")} alt="" />
                                <p className="title-class">chế biến món ăn</p>
                                <div className="button-enrollment">
                                    <a className="Text-Button-enroller" href="#">Đăng Kí Học</a>
                                </div>
                            </div>
                            <div id="5" className="item-img">
                                <img src={require("../../../../public/images/image-entrollment/marketing.jpg")} alt="" />
                                <p className="title-class">bán hàng và marketing</p>
                                <div className="button-enrollment">
                                    <a className="Text-Button-enroller" href="#">Đăng Kí Học</a>
                                </div>
                            </div>
                            <div id="6" className="item-img">
                                <img src={require("../../../../public/images/image-entrollment/toc.jpg")} alt="" />
                                <p className="title-class">làm tóc vẽ móng</p>
                                <div className="button-enrollment">
                                    <a className="Text-Button-enroller" href="#">Đăng Kí Học</a>
                                </div>
                            </div>
                            <div id="7" className="item-img">
                                <img src={require("../../../../public/images/image-entrollment/YCI.jpg")} alt="" />
                                <p className="title-class">nghiệp vụ khách sạn 5 sao</p>
                                <div className="button-enrollment">
                                    <a className="Text-Button-enroller" href="#">Đăng Kí Học</a>
                                </div>
                            </div>
                            <div id="8" className="item-img">
                                <img src={require("../../../../public/images/image-entrollment/video.jpg")} alt="" />
                                <p className="title-class">chỉnh sữa video</p>
                                <div className="button-enrollment">
                                    <a className="Text-Button-enroller" href="#">Đăng Kí Học</a>
                                </div>
                            </div>



                        </OwlCarousel>
                    </div>

                    {/* <span id="prev" onClick={() => this.refs.iphone.prev()}><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></span>
                    <span id="next" onClick={() => this.refs.iphone.next()}><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></span>
                    <div id="all_pagination" className="d-flex justify-content-center">
                        <span onClick={() => this.refs.iphone.goTo(0)}><i className="fa fa-circle-thin" aria-hidden="true"></i></span>
                        <span onClick={() => this.refs.iphone.goTo(1)}><i className="fa fa-circle-thin" aria-hidden="true"></i></span>
                        <span onClick={() => this.refs.iphone.goTo(2)}><i className="fa fa-circle-thin" aria-hidden="true"></i></span>
                        <span onClick={() => this.refs.iphone.goTo(3)}><i className="fa fa-circle-thin" aria-hidden="true"></i></span>
                        <span onClick={() => this.refs.iphone.goTo(4)}><i className="fa fa-circle-thin" aria-hidden="true"></i></span>
                    </div> */}


                </div>
            </div>
        )
    }
}
export default Enrollment;

