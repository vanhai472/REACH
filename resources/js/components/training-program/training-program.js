import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from '../../../../public/css/training-program/training-program.css';

class Training extends React.Component{
    render(){
        return(
            <div>
                 <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                                <div className="slidebar-Training-program">
                                    {/* Đây là phần 1 */}
                                    <a type="button" className="button-slidebar-Training-program-1" href="#"><p className="text-button-slidebar-Training-program">Mô Hình</p></a>
                                    {/* Đây là phần 2 */}
                                    <a type="button" className="button-slidebar-Training-program-2" href="#"><p className="text-button-slidebar-Training-program">Chương Trình Đào Tạo</p></a>
                                </div>
                                <div className="advertisement-slidebar-Training-program-main-1">
                                    <div className="advertisement-slidebar-Training-program-body-1">
                                        <h3 className="h3-advertisement-slidebar-Training-program-1">
                                            Nộp hồ sơ xét tuyển trực tiếp
                                        </h3>
                                        <p className="p-advertisement-slidebar-Training-program">
                                            Vui lòng đăng ký thông tin <br/>Tư vấn sẽ gọi điện cho bạn<br/>
                                            sau 24h , xin cảm ơn!<br/>
                                        </p>
                                    </div>
                                    <a className="a-advertisement-slidebar-Training-program-1" href="#">
                                        Nộp hồ sơ ► 
                                    </a>
                                </div> 
                                <div className="advertisement-slidebar-Training-program-main-2">
                                    <div className="advertisement-slidebar-Training-program-body-2">
                                        <h3 className="h3-advertisement-slidebar-Training-program-2">
                                            Tìm văn phòng tuyển sinh<br/><br/>
                                        </h3>
                                    </div>
                                    <a className="a-advertisement-slidebar-Training-program-2" href="#">
                                           follow me ► 
                                        </a>
                                </div>
                            </div>
                        <div className="col-md-9">
                            <div className="box-text-Training-program">
                                <div className="title-Training-program">
                                    <h1 className="h1-title-Training-program-1">
                                        <span className="span-title-Training-program">◆</span> Các chương trình đào tạo tại REACH
                                    </h1>
                                </div>
                                <div className="text-box-Training-program-1">
                                    <p className="text-Training-program-1">REACH tổ chức chương trình đào tạo trong các lĩnh vực thanh niên có thể học được kĩ năng nhanh chóng và ở những nơi có nhu cầu việc làm. Khóa học của chúng tôi được hỗ trợ từ 80-100% học phí cho học viên thuộc nhóm đối tượng mục tiêu.<br/><br/>

                                        Chương trình của REACH không chỉ là công tác đào tạo. Chúng tôi quan tâm đến từng em học viên, coi mỗi em là một thành viên của gia đình REACH. Chúng tôi tiếp tục đồng hành cùng các em trong 6 tháng tiếp theo sau khóa học để hỗ trợ các em tìm kiếm và duy trì công việc. Đây chính là điều cho chương trình của chúng tôi thật sự đặc biệt.<br/>
                                        Chương trình đào tạo của REACH bao gồm:
                                    </p><br/>
                                    <p className="text-Training-program-2"><sup className="sup-text-Training-program-1">*</sup> Đào tạo thường xuyên: các lớp 3- 6 tháng</p>
                                    <p className="text-title-Training-program-1">Nghiệp vụ  Bàn Bar</p>
                                    <p className="text-sm-Training-program-1">Chuyên ngành nhà hàng, bao gồm quy trình vệ sinh, phục vụ thức ăn, sắp đặt bàn ăn, nhận gọi món, <br/>chế biến và phục vụ đồ uống<br/><br/>
                                        Đào tạo cho nhân viên phục vụ khách sạn và quán ăn và nhân viên quầy bar</p><br/>
                                        <p className="text-title-Training-program-1">Nghiệp vụ buồng phòng</p>
                                    <p className="text-sm-Training-program-1">Phục vụ phòng, dành cho những công 
                                        việc tại các khách sạn và nhà khách bao gồm: dọn phòng, kỹ năng phục vụ khách hàng, 
                                        quy trình xử lý vệ sinh và an toàn</p><br/>
                                        <p className="text-title-Training-program-1">Bán hàng Marketing</p>
                                    <p className="text-sm-Training-program-1">Các kĩ năng, thái độ và phẩm chất cần thiết trong ngành 
                                        bán hàng và tiếp thị để phục vụ cho các công việc trong ngành du lịch và bán lẻ, đặc biệt dành 
                                        cho lĩnh vực chăm sóc khách hàng; các kiến thức về các loại sản phẩm khác nhau, quản lý kho hàng, 
                                        kiểm kê hàng tồn kho bàn giao tiền mặt và sử dụng máy đổi tiền mặt.</p><br/>
                                        <p className="text-title-Training-program-1">Thiết kế Đồ họa</p>
                                    <p className="text-sm-Training-program-1">Thiết kế Đồ họa, sử dụng các gói phần mềm chuyên dụng, các kĩ năng thiết kế web cơ bản, dành cho các công việc trong các công ty thiết kế đồ họa.</p><br/>
                                        <p className="text-title-Training-program-1">Chăm sóc da và trang điểm</p>
                                    <p className="text-sm-Training-program-1">Giúp các nữ thanh niên tìm kiếm những việc làm trong 
                                        ngành công nghệ làm đẹp đang ngày càng phát triển.</p><br/>
                                        <p className="text-title-Training-program-1">Thiết kế đồ họa 3D</p>
                                    <p className="text-sm-Training-program-1">Tập trung đào tạo dựng đồ họa 3D bằng phần mềm 3D smax</p><br/>
                                        <p className="text-title-Training-program-1">Lập trình web</p>
                                    <p className="text-sm-Training-program-1">Tạo nền tảng giúp các em thành công trong việc tự 
                                        thiết kế và tìm việc lập trình viên nền tảng php</p><br/>
                                        <p className="text-title-Training-program-1">Kỹ thuật Chế biến món ăn</p>
                                    <p className="text-sm-Training-program-1">Hỗ trợ các em yêu thích và 
                                        đam mê theo nghề bếp, nấu ăn</p><br/>
                                        <p className="text-title-Training-program-1">Làm tóc và Vẽ móng</p>
                                    <p className="text-sm-Training-program-1">Giúp các bạn nữa được đào tạo và hướng dẫn về nghề tóc và vẽ móng cơ bản</p><br/>
                                        <p className="text-title-Training-program-1">Chương trình Sáng kiến thanh niên lập nghiệp</p>
                                    <p className="text-sm-Training-program-1">(Nghiệp vụ khách sạn 5 sao YCI)<br/><br/>
                                        REACH kết hợp với khách sạn 5 sao ở Hà Nội và Hồ Chí Minh tạo điều kiện
                                        cho các bạn thanh niên được học thực tế các ngành nghề tại các khách sạn đó.</p><br/>
                                        <p className="text-Training-program-2"><sup className="sup-text-Training-program-1">*</sup> Dự án đặc biệt (Step Up)</p>
                                        <p className="text-sm-Training-program-1">Cung cấp chương trình đào tạo về Kỹ năng sống, tiếng Anh, Vận động thể chất, 
                                        Định hướng di chuyển, Kỹ năng nghề nghiệp cho người bị khiếm thị</p><br/>
                                </div>
                                <div className="icon-Training-program">                        
                                    <ul className="nav">
                                        <li className="nav-item li-text-main-Training-program-1"><a className="nav-link disabled link-text-main-Training-program-1" href="#" ><i class="fa fa-slideshare"></i></a></li>
                                        <li className="nav-item li-text-Training-program-main"><a className="nav-link link-text-Training-program-main"  href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li className="nav-item li-text-Training-program-main"><a className="nav-link link-text-Training-program-main"  href="#"><i class="fa fa-youtube-play"></i></a></li>
                                        <li className="nav-item li-text-Training-program-main"><a className="nav-link link-text-Training-program-main"  href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li className="nav-item li-text-Training-program-main"><a className="nav-link link-text-Training-program-main"  href="#"><i class="fa fa-instagram"></i></a></li>
                                        <li className="nav-item li-text-Training-program-main"><a className="nav-link link-text-Training-program-main"  href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Training