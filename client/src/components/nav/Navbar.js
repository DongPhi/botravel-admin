import React,{useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {GlobalState} from '../../GlobalState';

function Navbar() {
    const state = useContext(GlobalState);
    return (
        <div id="bt-main-navigation" className="bt-main-navigation">
            <div className="container">
                <div className="bt-main-menu">
                    <nav id="site-navigation">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a href="/admin" className="nav-link">
                                    <i class="fa fa-area-chart" aria-hidden="true"></i>
                                    <span className="link-title">Tổng quan</span> 
                                </a>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/tour" className="nav-link">
                                    <i class="fa fa-ravelry" aria-hidden="true"></i>
                                    <span className="link-title">Tour</span> 
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/hotel" className="nav-link">
                                    <i class="fa fa-bed" aria-hidden="true"></i>
                                    <span className="link-title">Khách sạn</span> 
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/move" className="nav-link">
                                    <i class="fa fa-car" aria-hidden="true"></i>
                                    <span className="link-title">Di chuyển</span> 
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/order" className="nav-link">
                                    <i class="fa fa-balance-scale" aria-hidden="true"></i>
                                    <span className="link-title">Giao dịch</span> 
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/page" className="nav-link">
                                    <i class="fa fa-file-text-o" aria-hidden="true"></i>
                                    <span className="link-title">Viết bài</span> 
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/discount" className="nav-link">
                                    <i class="fa fa-gift" aria-hidden="true"></i>
                                    <span className="link-title">Khuyến mãi</span> 
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
