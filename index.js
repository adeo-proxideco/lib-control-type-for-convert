
/*────────────────────────────────────────────────────────────────────────────────────────*\
│                   ;          Copyright (C) 2014 Groupe Adeo / CSP Proximité Déco         │
│                  ;;                                                                      │
│                 :;.     Licensed under the Apache License, Version 2.0 (the "License");  │
│                ,;;      you may not use this file except in compliance with the License. │
│                ;;;      You may obtain a copy of the License at                          │
│       ;;;      :;                                                                        │
│    ,;;  ;    ,;;:    :           http://www.apache.org/licenses/LICENSE-2.0              │
│  ;;   ,;.   ;;;;    ;;    :;;                                                            │
│ ,;    ;;   ;; ;;   ::;   .;;;;                                                           │
│.;   ;;:  :;  ;;,   ;;   ;;   ;     Unless required by applicable law or agreed to in     │
│:;  ;;:.  ;: ;;;:  ;;    ;   ;:     writing, software distributed under the License is    │
│:: ;,  , ;; ;;  ;,;;:.:;;;:;;:      distributed on an "AS IS" BASIS,                      │
│ ,:     :  ;,    :   .:   :,        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,         │
│                                    either express or implied.                            │
│  ++++++++++++++++++++++++++',                                                            │
│                                                                                          │
│   See the License for the specific language governing permissions and                    │
│   limitations under the License.                                                         │
│                                                                                          │
\*────────────────────────────────────────────────────────────────────────────────────────*/

'use strict';

var _ = require('underscore');
    
     _.str = require('underscore.string');


var isString = exports.isString = function(elt) {
    if(Object.prototype.toString.call(elt) === '[object String]'){
        return true;
    }else{
        return false
    }
}

var isInteger = exports.isInteger = function(elt) {
    try{
        var tmp=parseInt(elt,10);
        if(isNaN(elt)) return false;
        if(tmp.toString()!=elt) return false;
        return true;
    }catch(e){
        return false;
    }
}

var isNumber = exports.isNumber = function(elt) {
    try{
        var tmp=parseFloat(elt,10);
        if(isNaN(elt)) return false;
        if(tmp.toString()!=elt) return false;
        return true;
    }catch(e){
        return false;
    }
}

var isBoolean = exports.isBoolean = function(elt) {
    try{
        elt=JSON.parse(elt);
        elt=elt.toString();
        if(elt!=='true' && elt!=='false') return false;
        return true;
    }catch(e){
        return false;
    }
}

var isNotEmpty = exports.isNotEmpty = function(elt) {
    if(elt===null) return false;
    if(elt===undefined) return false;
	var elt=elt.toString();
    if(_.str.trim(elt)=='' || _.str.trim(elt)=='NaN'){
        return false;
    }
    return true;
}