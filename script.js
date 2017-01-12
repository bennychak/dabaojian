// loading
window.addEventListener('DOMContentLoaded', function() {
    new QueryLoader2(document.querySelector("body"), {
        barColor: "#1e1e1e",
        backgroundColor: "#fff",
        percentage: true,
        barHeight: 3,
        minimumTime: 300,
        maxTime:1000000,
        fadeOutTime: 900,
        onComplete : function() {
            
        },
    });
});

var uploader = new CanvasImageUploader({
    maxSize: 1500,
    jpegQuality: 0.7
});

var MAX_PREVIEW_SIZE = 200;
var file;   // File to upload
var $previewCanvas = $('#canvas');

function onImageChanged(e) {
    var files = e.target.files || e.dataTransfer.files;
    if (files) {
        file = files[0];
        var $canvas = $('<canvas>');
        uploader.readImageToCanvas(file, $canvas, function () {
            uploader.copyToCanvas($canvas[0], $previewCanvas, MAX_PREVIEW_SIZE);      // Copy to preview
            uploader.saveCanvasToImageData($canvas[0]);     // Save for later use in uploader.getImageData()
        });
        
        $('#uploadpage').css('display','none');
        $('#tunepage').css('display','block');
    }
}

function getFileExtension(filename) {
    return filename.split('.').pop();
}

$('#upload').bind('change', onImageChanged);