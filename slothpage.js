$(document).ready(function() {


    // replace .hide within the HTML
    document.getElementById("secondjoke").classList.add("hide");
    document.getElementById("more-button").classList.add("hide");
    document.getElementById("answer-block").classList.add("hide");
    document.getElementById("answer-block2").classList.add("hide");
    document.getElementById("button2").classList.add("hide");


    // When user clicks first button, show answer
    document.getElementById("button1").addEventListener("click", function() {
        document.getElementById("answer-block").classList.add("show");
        document.getElementById("more-button").classList.add("show");
    });

    // for second joke
    document.getElementById("more-button").addEventListener("click", function() {
        document.getElementById("secondjoke").classList.add("show");
        document.getElementById("button2").classList.add("show");
    });

    document.getElementById("button2").addEventListener("click", function() {
        document.getElementById("answer-block2").classList.add("show");
    });


    $('#search').click(function(){
        // var $xhr = $.getJSON('https:/api.cognitive.microsoft.com/bing/v5.0/images/search?q=sloth&count=20&mkt=en-us&safeSearch=Moderate');
        var $xhr =
        $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=sloth&count=20&mkt=en-us&safeSearch=Moderate" ,
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","multipart/form-data");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","f5d74d3abf3e4bceba557de7e238b724");
            },
            type: "GET",
        })

        $xhr.done(function(data){
          console.log(data)
            if ($xhr.status !== 200){
                return
            }
            console.log('woof')
            var result=''
            var idx = Math.floor(Math.random()*20)
            var slothPic = data.queryExpansions[idx].thumbnail.thumbnailUrl
            console.log(data.queryExpansions[idx].thumbnail.thumbnailUrl)
            var userInput=$("#userInput").val()
            console.log(userInput)
            $(".slothMe-images").append(`<img class="slothMe-images" src='${slothPic}'>`)
            $(".userInputImage").append(`<img class="userInputImage" src='${userInput}'>`)

                console.log("sloth photo!")

            $xhr.fail(function(err){
                console.log(err); 
            });
          });
        });



});




// $xhr.done(function(data){
//   console.log(data)
//     if ($xhr.status !== 200){
//         return
//     }
//     console.log('woof')
//     var result=''
//     var idx = Math.floor(Math.random()*20)
//     var slothPic = result.value[idx]["contentUrl"]
//     $(".slothMe-images").append(`<div>
//       <img id="slothMe-Style" src='${slothPic}>
//       </div>`)
//     // look at pages 318 - image tag with src
//
//         console.log("sloth photo!")
//
//     $xhr.fail(function(err){
//         console.log(err); 
//     });
//   });
// });











// $(function() {
//         var params = {
//             // Request parameters
//         };
//
//         $.ajax({
//             url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=sloth&count=20&mkt=en-us&safeSearch=Moderate" ,
//             beforeSend: function(xhrObj){
//                 // Request headers
//                 xhrObj.setRequestHeader("Content-Type","multipart/form-data");
//                 xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","f5d74d3abf3e4bceba557de7e238b724");
//             },
//             type: "GET",
//         })
//         .done(function(data) {
//           console.log(data);
//             alert("success");
//         })
//         .fail(function() {
//             alert("error");
//         });
//     });
