'use strict'
import React from 'react';

var ResourceList = React.createClass({
    render: function(){
        var rows = this.props.data.map(function(r){
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