var express = require('express');
var cors = require('cors');
require('dotenv').config()

// mutler
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// https://www.npmjs.com/package/multer?activeTab=readme
app.post('/api/fileanalyse', upload.single('upfile'), function(req, res) {

  console.log(req.file)
  const name = req.file.originalname;
  const type = req.file.mimetype;
  const size = req.file.size;

  res.json({ name: name, type: type, size: size })
  // res.json({ hi: "Hello world" })
});




const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Your app is listening on port ' + port)
});
