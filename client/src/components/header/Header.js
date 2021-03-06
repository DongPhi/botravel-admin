import React,{useContext} from 'react';
import {GlobalState} from '../../GlobalState';
import VIE from './icons/vietnam.png';

function Header() {
    const state = useContext(GlobalState);
    return (
        <div className="bt-site-header">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-sm-3">
                        <a href="/admin" alt="" className="logo">BOtravel</a>
                    </div>
                    <div className="col-12 col-sm-9">
                        <div className="bt-site-header__right">
                            <div className="bt-page-lang mr-3 mt-1">
                                <a href="/" alt=""><img src={VIE} alt="" /> VIE </a>
                            </div>
                            <div className="bt-page-seting mr-3">
                                <a href="/" alt=""><i class="fa fa-cog" aria-hidden="true"></i> </a>
                            </div>
                            <div className="bt-page-notifi mr-3">
                                <a href="/" alt=""><i class="fa fa-bell-o" aria-hidden="true"></i> </a>
                            </div>
                            
                            <div className="bt-page-user btn-group" aria-labelledby="dropdownMenuLink">
                                <a href="/" alt="" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user-circle-o" aria-hidden="true"></i> </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#"><i class="fa fa-user mr-2" aria-hidden="true"></i> Tài khoản</a>
                                    <a className="dropdown-item" href="#"><i class="fa fa-sign-out mr-2" aria-hidden="true"></i>Đăng xuất</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
