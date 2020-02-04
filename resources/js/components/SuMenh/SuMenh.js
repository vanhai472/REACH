import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from '../../../../public/css/SuMenh/Main.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//   import SuMenhItem from '../SuMenhItem/SuMenhItem'

class SuMenh extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 arrow">
                            <h2 id="bigtitle"><span>✦</span>REACH Giúp Bạn Vươn Tới Ứơc Mơ</h2>
                            <button><Link to="/SuMenhItem">click me</Link></button>
                        </div>
                    </div>
                    <div className="row main">
                        <div className="col-md-3 row mar">
                            <div className="picture">
                            </div>
                            <div className="text-1-2">
                                <h3 className="title-2-4">REACH "YES YOU CAN"</h3>
                                <p className="sumary-2-4">
                                    Tất cả thanh niên Việt Nam có cơ hội và sự hỗ trợ cần thiết để phát huy hết tiềm năng của mình. Thế nhưng, do hoàn cảnh khó khăn,không tự tin bước vào đời .Nếu Reach là nơi biến ước mơ đó thành hiện thực, bạn có tham gia?
Chúng tôi đưa lời khuyên rằng:bạn nên biết  ước mơ của bạn là gì, suy nghĩ như thế nào về tương lai. Khi đã nắm bắt phần nào những điều mình yêu thích, ước muốn, bạn nên định hướng phát triển cho bản thân một cách nhẹ nhàng. Không nên ép dồn bản thân học một cách cứng nhắc, ngột ngạt mà phải để bản thân  tự nhiên phát triển tư duy sáng tạo dựa trên sự uốn nắn của thầy cô, gia đình. Chẳng hạn, nếu bạn thích nấu ăn, thích lập trình một trang Web,hoặc thiết kế nhiều ngôi mà mình muốn.Tham gia Reach là một cách tốt nhất để ước mơ trong bản thân được định hình và có cơ hội phát triển.
Reach là nơi giúp bạn thể hiện bản thân mình, đánh giá mình để biết rằng mình là ai trong xã hội này, mình không hề thua kém một ai hay bạn không có thứ mà người khác có , điều đó khiến bạn tự ti và không muốn giao tiếp với ai,nhưng với chúng tôi ,tại trung tâm Reach chúng tôi sẽ hỗ trợ bạn giúp bạn giải quyết mọi vấn đề về các vấn để mà bạn cảm thấy rất khó khăn trong cuộc sống
 Xem thêm: Reach Center.org,vn

                                </p>
                                <span><a href="#" className="next">Xem Thêm</a></span>
                            </div>
                        </div>
                        {/* image2 */}
                        <div className="col-md-3 row mar">
                            <div className="text-1-1">
                                <h3 className="title-2-4">Hỗ trợ việc làm sau khi tốt nghiệp tại REACH</h3>
                                <p className="sumary-2-4">
                                    Học Viên REACH sau khi tốt nghiệp

    Sau khi tốt nghiệp:
    Khi các bạn học viên đã hoàn thành khóa học sau hơn 3 tháng và  6 tháng thì các bạn ra ngoài rất khó khăn để tìm được việc làm nên chúng tôi đã giải quyết được vấn đề về việc làm là kết hợp với các nhà tài trợ từ trong nước và ngoài nước giúp các bạn sau khi tốt nghiệp đảm bảo các bạn sẽ có việc làm đến 80% , 20% còn lại là phụ thuộc vào năng lực cố gắng của bạn

    Các nhà tài trợ nước ngoài
    Các nhà tài trợ quốc tế hiện nay của chúng tôi bao gồm Accenture, Công ty sổ xố Postcode của Hà Lan, Công ty Blythedol của Nhật Bản, Plan Nhật Bản, Plan Hà Lan và SNV - Tổ chức Phát triển Hà Lan.
    Các nhà tài trợ Việt Nam
    Sự bền vững trong tương lai của REACH dựa chủ yếu vào hỗ trợ tài chính và hiện vật mạnh mẽ từ các công ty Việt Nam, các tổ chức, cá nhân. Chúng tôi rất may mắn nhận được sự hỗ trợ mạnh mẽ từ một số công ty Việt Nam, bao gồm Vicoland, Công ty VietNet, Motorola Việt Nam, Prudential Việt Nam, KPMG Việt Nam và Ngân hàng ABN Amro Việt Nam.

                                </p>
                                <span><a href="#" className="next">Xem Thêm</a></span>
                            </div>
                            <div className="picture">
                            </div>
                        </div>
                        {/* image-3 */}
                        <div className="col-md-3 row mar">
                            <div className="picture">
                            </div>
                            <div className="text-1-2">
                                <h3 className="title-2-4">CLB / Hoạt động ngoại khóa</h3>
                                <p className="sumary-2-4">
                                Tôi mong rằng các bạn đang gặp khó khăn ngoài kia nếu các bạn không tin thì hãy đến với chúng tôi chúng tôi sẽ hỗ trợ bạn và giúp các bạn trở nên hoàn thiện bản thân và sớm sẽ đạt được ước muốn của bản thân.
                                </p>
                                <span><a href="#" className="next">Xem Thêm</a></span>
                            </div>
                        </div>
                        <div className="col-md-3 row mar">
                            <div className="text-1-1">
                                <h3 className="title-2-4">Thời gian đào tạo ngắn/hiệu quả giúp học viên có thể đi làm sớm</h3>
                                <p className="sumary-2-4">
                                •	Đào tạo thường xuyên: các lớp 3- 6 tháng
Nghiệp vụ  Bàn Bar
Chuyên ngành nhà hàng, bao gồm quy trình vệ sinh, phục vụ thức ăn, sắp đặt bàn ăn, nhận gọi món, chế biến và phục vụ đồ uống
Đào tạo cho nhân viên phục vụ khách sạn và quán ăn và nhân viên quầy bar
Nghiệp vụ buồng phòng
Phục vụ phòng, dành cho những công việc tại các khách sạn và nhà khách bao gồm: dọn phòng, kỹ năng phục vụ khách hàng, quy trình xử lý vệ sinh và an toàn

    
                                </p>
                                <span><a href="#" className="next">Xem Thêm</a></span>
                            </div>
                            <div className="picture">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default SuMenh;