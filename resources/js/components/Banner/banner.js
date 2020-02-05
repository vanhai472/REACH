import React from 'react';
import {} from '../../../../public/css/banner/banner.css';

class Banner extends React.Component {
    render() {
        return (
            <div>
                <div id="full-banner">
                <img id="banner" src={require("../../../../public/images/image-bannner/jobBanner.gif")} />
                </div>
            </div>
        )
    }
}
export default Banner;