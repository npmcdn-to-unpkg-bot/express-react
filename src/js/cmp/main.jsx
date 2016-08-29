import React from 'react';
import ResourceList from './simplelist.jsx';

var Main = React.createClass({
    getInitialState: function(){
        return {data: []};
    },
    componentDidMount: function(){
        $.getJSON('/api/msgs', (result) => {            
            if(result.data!==null){
                this.setState({data: result.data});
            }
        })
    },    
    render: function(){
        return (
            <div className="container-fluid well text-center">
                <h1>Base React Express App</h1>
                <ResourceList data={this.state.data} />
            </div>
        );
    }
});

module.exports = Main;