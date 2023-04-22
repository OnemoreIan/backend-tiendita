const bodyParser = require('body-parser');
const cors = require('cors');


//-------------midelwares-----------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());