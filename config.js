var CONFIG = {
  // your website title
  document_title: "Title from config.js",

  // index page
  index: "README.md",

  // sidebar file
  sidebar_file: "sidebar.md"

};

// **************************
// DON'T EDIT FOLLOWING CODES
// **************************

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function(key) {
    obj[key] = conf[key];
  });
}