$.getScript("https://connect.facebook.net/en_us/sdk.js", function () {
    FB.init({
        appId: "764972720295030",
        version: "v2.5"
    });
    FB.ui({
   method: 'apprequests',
   message: "Hey, use my app!"
    }, function(){
       alert("Response");
    });
});