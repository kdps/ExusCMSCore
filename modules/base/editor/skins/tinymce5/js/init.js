var editorID = 'editor';
var fileSequence;

$(document).bind('insertHTML', function(event, html) {
	tinymce.activeEditor.execCommand(
			'mceInsertContent',
			false,
			html
	);
});

$(document).ready(function() {
	editorInitialize();
});