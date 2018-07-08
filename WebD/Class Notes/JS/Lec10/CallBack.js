
function ImageProcessing(){

  getImage(function(image){
      enhanceImage(image, function(enhImage){
          console.log("Enhancing Image");
          console.log("Optimization has started....");
          console.log("Enhanced Image Is" + enhImage);
          OptimizeImage(enhImage,function(img){
              console.log(img);

          });
      });
  });

  console.log("FIRST OUTPUT ");


}

function getImage(cb){

    setTimeout(function(){
        console.log("Getting The Image");
        let img = 'Wallpaper.jpg';
       cb(img) ;
    },0)
}

function enhanceImage(img,cb){
    console.log("Image Enhanced" + img);
     img = img + "enhanced";
    cb(img);
}

function OptimizeImage(enhImage,cb){
    setTimeout(function(){
        console.log("Optimizing Image");
        let optImg = enhImage + " Optimised";
        cb(optImg);
    },0);
}
ImageProcessing();