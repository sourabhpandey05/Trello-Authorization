$(document).ready(function(){
  alert('Welcome to StarTrackr! Now no longer under police investigation!');
  console.log("alert printed");


                          
$("#connectLink")
.click(function(){
    Trello.authorize({
        type:"popup",
		name: "from link test",
        success: function() { onAuthorizeSuccessful(); },
		error: function() { onFailedAuthorization(); }
				
	    })
});

function onAuthorizeSuccessful() {
    
              console.log("Authorization success.");
}

function onFailedAuthorization() {
    console.log("Authorization failed.");
}


});
