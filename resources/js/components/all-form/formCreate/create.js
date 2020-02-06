import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from '../../../../../public/css/formCreate/create.css';

class Create extends React.Component{
    render(){
        return(
			<div>
				 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
			<div className="container">
			<div className="d-flex justify-content-center">
				<div className="wrapper-form-update">
					<div>
						<form action="" method="POST">
							<h3>Create</h3>
                            <label for="Title-Create">Title</label>
                            <div className="form-group">
								<input type="text" id="Title-Create" className="form-control" placeholder="title.." />
							</div>
                            <label for="Content-Create">Content Edit</label>
                            <div className="form-group">
								<textarea id="Content" name="Content-Create " className="form-control" placeholder="Content Edit" rows="7">
                                </textarea>
							</div>
							<div>
								<button type="submit" className="Create">Create</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
            </div>
        );
    }
}
export default Create;