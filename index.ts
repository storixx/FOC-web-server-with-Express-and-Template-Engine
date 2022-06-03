import express from 'express';
import path from 'path';
import serverRoutes from './routes/menu.js'
import {food} from './foodMenu'

const __dirname1 = path.resolve();
const app = express();

app.use(express.static(path.resolve(__dirname1,'static')))
app.use(serverRoutes)
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.set('views',path.resolve(__dirname1,'ejs'))

app.get('/', (req, res) => {
  res.render('pages/mainMenu',{
    cards:food
  })
})

app.get('/order', (req, res) => {
  res.render('pages/order')
})

app.get('/favourites', (req, res) => {
  res.render('pages/favourites',{cards:food})
})

app.listen(() => { });