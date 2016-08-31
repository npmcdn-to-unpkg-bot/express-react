'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import {Popup} from './popup.jsx';
import {ResourceList} from './simplelist.jsx';

export var Main = React.createClass({
    
    render: function(){
        return (
            <div>
                <div className="container-fluid well text-center">
                    <h1>Base React Express App</h1>
                    <ResourceList />
                    <Popup  />
                </div>
            
            </div>
        );
    }
});