function isWysiwygareaAvailable() {
	if (CKEDITOR.revision == ('%RE' + 'V%')) {
		return true;
	}

	return !!CKEDITOR.plugins.get('wysiwygarea');
}

function setEditorConfig() {
	CKEDITOR.editorConfig = function(config) {
		config.toolbarGroups = [
			{name:'document', groups: ['mode','document','doctools']},
			{name:'clipboard', groups: ['clipboard','undo']},
			{name:'editing', groups: ['find','selection','spellchecker','editing']},
			{name:'forms', groups: ['forms']}, '/',
			{name:'basicstyles', groups: ['basicstyles','cleanup']},
			{name:'paragraph', groups: ['list','indent','blocks','align','bidi','paragraph']},
			{name:'links', groups: ['links']},
			{name:'insert', groups: ['insert']}, '/',
			{name:'styles', groups: ['styles']},
			{name:'colors', groups: ['colors']},
			{name:'tools', groups: ['tools']},
			{name:'others', groups: ['others']},
			{name:'about', groups: ['about']}
		];
		config.removeButtons ='About,EasyImageUpload';
	};
}

function setEditorStyleSet() {
	CKEDITOR.stylesSet.add('default', [
		/* Block styles */

		// These styles are already available in the "Format" drop-down list ("format" plugin),
		// so they are not needed here by default. You may enable them to avoid
		// placing the "Format" combo in the toolbar, maintaining the same features.
		
		{name:'Paragraph', element:'p'},
		{name:'Heading 1', element:'h1'},
		{name:'Heading 2', element:'h2'},
		{name:'Heading 3', element:'h3'},
		{name:'Heading 4', element:'h4'},
		{name:'Heading 5', element:'h5'},
		{name:'Heading 6', element:'h6'},
		{name:'Preformatted Text',element:'pre'},
		{name:'Address', element:'address'},
		{name:'Italic Title', element:'h2', styles: {'font-style':'italic'}},
		{name:'Subtitle', element:'h3', styles: {'color':'#aaa', 'font-style':'italic'}},
		{name:'Special Container', element:'div', styles: {padding:'5px 10px', background:'#eee', border:'1px solid #ccc'}},

		/* Inline styles */

		// These are core styles available as toolbar buttons. You may opt enabling
		// some of them in the Styles drop-down list, removing them from the toolbar.
		// (This requires the "stylescombo" plugin.)
		
		{name:'Strong', element:'strong', overrides:'b'},
		{name:'Emphasis', element:'em'	, overrides:'i'},
		{name:'Underline', element:'u'},
		{name:'Strikethrough', element:'strike'},
		{name:'Subscript', element:'sub'},
		{name:'Superscript', element:'sup'},
		
		{name:'Marker', element:'span', attributes: {'class':'marker'}},

		{name:'Big', element:'big'},
		{name:'Small', element:'small'},
		{name:'Typewriter', element:'tt'},

		{name:'Computer Code', element:'code'},
		{name:'Keyboard Phrase', element:'kbd'},
		{name:'Sample Text', element:'samp'},
		{name:'Variable', element:'var'},

		{name:'Deleted Text', element:'del'},
		{name:'Inserted Text', element:'ins'},

		{name:'Cited Work', element:'cite'},
		{name:'Inline Quotation', element:'q'},

		{name:'Language: RTL', element:'span', attributes: {'dir':'rtl'}},
		{name:'Language: LTR', element:'span', attributes: {'dir':'ltr'}},

		/* Object styles */

		{name:'Styled Image (left)', element:'img', attributes: {'class':'left'}},
		{name:'Styled Image (right)', element:'img', attributes: {'class':'right'}},
		{name:'Compact Table', element:'table', attributes: {
			cellpadding:'5', cellspacing:'0', border:'1', bordercolor:'#ccc'
		}, styles: {'border-collapse':'collapse'}},

		{name:'Borderless Table', element:'table', styles: {'border-style':'hidden', 'background-color':'#E6E6FA'}},
		{name:'Square Bulleted List', element:'ul', styles: {'list-style-type':'square'}},

		/* Widget styles */

		{name:'Clean Image', type:'widget', widget:'image', attributes: {'class':'image-clean'}},
		{name:'Grayscale Image', type:'widget', widget:'image', attributes: {'class':'image-grayscale'}},

		{name:'Featured Snippet', type:'widget', widget:'codeSnippet', attributes: {'class':'code-featured'}},

		{name:'Featured Formula', type:'widget', widget:'mathjax', attributes: {'class':'math-featured'}},

		{name:'240p', type:'widget', widget:'embedSemantic', attributes: {'class':'embed-240p'}, group:'size'},
		{name:'360p', type:'widget', widget:'embedSemantic', attributes: {'class':'embed-360p'}, group:'size'},
		{name:'480p', type:'widget', widget:'embedSemantic', attributes: {'class':'embed-480p'}, group:'size'},
		{name:'720p', type:'widget', widget:'embedSemantic', attributes: {'class':'embed-720p'}, group:'size'},
		{name:'1080p', type:'widget', widget:'embedSemantic', attributes: {'class':'embed-1080p'}, group:'size'},

		// Adding space after the style name is an intended workaround. For now, there
		// is no option to create two styles with the same name for different widget types. See https://dev.ckeditor.com/ticket/16664.
		{name:'240p ', type:'widget', widget:'embed', attributes: {'class':'embed-240p'}, group:'size'},
		{name:'360p ', type:'widget', widget:'embed', attributes: {'class':'embed-360p'}, group:'size'},
		{name:'480p ', type:'widget', widget:'embed', attributes: {'class':'embed-480p'}, group:'size'},
		{name:'720p ', type:'widget', widget:'embed', attributes: {'class':'embed-720p'}, group:'size'},
		{name:'1080p ', type:'widget', widget:'embed', attributes: {'class':'embed-1080p'}, group:'size'}

	] );
}

function inlineEditorInitialize() {
	CKEDITOR.inline('editor');
}

function editorInitialize() {
	CKEDITOR.replace('editor', {
		skin:'moono',
		height: 300,
		width:'auto',
		autoUpdateElement : true,
		resize_enabled : true,
		htmlEncodeOutput: true,
		enterMode : CKEDITOR.ENTER_BR,
		shiftEnterMode : CKEDITOR.ENTER_P,
		on: {
			instanceReady: function(evt) {
				wysiwygareaAvailable = isWysiwygareaAvailable();
				_instance = CKEDITOR.instances.editor;
				fileSequence = $('input[name=file_sequence]').val();
				html = $('input[name=content]').val();
				
				if (html) {
					_instance.setData(html, function() {
						_instance.focus();
					});
				}
				
				if (fileSequence) {
					getFileList(fileSequence);
				}
			}
		}, allowedContent: {
			'a b p u s sub strong em audio video h1 h2 h3 h4 h5 h6 h7 a span img table tr td tbody ol ul li input div blockquote hr': true,
			'div': {
				styles: ['margin'],
				dir:'rtl'
			},
			'p h1 a span': {
				styles: ['text-align','font-size','color','font-weight','font-family','font-style','text-align','background-color']
			},
			'table': {
				styles: ['width','height']
			},
			'div': {
				styles: ['background-color']
			},
			img: {
				attributes: ['src','data-file-srl','alt','width','height'],
				classes: {tip: true }
			},
			table: {
				attributes: ['border','cellpadding','cellspacing','height'],
				classes: {tip: true }
			},
			a: {
				attributes: ['href','alt','width','height'],
				classes: {tip: true }
			},
			'u s sub strong em p b': {
				attributes: ['href','alt','width','height'],
				classes: {tip: true }
			},
			'audio video': {
				attributes: ['src', 'autoplay', 'controls', 'width', 'height'],
				classes: {tip: true }
			}
		}
    });
}

function submitFilter() {
	var data = _instance.getData();
	var _filter = filterData(data);
	if (!_filter) {
		return false;
	}
	
	$('input[name="content"]').val(data);
	return true;
}

function filterData(data) {
	var length = data.length;
	if (length <= 0) {
		alert('내용이 없습니다.');
		return false;
	} else if (length <= 5) {
		alert('내용이 너무 짧습니다.');
		return false;
	}
	
	return true;
}
