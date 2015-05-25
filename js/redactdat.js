//CREATOR


$.fn.redactdat = function(options){
	console.log('yooooooooo');
	//goes through each element tag and split words into spans
	this.each(function(){

    var text = $(this).html().split(' '),
        len = text.length,
        result = []; 

    for( var i = 0; i < len; i++ ) {
        result[i] = '<span>' + text[i] + '</span>';
    }
     $(this).html(result.join(' '));
    //add span class of redact on hover
    	$("span").on(function(){
    		$("span").addClass("redact");
    	});
    //removes span class of redact on hover for individual span	
		$("span").hover(function(){
		   $(this).removeClass("redact");
		}, function(){
		   $(this).addClass("redact");
		});
	});
	console.log(this);
	return this;
};
