'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

export var Popup = React.createClass({
    render: function(){
        return (
            <div id="genericPopup" className="modal fade" role="dialog">
                <div className="modal-dialog">                    
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 id="popupTitle" className="modal-title"></h4>
                        </div>
                        <div className="modal-body">
                            <p id="popupContent"></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

export var PopupButton = React.createClass({
    setPopupContent: function(){
        $("#genericPopup #popupTitle").html(this.props.popupTitle);
        $("#genericPopup #popupContent").html(this.props.popupContent);

    },
    render: function(){
        return (
            <button onClick={this.setPopupContent}  type="button" className="btn btn-md" data-toggle="modal" data-target="#genericPopup">
                {this.props.children}
            </button>
        );
    }
});

