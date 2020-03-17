import React from 'react';

class Home extends React.Component {
    render(){
        return (
            <div className="content-wrapper">
                <div className="page-content fade-in-up">
                   <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="ibox bg-success color-white widget-stat">
                                <div className="ibox-body">
                                    <h2 className="m-b-5 font-strong">201</h2>
                                    <div className="m-b-5">NEW ORDERS</div><i className="ti-shopping-cart widget-stat-icon"></i>
                                    <div><i className="fa fa-level-up m-r-5"></i><small>25% higher</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ibox bg-info color-white widget-stat">
                                <div className="ibox-body">
                                    <h2 className="m-b-5 font-strong">1250</h2>
                                    <div className="m-b-5">UNIQUE VIEWS</div><i className="ti-bar-chart widget-stat-icon"></i>
                                    <div><i className="fa fa-level-up m-r-5"></i><small>17% higher</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ibox bg-warning color-white widget-stat">
                                <div className="ibox-body">
                                    <h2 className="m-b-5 font-strong">$1570</h2>
                                    <div className="m-b-5">TOTAL INCOME</div><i className="fa fa-money widget-stat-icon"></i>
                                    <div><i className="fa fa-level-up m-r-5"></i><small>22% higher</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ibox bg-danger color-white widget-stat">
                                <div className="ibox-body">
                                    <h2 className="m-b-5 font-strong">108</h2>
                                    <div className="m-b-5">NEW USERS</div><i className="ti-user widget-stat-icon"></i>
                                    <div><i className="fa fa-level-down m-r-5"></i><small>-12% Lower</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Home;


