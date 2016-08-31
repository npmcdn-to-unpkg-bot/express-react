'use strict';

export function eventDefaultSafeCB(cb){
    return function(event){
        event.preventDefault();
        //event.stopPropagation();
        cb(event);
    }
}