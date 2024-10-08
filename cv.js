var url = 'Assets/CV.pdf'; 

    var loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function(pdf) {
    var container = document.getElementById('pdf-viewer');
    for (var i = 1; i <= pdf.numPages; i++) {
        pdf.getPage(i).then(function(page) {
            var scale = 1.5;
            var viewport = page.getViewport({ scale: scale });
            
            // Create canvas element
            var canvas = document.createElement('canvas');
            container.appendChild(canvas);
            
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);
        });
    }
    }, function(reason) {
        console.error(reason);
    });