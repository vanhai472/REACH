import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
 import { } from '../../../../public/css/SignUpOnline/SignUpOnline.css';
 import { } from '../../../../public/css/SignUpOnline/inJoin.css';
 import NavHeader from '../Nav/Nav';
 import Footer from '../Footer/Footer';


// import { } from './inJoin.css';


class SignUpOnline extends React.Component {
    constructor() {
        super();
        this.state = {
          
        }
      }
    render() {
        return (
            <div>
            <NavHeader />
            <div className="z-singUpOnline">
                <div className="container">
                <h1 className="title-singUpOnline"><span className="sta">✦</span>Đăng Ký Online</h1>
                </div>
            <div className="Background-Images">
                <img className="image-singuponline" src={require("../../../../public/images/image-SingUpOnline/Img-Form-2.png")} />
                <div className="container">
                {/* <h1 className="title-singUpOnline">Đăng Ký Online</h1> */}
                    <div className="FormSignUp-Main">
                        <div className="row Form-Main">
                            <div className="col-md-6 Form-SignUP">
                                <div className="SignUp">
                                    <form method="" action="">
                                        <div className="gform-heading">
                                            <h1 className="gform-heading-item">Đăng ký</h1>
                                        </div>
                                        <div className="form-body">
                                            <input type="text" className="form-input" placeholder="Họ và Tên"></input>
                                        </div>
                                        <div className="form-body">
                                            <input type="date" className="form-input" placeholder="Ngày Sinh"></input>
                                        </div>
                                        <div className="form-body">
                                            <input type="number" className="form-input" placeholder="Số Điện Thoại"></input>
                                        </div>
                                        <div className="form-body">
                                            <input type="gmail" className="form-input" placeholder="Email"></input>
                                        </div>
                                        <div className="form-body">
                                            <input type="text" className="form-input" placeholder="Địa Chỉ"></input>
                                        </div>
                                        <div className="form-body">
                                            <input type="text" className="form-input" placeholder="Facebook/Zalo/Instagram"></input>
                                        </div>
                                        <div className="form-body-seclect-main">
                                            <select className="form-input-select form-select">
                                                <option value="Job">Chuyên Ngành</option>
                                                <option value="Code-web">Lập trình Web</option>
                                                <option value="Designer-3D">Thiết kế đồ hoạ 3D</option>
                                                <option value="Designer-2D">Thiết kế đồ hoạ 2D</option>
                                                <option value="Nail">Làm tóc vẽ móng</option>
                                                <option value="Bartender">Nghiệp vụ pha chế</option>
                                                <option value="VIDEO">Thiết kế Video</option>
                                                <option value="Marketing">Bán hàng Marketing</option>
                                                <option value="Cookinh">Chế biến món ăn</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-12">
                                            <div className="button-form-signup">
                                                <button type="submit" className="button-form-signup-item"><p className="text-form-signup">Đăng Kí</p></button>
                                            </div>
                                        </div>
                                    </div>
                                    </form>   
                                </div>
                            </div>
                            <div className="col-md-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
            </div>
        )
    }
}
export default SignUpOnline;