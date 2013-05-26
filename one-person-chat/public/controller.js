(function() {
    // Variables
    var username;
    var message;
    var send;
    var conversationDiv;
    var conversationHistory = [];

    $(document).ready(function($) {
        //ELEMENTS
        username = $("#username");
        message = $("#message");
        send = $("#sendButton");
        conversationDiv = $("#conversation");

        // Key down on message textbox.
        message.on("keydown", onKeyPressed);
        send.on("click", Send);
        
        // Get messages
        readMessages(function(data){
            conversationHistory = data.split("\n");
            seeConversation();
        });

        // A timer to display messages
        window.setInterval(seeConversation, 2000);
    });

    /*  -------------- FUNCTIONS --------------  */
    // Add a message
    function addMessage(message){
        // Add the message into conversationHistory array
        conversationHistory.push(message);
        
        // The message is added into global array
        writeMessage(message, function(){
            if(conversationHistory.length > 10){
                conversationHistory.splice(0, 1);
            }
        });
    }

    //See conversation
    function seeConversation(){    
        readMessages(function(data){
            var opacityValue = 1.1;        

            conversationHistory = data.split("\n");
            conversationDiv.html("");
                        
            for (var i = conversationHistory.length-1; i >= 0; i--) {
                var item = $("<div>");

                item.html(conversationHistory[i]);
                
                item.css("opacity", opacityValue);
                opacityValue -= "0.1";
                
                conversationDiv.append(item);
            }
        });
    }

    // Send message
    function Send(){
        if(username.val().trim() !== ""){
            username.attr("disabled", "");
        }
        else{
            alert("Choose a valid username.");
            return;
        }
        
        if(message.val().trim() !== ""){
            addMessage(username.val() + ': ' + message.val());
        }
        else{
            alert("Enter your message, first.");
            return;
        }

        seeConversation();
        message.val("");
    }

    // Add message into global array
    function writeMessage(message, callback){
        $.post('/fetchMessages', message, function() {
            callback();
        });
    }

    // Get messages from global array
    function readMessages(callback){
        $.get('/fetchMessages', function(data) {
            callback(data);
        });
    }

    // A key was pressed in message textbox
    function onKeyPressed(ev) {
        if(ev.keyCode == 13) {
            Send();
            return false;
        }
    }
})();
