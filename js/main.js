(function () {
  // define the text file variable and give it the vslue of null
var textFile = null,
// thius function uses blob which is used by bgrowsers to make text files
  makeTextFile = function (text) {
    // definbe the type of the file to be a text file and it is plain
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    // thus this just overrides a previous text file
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }
    // this returns the new content added in  the previous text file
    textFile = window.URL.createObjectURL(data);

    // the text file is returned
    return textFile;
  };

  // getting the text which has the id create and given to the variable create
  var create = document.getElementById('create'),
  // this variable gets the values which are passed by the button which has a submit value
    textbox = document.getElementById('textbox');

    // initialize this function when the button is clicked
  create.addEventListener('click', function () {
    // the download is given a variable
    var link = document.getElementById('downloadlink');
    // the textfile is created and the download link is given the value of the textbox
    link.href = makeTextFile(textbox.value);
    // this is just defining how the download link is displayed
    link.style.display = 'block';
  }, false);
})();
