import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import route from './routes';
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static('./src/resources/public'));

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    })
);
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
    res.render('home');
});

route(app);

// app.get("/news", (req, res) => {
//   res.render("news");
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
