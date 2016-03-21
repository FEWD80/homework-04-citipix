$(function(){
  // Execute function on submit
  $("form").submit(swapPic)

  function swapPic(event){
    event.preventDefault();
    // Remove class from body tag
    $("body").removeClass()
    // Create entry variable
    var entry;
    // Get entry from form and store as variable entry
    entry = $("#city-type").val().toLowerCase();

    // use logic to figure out which city the entry is
    // set the background of the page to the appropriate picture

    if (entry === "new york" || entry === "new york city" || entry === "nyc") {
      $("body").addClass("nyc")
    }

    else if (entry === "san francisco" || entry === "sf" || entry === "bay area") {
      $("body").addClass("sf")
    }

    else if (entry === "los angeles" || entry === "la" || entry === "lax") {
      $("body").addClass("la")

    }
    else if (entry === "austin" || entry === "atx") {
      $("body").addClass("austin")
    }

    else if (entry === "sydney" || entry === "syd") {
      $("body").addClass("sydney")
    }
    // in case entry is not one of our covered cities, display citipix_skyline.jpg
    else {
      $("body").addClass("citipix-skyline");

    };

  }

});
