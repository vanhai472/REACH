import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from '../../../../public/css/NavHeader/header.css';
import { NavLink } from "react-router-dom";



class NavHeader extends React.Component {

  render() {
    return (
      <div className="M-header">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        {/* <div className="tell-phone">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-3 tell d-flex align-items-center">
                <i class="fa fa-phone white-icon-phone"></i>
                <a href="" className="white-icon-phone">Tell Đà Nẵng: +84 24 7302 1338</a>
              </div>
              <div className="col-md-3 col-sm-3 tell  d-flex align-items-center">
                <i class="fa fa-phone white-icon-phone"></i>
                <a href="" className="white-icon-phone">Tell Hà Nội: +84 24 7302 1339</a>
              </div>
              <div className="col-md-3 col-sm-3 tell  d-flex align-items-center">
                <i class="fa fa-phone white-icon-phone"></i>
                <a href="" className="white-icon-phone">Tell Huế: +84 543 537837</a>
              </div>
              <div className="social-pagination col-md-3">
                <ul className="ul-pagination d-flex align-items-center">
                  <li className="li-pagination"><a href="#" class="fa fa-facebook white-icon-phone"></a></li>
                  <li className="li-pagination"><a href="#" class="fa fa-google white-icon-phone"></a></li>
                  <li className="li-pagination"><a href="#" class="fa fa-twitter white-icon-phone"></a></li>
                  <li className="li-pagination"><a href="#" class="fa fa-instagram white-icon-phone"></a></li>
                  <li className="li-pagination"><a href="#" class="fa fa-envelope-o white-icon-phone"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* navbar */}

        <nav id="nav" class="navbar navbar-expand-md sticky-top">
          <div className="container">

            <NavLink className="NavLink" to="/" className="navbar-branch">
              <img className="img-logo" src={require("../../../../public/images/image-logo/REACH-logo.png")} alt="REACH" />
            </NavLink>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item menu-item">
                  {/* giới thiệu */}
                  <NavLink className="NavLink" to="/gioi-thieu" activeStyle={{ background: "#e69032", color: "#fffbf2", borderRadius: "5px" }}
                    className="nav-link navlinka" activeClassName="active" >giới thiệu reach
                    
                  </NavLink >

                  {/* tuyển sinh */}

                </li>
                <li class="nav-item menu-item">
                  <NavLink className="NavLink" to="/tuyen-sinh" activeStyle={{ background: "#e69032", color: "#fffbf2", borderRadius: "5px" }}
                    className="nav-link navlinka" activeClassName="active" >Tuyển sinh <span className="fa fa-caret-down caret-down"></span>
                    <div className="hidden">
                      <ul className="ul-item-list">
                        {/* hidden ul item lớp học */}
                        <li className="li-list-item li-hover-show-ul-hidden">
                          <a className="text-hover-show-ul-hidden" href="#">Lớp học</a>
                          <span className="fa fa-caret-right caret-right"></span>
                          <div className="hidden-hover-duble class">
                            <ul className="ul-hover-duble">
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Lập trình WEB</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Thiết kế đồ hoạ 3D</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Thiết kế đồ hoạ 2D</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Làm tóc vẽ móng</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Nghiệp vụ pha chế</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Thiết kế VIDEO</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Bán hàng Marketing</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Chế biến món ăn</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Nghiệp vụ khách sạn 5 sao</a></li>
                            </ul>
                          </div>
                        </li>
                        {/* hidden ul item đăng ký học */}
                        <li className="li-list-item li-hover-show-ul-hidden">
                          <a className="text-hover-show-ul-hidden" href="#">đăng ký học</a>
                          <span className="fa fa-caret-right caret-right"></span>
                          <div className="hidden-hover-duble singup">
                            <ul className="ul-hover-duble">
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Nộp hồ sơ trực tiếp</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Nộp hồ sơ Online</a></li>
                            </ul>
                          </div>
                        </li>
                        {/* hidden ul item Media */}
                        <li className="li-list-item li-hover-show-ul-hidden">
                          <a className="text-hover-show-ul-hidden" href="#">Media</a>
                          <span className="fa fa-caret-right caret-right"></span>
                          <div className="hidden-hover-duble media">
                            <ul className="ul-hover-duble">
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Video</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Tài liệu REACH</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Bài phát biểu</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Phản hồi của học viên</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className="li-list-item"><a href="#" className="a-li-list-item">Chia sẻ kiến thức</a></li>
                      </ul>
                    </div>
                  </NavLink >
                </li>
                <li class="nav-item menu-item">
                  <NavLink className="NavLink" to="/hoat-dong-dao-tao" activeStyle={{ background: "#e69032", color: "#fffbf2", borderRadius: "5px" }}
                    className="nav-link navlinka" activeClassName="active"> hoạt động đào tạo <span className="fa fa-caret-down caret-down"></span>
                    <div className="hidden">
                      <ul className="ul-item-list">
                        <li className="li-list-item"><a href="#" className="a-li-list-item">Mô hình</a></li>
                        <li className="li-list-item"><a href="#" className="a-li-list-item">Chiến lược của REACH</a></li>
                        <li className="li-list-item"><a href="#" className="a-li-list-item">Thành tựu</a></li>
                        <li className="li-list-item"><a href="#" className="a-li-list-item">Chương trình đào tạo</a></li>
                        {/* hidden ul item học viên REACH*/}
                        <li className="li-list-item li-hover-show-ul-hidden">
                          <a className="text-hover-show-ul-hidden" href="#">Học viên REACH</a>
                          <span className="fa fa-caret-right caret-right"></span>
                          <div className="hidden-hover-duble student">
                            <ul className="ul-hover-duble">
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Đối tượng học viên</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Câu chuyện học viên</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Câu hỏi thường gặp</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Phản hồi của học viên</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </NavLink>
                </li>
                {/* tin tức sự kiện */}
                <li class="nav-item menu-item">
                  <NavLink className="NavLink" to="/tin-tuc-su-kien" activeStyle={{ background: "#e69032", color: "#fffbf2", borderRadius: "5px" }}
                    className="nav-link navlinka" activeClassName="active">
                    Tin tức-sự kiện <span className="fa fa-caret-down caret-down"></span>
                    <div className="hidden">
                      <ul className="ul-item-list">
                        <li className="li-list-item"><a href="#" className="a-li-list-item">Ngoại khóa</a></li>
                        <li className="li-list-item"><a href="#" className="a-li-list-item">CLB Võ thuật</a></li>
                        <li className="li-list-item"><a href="#" className="a-li-list-item">CLB Cựu học viên</a></li>
                        <li className="li-list-item"><a href="#" className="a-li-list-item">CLB Phị đội gà bay</a></li>
                      </ul>
                    </div>
                  </NavLink >
                </li>
                <li class="nav-item menu-item">
                  <NavLink className="NavLink" to="/cung-tham-gia" activeStyle={{ background: "#e69032", color: "#fffbf2", borderRadius: "5px" }}
                    className="nav-link navlinka" activeClassName="active">
                    cùng tham gia <span className="fa fa-caret-down caret-down"></span>
                    <div className="hidden ">
                      <ul className="ul-item-list">
                        <li className="li-list-item"><a href="#" className="a-li-list-item">Hỗ trợ REACH bằng cách nào</a></li>
                        <li className="li-list-item"><a href="#" className="a-li-list-item">Các nhà tài trợ</a></li>
                        {/* hidden ul item tình nguyện viện tại REACH*/}
                        <li className="li-list-item li-hover-show-ul-hidden">
                          <a className="text-hover-show-ul-hidden" href="#">Tình nguyên viên tại REACH</a>
                          <span className="fa fa-caret-right caret-right"></span>
                          <div className="hidden-hover-duble st4">
                            <ul className="ul-hover-duble">
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Đối tượng học viên</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Câu chuyện học viên</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Câu hỏi thường gặp</a></li>
                              <li className="li-hover-duble"><a href="#" className="a-hover-duble">Phản hồi của học viên</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className="li-list-item"><a href="#" className="a-li-list-item">Bản tin 365 REACH</a></li>
                        <li className="li-list-item"><a href="#" className="a-li-list-item">Cơ hội việc làm</a></li>
                      </ul>
                    </div>
                  </NavLink >
                </li>
              </ul>
            </div>
          </div>
        </nav>



        {/* style social fixed bottom */}

        <div className="social-fixed-bottom d-flex">
          {/* click chat */}
          <label for="click-chatOnline" className="label-cursor">
            <div className="chat">
              <label for="click-chatOnline" className="label-cursor"><i className="fa fa-commenting-o icon-chat"></i></label>

              <p className="one-parent"><span className="one">1</span></p>
              <input type="checkbox" name="click-chatOnline" id="click-chatOnline" className="click-checked" />

              <div className="chatOnline">
                <label for="click-chatOnline" className="click-closed-chat-online">X</label>
                <p className="title-chat">Để lại tin nhắn cho chúng tôi</p>
                <form className="form-chat-online" action="" method="POST">
                  <i className="fa fa-comments-o icon-form-chat-online" aria-hidden="true"></i>
                  <hr></hr>
                   
                      <input className="input-chat" type="name" placeholder="Xin mời nhập Họ và Tên" />
                      <input className="input-chat" type="gmail" placeholder="Email liên hệ " />
                      <input className="input-chat" type="numberPhone" placeholder="số điện thoại" />
                  
                  <textarea className="enter-conten" placeholder="nhập tin nhắn.."></textarea>
                  <button type="submit" className="btn sen_mesenger_ofline">Gưởi tin nhắn</button>
                </form>
              </div>

            </div>
          </label>
          {/* click number-phone */}
          <div className="seo-phone">
            <p className="calling">Tư vấn Oline +84 24 7302 1339</p>
          </div>
          {/* click đăng ký online */}
          <NavLink to="DangKy" className="singup-online NavLink">
            <div className="singUp-fixed">
              <span class="fa fa-pencil-square-o write" aria-hidden="true"></span>
              Đăng ký trực tuyến
          </div>
          </NavLink>
        </div>

      </div>
    );
  }
}
export default NavHeader;