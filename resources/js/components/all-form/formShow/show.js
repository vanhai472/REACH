import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from './show.css';

class Show extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="show">
                    <div className="title-index">
                        <h1>nội dung title</h1>
                    </div>
                    {/* <div className="name-index">
                        
                    </div> */}
                    <div className="body-index">
                        <p>Vietnam is a country with great opportunities. This is why we focus on that group of young people (disadvantaged youth) who are likely to miss out on these opportunities because they have challenges that most do not have.
 
 Our graduates, who have reached out for their own future, have demonstrated great courage and determination. Through hard work, they are turning their lives around. Meet some of our inspiring students and read their stories below.Vietnam is a country with great opportunities. This is why we focus on that group of young people (disadvantaged youth) who are likely to miss out on these opportunities because they have challenges that most do not have.
 
 Our graduates, who have reached out for their own future, have demonstrated great courage and determination. Through hard work, they are turning their lives around. Meet some of our inspiring students and read their stories below.<q>nội dung name </q></p>
                    </div>
                    <a href="#">đọc thêm</a>
                </div>
                </div>
            </div>
        );
    }
}
export default Show;