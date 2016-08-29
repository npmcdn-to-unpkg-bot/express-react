'use strict'
import React from 'react';
import ResourceList from './simplelist.jsx';

var Main = React.createClass({
    
    render: function(){
        return (
            <div className="container-fluid well text-center">
                <h1>Base React Express App</h1>
                <ResourceList />
            </div>
        );
    }
});

module.exports = Main;