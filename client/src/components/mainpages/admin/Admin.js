import React from 'react';
import WellcomeDataboard from './images/wellcome-databoard.png'

function Admin() {
    return (
        <div className="bt-page-container">
            <div className="bt-page-dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-9 d-flex align-items-center">
                            <strong className="title">Tổng quan</strong>
                        </div>
                        <div className="col-3 d-flex align-items-end">
                            <div className="range-date">
                                <input type="text" className="input-range-date" name="daterange" value="16/04/2021 - 16/04/2021" />
                                <i class="fa fa-calendar icon-calendar" aria-hidden="true"></i>
                                <i class="fa fa-sort" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="bt-page-dashboard--wellcome">
                            <div className="bt-page-cards card">
                                <div className="card-body">
                                    <div className="wellcome-container">
                                        <h3 className="wellcome-title">Xin Chào Admin</h3>
                                        <p className="welcome-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <img src={WellcomeDataboard} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bt-page-dashboard--pageviews">
                                <div className="row">
                                    <div className="col-12 col-sm-6 pageviews-all">
                                        <div className="bt-page-cards card">
                                            <div className="card-body">
                                                <div className="pageviews-wrapper">
                                                    <div className="pageviews-icon">
                                                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                                                    </div>
                                                    <div className="pageviews-info">
                                                        <h4 className="pageviews-title">Lượt Truy Cập Vào Website</h4>
                                                        <div className="boar-number pageviews-number">999</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 pageviews-details">
                                        <div className="bt-page-cards card">
                                            <div className="card-body">
                                                <div className="pageviews-wrapper">
                                                    <div className="pageviews-icon">
                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                    </div>
                                                    <div className="pageviews-info">
                                                        <h4 className="pageviews-title">Lượt Xem Tour Và Khách Sạn</h4>
                                                        <div className="boar-number pageviews-number">500</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
