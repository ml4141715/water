







class EquipmentData{

    constructor(){

        // here will have all the data

        // it will contain some

        this.UserEquipment = "";
        this.UserEquipmentFolders = {};
        this.EquipmentData ={};
        this.ImageBlob = {};

        this.currentEquipmentData = "";
        this.ImageData = {};

        //this.currentImageDataId = "5dd8558e403e78018e8b8cec";
            // this data will be saved

    }

    displayCurrentImageData(){

        // here we do all the display

        if( equipmentData.currentEquipmentData.currentImageIds != "" ){

            var imageData = this.ImageData[ this.currentEquipmentData.currentImageIds ];
            editOp.setAngleValue( imageData.angle );
            editOp.setSizeValue( imageData.size );
            editOp.setStatusName( imageData.name );
            editOp.setXposition( imageData.position.x );
            editOp.setYPosition( imageData.position.y );

            //setDropDown( imageDataIds, imageDataNames )

            //


        }else{
            editOp.setAngleValue( 0 );
            editOp.setSizeValue( 0 );
            editOp.setStatusName( "select or upload to start" );
            editOp.setXposition( 0 );
            editOp.setYPosition( 0 );

        }

        var imageDataIds = this.currentEquipmentData.imageIds;

        var imageDataNames = [];
        for( var i = 0 ; i< imageDataIds.length ; i++ ){
            var name = this.ImageData[ imageDataIds[i] ]["name"];
            imageDataNames.push(name);
        }

        editOp.setDropDown(  imageDataIds, imageDataNames );



        // editOp.setAngleValue()
        // editOp.setSizeValue()
        // editOp.setStatusName()
        // editOp.setXposition()
        // editOp.setYPosition()
        // imageData.angle
        // imageData.size
        // imageData.name
        // imageData.position.x



    }

    displayFolder(){
        this.__displayAll();
    }


    __displayAll(  ){
        this.__displayFolderByType( "all" );
    }

    __displayShare(){
        this.__displayFolderByType( "share" );
    }

    __displayShare(){
        this.__displayFolderByType( "favourite" );
    }

    displayEquipment(){

        var name = this.currentEquipmentData.name;
        var description = this.currentEquipmentData.description;
        var currentImageId = this.currentEquipmentData.coverBlobId;

        if( currentImageId != "" ){

            var imageblob = localStorage.getItem( currentImageId );
            var imageData = JSON.parse(imageblob).blob;

            //imageOP = new ImageOp();
            imageOP.setCoverImage( imageData );
        }

        imageOP.setNameValue( name );
        imageOP.setTextArea( description );


        //this.currentEquipmentData.favourite
        //console.log("waht happened?");
        //console.log( this.currentEquipmentData.shared );
        //console.log( this.currentEquipmentData.favourite );

        setOp.setShareBaseBoolean( this.currentEquipmentData.shared );
        setOp.setLikeBaseBoolean( this.currentEquipmentData.favourite );

    }

    __displayFolderByType( type ){

        console.log()

        var cursor;
        var keys = Object.keys(this.UserEquipmentFolders);
        for( var i = 0 ; i < keys.length ; i++ ){
            cursor = this.UserEquipmentFolders[keys[i]];
            if( cursor["type"] == type ){
                break;
            }
        }

        if( cursor["itemIdsInFolder"] != null ){
            var cards = new Cards();
            for( var i = 0  ; i <  cursor["itemIdsInFolder"].length  ; i++ ){
                var equipmentDataId =  cursor["itemIdsInFolder"][i];
                var equipmentData = this.EquipmentData[ equipmentDataId ];
                //localStorage.getItem(equipmentData.coverBlobId)
                var imageData;
                //console.log(equipmentData.coverBlobId);
                if( equipmentData.coverBlobId == "" ){
                    imageData = "https://ml4141715.github.io/water/cdn/image/leaf.png";
                }else{
                    var imageblob = localStorage.getItem(equipmentData.coverBlobId);
                    imageData = JSON.parse(imageblob).blob;
                }
                cards.addCard( imageData, equipmentData.name , equipmentData.description , equipmentData.id );
            }
            cards.setHTML();

        }


    }

}


class LabData{

    constructor(){




    }


}

