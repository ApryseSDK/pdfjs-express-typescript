/// <reference path='./express.d.ts'/>

WebViewer({
  path: './WebViewer/lib',
  initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/Chart_.Vector.pdf'
}, document.getElementById('viewer')).then(function(instance) {
  // Call all the APIs (which you can also define in the express.d.ts file)
});