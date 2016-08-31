'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

/*
    Modal popup container component. Must be activated with component `PopupButton`
*/
export var Popup = React.createClass({
    render: function(){
        return (
            <div id="genericPopup" className="modal fade" role="dialog">
                <div className="modal-dialog">                    
                    <div className="modal-content">
                        <div className="modal-header">
                            <button id="modalClose" type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 id="popupTitle" className="modal-title"></h4>
                        </div>
                        <div className="modal-body">
                            <p id="popupContent"></p>
                        </div>
                        <div className="modal-footer">
                            <button id="modalOk" type="button" className="btn btn-default" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

/*
    Modal Popup activator button.
    
    @customClass: Custom CSS class that will be injected in the button. Default: btn-md
    @popupTitle: Title that will be shown in the modal component. Default: [empty]
    @popupContent: Content to show in the modal popup. Default: [empty]
    @modalOkCb: Callback to be executed through the modal "Accept" button.
    @modalCloseCb: Callback to be executed through the modal "Accept" button.
*/
export var PopupButton = React.createClass({
    getInitialState: function(){
        let data={}, act = {};
        act.modalOkCb = this.props.modalOkCb || function(){};
        act.modalCloseCb = this.props.modalCloseCb || function(){};
        data.customClass = this.props.customClass || 'btn-md';
        return {data: data, act: act};
    },
    setUpPopup: function(){
        $("#genericPopup #popupTitle").html(this.props.popupTitle);
        $("#genericPopup #popupContent").html(this.props.popupContent);
        let modalOk = $("#genericPopup #modalOk");
        modalOk.off('click');
        modalOk.click(this.state.act.modalOkCb);
        let modalClose = $("#genericPopup #modalClose");
        modalClose.off('click');
        modalClose.click(this.state.act.modalCloseCb);
    },
    render: function(){
        return (
            <button 
                type="button" 
                className={"btn " + this.state.data.customClass} 
                data-toggle="modal" 
                data-target="#genericPopup"
                onClick={this.setUpPopup}>
                {this.props.children}
            </button>
        );
    }
});

