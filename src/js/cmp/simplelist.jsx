'use strict'
import React from 'react';

var ResourceList = React.createClass({
    getInitialState: function(){
        return {data: []};
    },
    handleGetFromServer: function(){
        $.getJSON('/api/msgs', (result) => {            
            if(result.data!==null){
                this.setState({data: result.data});
                
            } else{
                this.setState({data: []});
            }
            console.log("got: " + JSON.stringify(this.state.data));
        }).fail((err) => {
            console.error("Err caught: " + err.toString());
        });
    },
    componentDidMount: function(){
        this.handleGetFromServer();
        setInterval(this.handleGetFromServer, 2000);
    },    
    render: function(){
        var rows = this.state.data.map(function(r){
            return (
                <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.desc}</td>
                    <td>{r.value}</td>
                </tr>
            );
        });
        return (
            <div className="container-fluid text-center">
                <h2>Table</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Msg</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
});

module.exports = ResourceList;