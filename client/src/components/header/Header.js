import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
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
                            <div className="bt-page-user">
                                <a href="/" alt=""><i class="fa fa-user-circle-o" aria-hidden="true"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
