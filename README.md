REDACT-DAT
=========

A jQuery plugin for annoying your friends and serves no other purpose.
- surprises the user with redacted text
- adds the element of mystery to a page
- may make the user want to rage-quit

## Getting started
Implementing this plugin has 3 parts.
1. Download redactdat.js, user.js and redact.css from GITHUB.
2. Include redactdat.js, user.js and redact.css in your html.
3. Change your desired redacting colour in redact.css and change your target elements in the user.js.

## Configuring your redaction
To configure the colour of redaction, go to redact.css and alter:

.redact {
	color: red; //font colour must match the background below
	background: red; //background must match the font colour above
}

*Default colour will be black*
To configure which elements are redacted, go to user.js and alter:

$(function(){
	$('.example h3').redactdat(); //replace the '.example h3' with the element you wish to redact
	$('.example p').redactdat(); //add more elements by repeating $('').redactdat();
});


