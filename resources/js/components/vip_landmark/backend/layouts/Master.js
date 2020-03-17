import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './../../../../components/vip_landmark/backend/partials/Sidebar';
import Header from './../../../../components/vip_landmark/backend/partials/Header';

function Master() {
    return (
        <div>
            <Header/>
            <Sidebar/>
        </div>
        
    );
}

export default Master;

if (document.getElementById('backend_app')) {
    ReactDOM.render(<Master />, document.getElementById('backend_app'));
}
