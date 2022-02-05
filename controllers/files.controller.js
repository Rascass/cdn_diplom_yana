'use strict';

var path = require('path'),
  fs = require('fs');

module.exports = async (req, res) => {
  let reg = new RegExp(/\d\/(\w*)\/(\d*)/gm).exec(req.query.location)
  const dir = reg?.[1];
  const filename = reg?.[2];
  const startPath = `${process.env.PWD}/store/${dir}/`;
  const file = fromDir(startPath, filename);
  try{
    res.sendFile(file);
  }catch {
    res.sendFile(`${process.env.PWD}/store/${dir}/0.jpg`);
  }
}

function fromDir(startPath, filename1) {
    if (!fs.existsSync(startPath)) {
      return;
    }

    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
      var filename = path.join(startPath, files[i]);
      var stat = fs.lstatSync(filename);
      if (stat.isDirectory()) {
        fromDir(filename, filename1); //recurse
      } else if (new RegExp(/(\d*)\.\w*/gm).exec(filename)[1] === filename1) {
        return filename;
      }
    };
  
};