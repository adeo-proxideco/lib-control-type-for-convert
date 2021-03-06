/* jshint -W100 */
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
/* jshint +W100 */
'use strict';

var _ = require('underscore');
    
    _.str = require('underscore.string');


var isNumeric = function(elt,tmp){
    if(isNaN(tmp)){ return false ; }
    if(tmp.toString()!==_.str.trim(elt.toString())){ return false; }
    return true;
};

exports.isString = function(elt) {
    if(Object.prototype.toString.call(elt) === '[object String]'){
        return true;
    }else{
        return false;
    }
};

exports.isInteger = function(elt) {
    var tmp=parseInt(elt,10);
    return isNumeric(elt, tmp);
};

exports.isNumber = function(elt) {
    var tmp=parseFloat(elt,10);
    return isNumeric(elt, tmp);
};

exports.isBoolean = function(elt) {
    try{
        elt=JSON.parse(elt);
        elt=elt.toString();
        if(elt!=='true' && elt!=='false'){ return false; }
        return true;
    }catch(e){
        return false;
    }
};

exports.isNotEmpty = function(elt) {
    if(elt===null){ return false; }
    if(elt===undefined){ return false; }
	elt=elt.toString();
    if(_.str.trim(elt)==='' || _.str.trim(elt)==='NaN'){
        return false;
    }
    return true;
};