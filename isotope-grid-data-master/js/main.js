/*Js Jq functions etc*/
jQuery(function(){ // JQuery function call to run code

    var i;
    var imageColor;
    var titleName;
    var linkH;

    for (i = 0; i < dataC.length; i++) { 

      imageColor =dataC[i]["image"];
      titleName = dataC[i]["title"];
      linkH=dataC[i]["link"];

      $(".grid-container").append( "<a href=" + linkH + "class='grid-blocks'><img class='grid-blocks-image' src='background-color:"+ imageColor +"'></div><div class='grid-blocks-title'>" + titleName + "</div></a>" );
    }


      var $grid = $('.grid-container').isotope({
        // main isotope options
        itemSelector: '.grid-blocks',
        // set layoutMode
        layoutMode: 'masonry'
      })

});(jQuery); 


