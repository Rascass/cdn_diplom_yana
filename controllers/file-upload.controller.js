'use strict';
const findRemoveSync = require('find-remove')

module.exports = async (req, res) => {
  const file = req.files.file
  const fileName = req.body.name
  const dir = req.body.dir
  findRemoveSync(`${__dirname}/../store/${dir}`, { prefix: fileName })
  file.mv(`${__dirname}/../store/${dir}/${fileName}.${new RegExp(/.*\.(.*)/gm).exec(req.files.file.name)[1]}`, err => {
    if (err) {
      console.log(err)
      res.send('There is error')
    } else {
      res.send('uploaded successfully')
    }
  })
}