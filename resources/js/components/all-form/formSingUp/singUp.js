import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from './SingUp.css';

class SingUp extends React.Component{
    render(){
        return(
			<div>
				 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
			<div className="container">
			<div className="d-flex justify-content-center">
				<div className="wrapper-create">
					<div>
						<form action="" method="POST">
							<h3>SingUp</h3>
								<label for="name">Địa chỉ Email</label>
								<div className="form-group input-group">
								<div className="icon">
									<span className="input-group-text"><i className="fa fa-envelope-o"></i></span>
								</div>
								<input type="text" id="name" className="form-control" placeholder="Email@.com" />
							</div>
                            <label for="FirstName">First Name</label>
                            <div className="form-group input-group">
								<div className="icon">
									<span className="input-group-text"><i className="fa fa-user"></i></span>
								</div>
								<input type="text" id="FirstName" className="form-control" placeholder="First Name" />
							</div>
                            <label for="LastName">Last Name</label>
                            <div className="form-group input-group">
								<div className="icon">
									<span className="input-group-text"><i className="fa fa-user"></i></span>
								</div>
								<input type="text" id="LastName" className="form-control" placeholder="Last Name" />
							</div>
								<label for="password">Password</label>
							<div className="input-group form-group">
								<div className="icon">
									<span className="input-group-text"><i className="fa fa-key"></i></span>
								</div>
								<input type="password" id="password" className="form-control" placeholder="password" />
							</div>
		
							<div>
								<button type="submit" className="singUp">Đăng ký</button>
							</div>
						</form>
					</div>
					<div>
						<div className="footer">
							SingUp
						</div>
					</div>
				</div>
			</div>
		</div>
            </div>
        );
    }
}
export default SingUp;