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

function submitFilter() {
	var _filter = filterData(data);
	if (!_filter) {
		return false;
	}
	
	$('input[name="content"]').val(data);
	return true;
}

function setContent() {
	fileSequence = $('input[name=file_sequence]').val();
	var form = $('input[name="content"]').val();
	
	if (form) {
		tinymce.activeEditor.setContent(form);
	}
	
	if (fileSequence) {
		getFileList(fileSequence);
	}
}

function editorInitialize() {
	tinymce.init({
		setup: function (editor) {
			editor.on('change', function () {
				var data = tinymce.activeEditor.getContent();
				$('input[name="content"]').val(data);
			});
		},
		init_instance_callback: "setContent",
		selector: '#editor',
		plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help',
		toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment',
		tinycomments_mode: 'embedded',
		image_caption: true,
		importcss_append: true,
		a_plugin_option: true,
		a_configuration_option: 400,
		inline: false,
		height: 300,
		images_upload_handler: function (blobInfo, success, failure) {
			var xhr, formData;
			xhr = new XMLHttpRequest();
			xhr.withCredentials = false;
			xhr.open('POST', 'postAcceptor.php');
			xhr.onload = function() {
				var json;

				if (xhr.status != 200) {
					failure('HTTP Error: ' + xhr.status);
					return;
				}
				json = JSON.parse(xhr.responseText);

				if (!json || typeof json.location != 'string') {
					failure('Invalid JSON: ' + xhr.responseText);
					return;
				}
				success(json.location);
			};
			
			formData = new FormData();
			formData.append('file', blobInfo.blob(), fileName(blobInfo));
			xhr.send(formData);
		}
	});
}