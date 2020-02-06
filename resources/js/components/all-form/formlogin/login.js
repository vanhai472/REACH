import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from './login.css';

class Login extends React.Component{
    render(){
        return(
			<div>
				 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
			<div className="container">
			<div className="d-flex justify-content-center">
				<div className="wrapper-login">
					<div>
						<form action="" method="POST">
							<h3>Sign In</h3>
								<label for="name">Username hoặc Địa chỉ Email</label>
								<div className="form-group input-group">
								<div className="icon">
									<span className="input-group-text"><i className="fa fa-user"></i></span>
								</div>
								<input type="text" id="name" className="form-control" placeholder="username" />
							</div>
								<label for="password">Password</label>
							<div className="input-group form-group">
								<div className="icon">
									<span className="input-group-text"><i className="fa fa-key"></i></span>
								</div>
								<input type="password" id="password" className="form-control" placeholder="password" />
							</div>
		
							<div>
								<button type="submit" className="Login">Đăng nhập</button>
							</div>
						</form>
					</div>
					<div>
						<div className="footer">
							singin admin
						</div>
					</div>
				</div>
			</div>
		</div>
            </div>
        );
    }
}
export default Login;