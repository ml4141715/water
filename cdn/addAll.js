

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


        // now we need all title
        //<meta charset="UTF-8">
        //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //<title>Bootstrap Theme</title>
        //<meta http-equiv="content-type" content="text/html;charset=utf-8">
        //     <meta name="googlebot" content="noindex">
        //     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        //    <link rel="icon" href="WeixinLogin/Image/stratego_icon.png">

        this.charType = "<meta http-equiv=\"content-type\" content=\"text/html;charset=utf-8\">";
        this.blockGoogle = "<meta name=\"googlebot\" content=\"noindex\">";
        this.fullView = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\">";
        this.__iconImageName = "leaf.png";
        this.iconImage = "<link rel=\"icon\" href=\"http://"+this.prefix+this.image+this.__iconImageName+"\">";
        this.__titleName = "Green Lab";
        this.titleName = "<title>"+this.__titleName+"</title>";
        this.getAll= function () {
            return this.getScriptStr()+this.titleName+this.iconImage+this.fullView+this.blockGoogle+this.charType;
        }




    }


}





function loadApi() {

    var dataSet = new DataSet();

    var weixinApi =  document.getElementById("weixinApi");

    weixinApi.innerHTML = weixinApi.innerHTML+dataSet.getAll();


}





