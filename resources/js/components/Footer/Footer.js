import React from 'react';
import {} from '../../../../public/css/Footer/style.css';

const Footer = () => {
  return (
    <div className="z-foorter">
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </div>
        <div className="sub-foot">
            <div className="container">
                <div className="footer">
                    <div className="row nav-bar-main">
                        <div className="col-md-9">
                            <div className="nav-menu">
                                <p><a href="#" className="nav-item">CLB CỰU HỌC VIÊN</a></p>
                                <p><a href="#" className="nav-item">CƠ HỘI VIỆC LÀM</a></p>
                                <p><a href="#" className="nav-item">LIÊN HỆ</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 nav-menu-main">
                            <ul className="nav-menu-1">
                                <li><a href="#" className="nav-item1"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="nav-item1"><i class="fa fa-google"></i></a></li>
                                <li><a href="#" className="nav-item1"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#" className="nav-item1"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#" className="nav-item1"><i class="fa fa-pinterest"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div className="footer-1">
                <div className="container">
                    <div className="row nav-bar-main-1">
                        <div className="col-md-9 nav-col-main">
                            <div className="col-md-4 nav-col-menu">
                                <div className="box">
                                    <div className="nav-menu-2">
                                        <h2 className="nav-item2-1">TRỤ SỞ REACH</h2>
                                        <p className="nav-item2-2">Add: Tầng 2, nhà A, Khu VL1, Trung tâm
                                            Thương mại Dịch vụ Trung Văn 1, Quận<br></br>
                                            Nam Từ Liêm, Hà Nội<br></br>
                                            Tell:+84 24 7302 1338<br></br>
                                            Email: <a href="#" className="nav-item2-3">contact@reach.org.vn</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 nav-col-menu">
                                <div className="box">
                                    <div className="nav-menu-2">
                                        <h2 className="nav-item2-1">VĂN PHÒNG REACH MIỀN BẮC</h2>
                                        <p className="nav-item2-2">Add: Tầng 2, nhà B,khu VL1, TT Thương<br></br>
                                            mại Dịch Vụ Trung Văn 1, Nam Từ Liêm,<br></br>
                                            Hà Nội<br></br>
                                            FB: <a href="#" className="nav-item2-3">TT REACH HÀ NỘI</a><br></br>
                                            Tell:+84 24 7302 1339<br></br>
                                            Email: <a href="#" className="nav-item2-3">contact@reach.org.vn</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 nav-col-menu">
                                <div className="box">
                                    <div className="nav-menu-2">
                                        <h2 className="nav-item2-1">VĂN PHÒNG REACH HUẾ</h2>
                                        <p className="nav-item2-2">Add: Đường Đoàn Nguyễn Tuấn, Quận<br></br>
                                            Phú Hậu, tp Huế<br></br>
                                            FB: TT REACH HUẾ<br></br>
                                            Tell:+84 543 537837<br></br>
                                            Email: <a href="#" className="nav-item2-3">contact@reach.org.vn</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 nav-col-main1">
                            <img src={require("../../../../public/images/image-footer/vietnammap1.png")}></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            
                            <p>Copyright ©2018 by <span className="text1">R</span>
                                 <span className="text2">E</span>
                                 <span className="text3">A</span>
                                 <span className="text4">C</span>
                                 <span className="text5">H</span> - Site by REACH ALUMNI CLUB
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
)
};
export default Footer