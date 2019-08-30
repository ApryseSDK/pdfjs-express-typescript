/**
* Creates a WebViewer instance and embeds it on the HTML page.
* @name WebViewer
* @param {WVOptions} options A set of options required for the contstructor to create an instance properly
* @param {string} [options.annotationUser=Guest] Name of the user for annotations
* @param {string} [options.config] URL path to a custom JavaScript for customizations
* @param {string} [options.css] URL path to a custom CSS file for customizations
* @param {Array.<string>} [options.disabledElements] List of data-elements to be disabled in UI
* @param {boolean} [options.enableAnnotations=true] Enable annotations feature
* @param {boolean} [options.enableAzureWorkaround=false] Enable workaround of the issue in Azure related to range requests
* @param {boolean} [options.enableFilePicker=false] Enable file picker feature
* @param {boolean} [options.enableMeasurement=false] Enable measurement tools
* @param {boolean} [options.enableRedaction=false] Enable redaction tool
* @param {string} [options.extension] Extension of the document to be loaded
* @param {boolean} [options.forceClientSideInit=false] If set to true then when loading a document using WebViewer Server the document will always switch to client only rendering allowing page manipulation and the full API to be used.
* @param {boolean} [options.fullAPI=false] Enable PDFNet.js library functions
* @param {string} [options.initialDoc] URL path to a document to load on startup
* @param {boolean} [options.isAdminUser=false] Set user permission to admin
* @param {boolean} [options.isReadOnly=false] Set user permission to read-only
* @param {string} options.licenseKey License key for viewing documents
* @param {boolean} [options.mobileRedirect=true] Whether the mobile viewer should redirect to a new window or not
* @param {boolean} [options.path='WebViewer/lib']  Path to the WebViewer lib folder
* @param {string} [options.preloadWorker] Type of workers to be preloaded. Accepts `pdf`|`office`|`all`.
* @param {string} [options.ui=default] Type of UI to be used
* @param {object} [options.workerTransportPromise]
* @param {function} [options.workerTransportPromise.pdf] Promise that resolves to a PDF worker
* @param {function} [options.workerTransportPromise.office]  Promise that resolves to an office worker
* @param {HTMLElement} viewerElement A DOMElement that is needed to root the iframe of the WebViewer onto the  HTML page
* @return {Promise<WebViewerInstance>} returns a promise that resolves to a webviewer instance.
* @example // 5.1 and after
WebViewer({
  licenseKey: 'YOUR_LICENSE_KEY'
}, document.getElementById('viewer'))
  .then(function(instance) {
    var docViewer = instance.docViewer;
    var annotManager = instance.annotManager;
    // call methods from instance, docViewer and annotManager as needed

    // you can also access major namespaces from the instancs as follows:
    // var Tools = instance.Tools;
    // var Annotations = instance.Annotations;
  });
*/
declare function WebViewer(options: WVOptions, viewerElement: HTMLElement): Promise<WebViewerInstance>

/**
* @interface WVOptions
* An object from which you can choose options for the webviewer
* instance to be produced using the constructor. 
* See our guides and API for WebViewer at https://www.pdftron.com/documentation/web
* @example WebViewer({
* path: 'path/to/WebViewer/lib',  // This contains a default value of `WebViewer/lib`
* initialDoc: 'path/to/local/file OR URL', // (see more options in guides)
* enableAnnotations: true, // Allows you to toggle the use of annotations on the document
* // and many other options to explore
* } document.getElementById('viewer')).then(function(instance) {...})
*/
declare interface WVOptions {
  initialDoc: string;
  annotationUser?: string;
  config?: string;
  css?: string;
  disabledElements?: Array<any>;
  documentId?: string;
  enableAnnotations?: boolean;
  enableAzureWorkaround?: boolean;
  enableFilePicker?: boolean;
  enableOfflineMode?: boolean;
  enableRedaction?: boolean;
  enableMeasurement?: boolean;
  extension?: any;
  forceClientSideInit?: boolean;
  fullAPI?: boolean;
  isAdminUser?: boolean;
  isReadOnly?: boolean;
  l?: string;
  licenseKey?: string;
  mobileRedirect?: boolean;
  pdfBackend?: string;
  path?: string;
  preloadPDFWorker?: boolean;
  useDownloader?: boolean;
  ui?: string;
  workerTransportPromise?: {
    pdf?: (...params: Array<any>) => any;
    office?: (...params: Array<any>) => any;
  };
}

/**
* Creates a WebViewer instance and embeds it on the HTML page.
* @name WebViewer
* @class Main class.
* @param {object} options
* @param {HTMLElement} viewerElement DOM element that will contain WebViewer
*/
declare class WebViewerInstance {
  constructor(options: {
    initialDoc: string;
  }, viewerElement: HTMLElement);
}