const express = require('express');



require('./config/connect');
const cors = require('cors');
const app = express();
app.use(express.json());

const categorieApi = require('./routers/categorie');

const TaskApi = require('./routers/task')

app.use(cors());
app.use('/categorie', categorieApi);
app.use('/task', TaskApi);




app.listen(3000, () => {
    console.log('le programme est fonctionnel sur le port 3000 ')
})