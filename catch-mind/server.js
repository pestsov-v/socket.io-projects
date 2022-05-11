import {join} from 'path'
import express from 'express'

const PORT = 4001
const app = express()
app.set('view engine', 'pug')
app.set('views', join(__dirname, "src/views"))

app.get('/', (req, res) => {
    res.render('home')
})



const handleListening = () => console.log(`Server is running on http://localhost:${PORT}`)
app.listen(PORT, handleListening)