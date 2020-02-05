import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from '../../../../public/css/Main/Main.css';
// import { } from './style.css';
// import { } from './dist/wow';

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 arrow">
                            <h2 id="bigtitle"><span>✦</span>REACH đã hỗ trợ đào tạo hơn + 16.000 học viên. học nghề có việt làm cho các bạn học viên có hoàn cảnh khó khăn </h2>
                        </div>
                    </div>
                    <div className="row main">
                        {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 picture">
                            <a href="#" className="sumary-2-4">
                                <img className="image-item-2-4" src={require("../../../../public/images/image-main/alumni.jpg")}></img>
                                <p className="title-2-4">1.Câu Hỏi Thường Gặp</p>
                            </a>
                        </div> */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6picture">
                        <a href="#" className="sumary-2-4">
                                <img className="image-item-2-4" src={require("../../../../public/images/image-main/CEO_REACH.png")}></img>
                                <p className="title-2-4">2.Câu Chuyện Học Viên</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 picture">
                        <a href="#" className="sumary-2-4">
                                <img className="image-item-2-4" src={require("../../../../public/images/image-main/kiyeu.jpg")}></img>
                                <p className="title-2-4">3.Câu Chuyện Học Viên</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 picture">
                        <a href="#" className="sumary-2-4">
                                <img className="image-item-2-4" src={require("../../../../public/images/image-main/marketing.jpg")}></img>
                                <p className="title-2-4">4.Phản Hồi Của Học Viên</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 picture">
                        <a href="#" className="sumary-2-4">
                                <img  className="image-item-2-4" src={require("../../../../public/images/image-main/Reach.jpg")}></img>
                                <p className="title-2-4">5.Câu chuyện Của Cựu Học Viên</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 picture">
                        <a href="#" className="sumary-2-4">
                                <img  className="image-item-2-4" src={require("../../../../public/images/image-main/time.jpg" )}></img>
                                <p className="title-2-4">6. Kỷ Niệm Chỉa Sẻ</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                        
        )
    }
}
export default Main