
var selectedItem = [];

function unsetSelectedItem() {
	$('.fileItem div').removeClass('selectedItem');
	selectedItem = [];
}

function selectItem(self) {
	var _self = $(self);
	var fileSrl = _self.attr('file_srl');
	
	if ($(_self).hasClass('selectedItem')) {
		selectedItem.splice(selectedItem.indexOf(fileSrl), 1);
		$(_self).removeClass('selectedItem');
	} else{
		selectedItem.push(fileSrl);
		$(_self).addClass('selectedItem');
	}
	
	if ($('.selectedItem').length>0) {
		$('.insertImageToContent,.unsetSelectedItem').addClass('activeItem');
	} else{
		$('.insertImageToContent,.unsetSelectedItem').removeClass('activeItem');
	}
}

function registryFileHandler() {
	$(".fileItem").hover(function() {
		$(this).find('#EditorToggleButton').css('display', 'block');
	},function() {
		$(this).find('#EditorToggleButton').css('display', 'none');
	});
	
	$('.editOpt .unsetSelectedItem').click(function() {
		unsetSelectedItem();
	});
	
	$('.editOpt .insertAllImageToContent').click(function() {
		uploadAllFiles();
	});
	
	$('.editOpt .insertImageToContent').click(function() {
		uploadSelectedFiles();
	});
	
	$('#uploadedFile .imageArea').dblclick(function() {
		uploadSelectedFile(this);
	});
	
	$('#uploadedFile .imageArea').click(function() {
		selectItem(this);
	});
	
	$('#uploadedFile .imageDelete').click(function() {
		removeFile(this);
	});
}

function insertTag(fileData) {
	var sourceCode = getExtSource(fileData.url, fileData.fileSrl, fileData.fileName);
	if (sourceCode) {
		$(document).trigger('insertHTML', sourceCode);
	}
	
	imageAppends(fileData.fileSrl, fileData.sequence, fileData.url, fileData.fileName);
	registryFileHandler();
}

function uploadAllFiles() {
	$.each($('#uploadedFile').find("li"), function(key, item) {
		_attr = $(item).find('div');
			
		var url = _attr.attr('download_url');
		var fileSrl = _attr.attr('file_srl');
		var fileName = _attr.attr('filename');
		
		var sourceCode = getExtSource(url, fileSrl, fileName);
		if (sourceCode) {
			$(document).trigger('insertHTML', sourceCode);
			
			$('.fileItem div').removeClass('selectedItem');
		}
	});
}

function uploadSelectedFile(self) {
	var _self = $(self);
	var url = _self.attr('download_url');
	var fileSrl = _self.attr('file_srl');
	var fileName = _self.attr('filename');
	
	var sourceCode = getExtSource(url, fileSrl, fileName);
	if (sourceCode) {
		$(document).trigger('insertHTML', sourceCode);
	}
}

function uploadSelectedFiles() {
	if ($('#uploadedFile').find('.selectedItem').length > 0) {
		var _selectedItem = selectedItem;
		var _tmpLength = _selectedItem.length;
		for(item = 0; item < _tmpLength; item++) {
			_item = _selectedItem[item];
			_attr = $('div[file_srl=' + _item + ']');
			
			var url = _attr.attr('download_url');
			var fileSrl = _attr.attr('file_srl');
			var fileName = _attr.attr('filename');
			
			var sourceCode = getExtSource(url, fileSrl, fileName);
			if (sourceCode) {
				$(document).trigger('insertHTML', sourceCode);
				
				$('.fileItem div').removeClass('selectedItem');
			}
		}
		
		selectedItem = [];
	}
}

function getFileType(fileName) {
	if (/\.(jpe?g|png|gif|bmp|tif|pcx|webp)$/i.test(fileName)) {
		return 'image';
	} else if (/\.(mp3|ogg)$/i.test(fileName)) {
		return 'audio';
	} else if (/\.(mp4|avi|mpg|mpeg|mpe|wmv|asf|asx|flv|rm|mov|dat|mkv|ts|tp|3gp)$/i.test(fileName)) {
		return 'video';
	} else if (/\.(zip|gz|rar|gzip|7z|7zip|tar|arj|alz|ace|arc|arj|b64|bh|bhx|bin|gz2|cab|ear|enc|ha|hqx|ice|img|mim|pak|tgz|war)$/i.test(fileName)) {
		return 'compress';
	} else if (/\.(hwp)$/i.test(fileName)) {
		return 'hwp';
	} else if (/\.(xlsx|xlsm|xlsb|xltx|xltm|xls|xlt|xls|xlam|xla|xlw|xlr)$/i.test(fileName)) {
		return 'excel';
	} else if (/\.(pptx|pptm|ppt|potx|potm|pot|thmx|ppsx|ppsm|pps|ppam|ppa|pptx)$/i.test(fileName)) {
		return 'powerpoint';
	} else if (/\.(doc|dot|wbk)$/i.test(fileName)) {
		return 'word';
	} else if (/\.(accdb|accde|accdt|accdr)$/i.test(fileName)) {
		return 'access';
	} else if (/\.(vbg|vbp)$/i.test(fileName)) {
		return 'vb6';
	} else if (/\.(html)$/i.test(fileName)) {
		return 'html';
	} else if (/\.(css)$/i.test(fileName)) {
		return 'css';
	} else if (/\.(js)$/i.test(fileName)) {
		return 'javascript';
	} else if (/\.(txt)$/i.test(fileName)) {
		return 'notepad';
	}
}

function getFileList(fileSequence) {
	var url = "index.php";
	
	var params = {
		[core_flower.def_mid]:'files',
		module: core_flower.mid,
		srl: core_flower.srl,
		act:'getFileList',
		sequence: fileSequence
	};
	
	$.core.Request.ajax("POST", url, params, 'completeLoadFileList', 'json');
}

function removeFile(self) {
	var fileSrl = $(self).attr('data-id');
	var fileSequence = $(self).attr('data-target');
	var url = "index.php";
				
	var params = {
		[core_flower.def_mid]:'files',
		module: core_flower.mid,
		srl: core_flower.srl,
		act:'deleteFile',
		sequence: fileSequence,
		target: fileSrl
	};
	
	$.core.Request.ajax("POST", url, params, 'completeRemoveFile', 'json');
}

function getExtSource(src, fileSrl, fileName) {
	var source;
	
	if (/\.(jpe?g|png|gif)$/i.test(fileName)) {
		source = '<img src="' + src + '" data-file-srl="' + fileSrl + '" alt="' + fileName + '"/>' + "\r\n<p><br></p>\r\n";
	} else if (/\.(mp3|ogg)$/i.test(fileName)) {
		source = '<audio src="' + src + '" data-file-srl="' + fileSrl + '" alt="' + fileName + '" controls></audio>' + "\r\n<p><br></p>\r\n";
	} else if (/\.(mp4)$/i.test(fileName)) {
		source = '<video src="' + src + '" data-file-srl="' + fileSrl + '" alt="' + fileName + '" controls></video>' + "\r\n<p><br></p>\r\n";
	} else{
		source = '<a href="' + src + '" data-file-srl="' + fileSrl + '" alt="' + fileName + '" controls >' + fileName + '</a>';
	}
	
	return source;
}

function initFormData() {
	var formData = new FormData();
	formData.append(core_flower.def_mid, 'files');
	formData.append('sequence', $('input[name=file_sequence]').val());
	formData.append('act', 'uploadFile');
	formData.append('module', [core_flower.mid]);
	formData.append('allowSize', 10);
	formData.append('upload', $('#fileupload')[0].files[0]);
	
	return formData;
}

function getExtImage(download_url) {
	var imgPath = "./library/img/ext/";
	var extFile = getFileType(download_url);
	if (extFile == 'image') {
		return download_url;
	} else if ($.inArray(extFile, acceptedExt)) {
		return imgPath + extFile + ".png";
	} else{
		return imgPath + "/file.png";
	}
}

function imageAppends(file_srl, upload_target_srl, download_url, filename) {
	$('#fileList, .editOpt').show();
	
	var imageController = document.createElement("li");
	imageController.setAttribute('class',"fileItem");
	
	var imageDelete = document.createElement("a");
	imageDelete.setAttribute('id',"EditorToggleButton");
	imageDelete.setAttribute('class',"imageDelete");
	imageDelete.setAttribute('data-id', file_srl);
	imageDelete.setAttribute('data-target', upload_target_srl);
	imageDelete.innerHTML = "<i class=\"fa fa-times\" aria-hidden=\"true\"></i>";
	
	var imageName = document.createElement("a");
	imageName.setAttribute('class',"fileName");
	imageName.innerHTML = filename;
	
	var imageNameDiv = document.createElement("div");
	imageNameDiv.setAttribute('id',"EditorToggleButton");
	imageNameDiv.setAttribute('class',"fileNameArea");
	
	imageNameDiv.appendChild(imageName);
	
	var imagePriview = document.createElement("a");
	imagePriview.setAttribute('class',"screenshot");
	imagePriview.setAttribute('rel', download_url);
	
	var imageAppend = document.createElement("img");
	imageAppend.setAttribute('data', download_url);
	imageAppend.setAttribute('src', getExtImage(download_url));
	
	var imageAppendDiv = document.createElement("div");
	imageAppendDiv.setAttribute('class',"imageArea");
	imageAppendDiv.setAttribute('file_srl', file_srl);
	imageAppendDiv.setAttribute('upload_target_srl', upload_target_srl);
	imageAppendDiv.setAttribute('download_url', download_url);
	imageAppendDiv.setAttribute('filename', filename);
	imageAppendDiv.appendChild(imageAppend);
	
	imageController.appendChild(imageAppendDiv);
	imageController.appendChild(imagePriview);
	imageController.appendChild(imageDelete);
	imageController.appendChild(imageNameDiv);
	
	console.log(imageController);
	
	var target = document.getElementById("uploadedFile");
	target.appendChild(imageController);
}
