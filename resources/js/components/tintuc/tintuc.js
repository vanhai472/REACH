import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from '../../../../public/css/tintuc/style.css';


class Tintuc extends React.Component {
    render() {
        return (
            <div>
                <div className="wrap-tituc">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 arrow">
                            <h2 id="bigtitle-tintuc"><span className="sta">✦</span> Tin Tức Hoạt Động</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 ">
                            <a href="#" id="big-news">
                                <img src={require("../../../../public/images/img-tintuc/img/kybienban.jpg")} id="bigpic"></img>
                                <div className="contentbig">
                                    <p>Mang Chứng chỉ quốc tế về cho học viên
                                    REACH chuyên ngành nhà hàng khách sạn</p>
                                </div>
                            </a>
                            <div className="datetime">
                                <p>10/08/2019</p>
                            </div>
                        </div>
                        <div className="col-md-6 small-news">
                            <div className="sm-news">
                                <a href="#" id="sm-link">
                                <img src={require("../../../../public/images/img-tintuc/img/ngoaikhoa1.png")} id="smpic"></img>
                                    <p id="textsmpic">Những giờ ngoại khóa bổ ích tại các trung tâm REACH</p>
                                    </a>
                                <div className="datetime">
                                    <p>31/10/2019</p>
                                </div>
                            </div>
                            <div className="sm-news">
                                <a href="#" id="sm-link">
                                <img src={require("../../../../public/images/img-tintuc/img/ngoaikhoa2.jpg")} id="smpic"></img>
                                    <p id="textsmpic">REACH rộn ràng tuyển sinh khóa học mới</p>
                                    </a>
                                <div className="datetime">
                                    <p>29/10/2019</p>
                                </div>
                            </div>
                            <div className="sm-news">
                                <a href="#" id="sm-link">
                                <img src={require("../../../../public/images/img-tintuc/img/ngoaikhoa3.jpg")} id="smpic"></img>
                                    <p id="textsmpic">Gặp gỡ giáo viên Phạm Thanh Nhàn tại REACH Hội An</p>
                                    </a>
                                <div className="datetime">
                                    <p>14/10/2019</p>
                                </div>
                            </div>
                            <div className="button-sm">
                                <a href="#" id="button-sm">xem tất cả</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Tintuc;