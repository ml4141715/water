

class DataSet{



    constructor( prefix ){

        this.prefix = "www.stonybrook.club/cdn/";
        this.api = "api/";
        this.image = "image/";

        if(prefix!=null){
            this.prefix = prefix;
        }

        this.apiStr = ["all.css",
            "babel.min.js",
            "bootstrap.min.css",
            "bootstrap.min.js",
            // "jquery.js",
            "jquery-3.3.1.min.js",
            "popper.min.js",
            "react.development.js",
            "react-dom.developpment.js"
        ]

        this.__getOneSrciptStr = function ( oneApiStr ) {
            return "<script src=\""+this.prefix+this.api+oneApiStr+"\"></script>";
        }

        this._getScriptStr = function ( apiStr ) {
            var total = "";
            for(var i = 0 ; i< apiStr.length ; i++ ){
                total = total+ this.__getOneSrciptStr(  apiStr[i] );
            }
            return total;
        }

        this.getScriptStr = function () {
            return this._getScriptStr(this.apiStr);
        }


    }


}

function loadApi() {

    var dataSet = new DataSet();

    document.getElementById("weixinApi").innerHTML= dataSet.getScriptStr();

}





