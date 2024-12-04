MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  options:{
    skipHtmlTags: [            //  HTML tags that won't be searched for math
    'script', 'noscript', 'style', 'textarea', 
    'code', 'annotation', 'annotation-xml'
    ]
  },
  loader: { load: ['ui/lazy'] }
};