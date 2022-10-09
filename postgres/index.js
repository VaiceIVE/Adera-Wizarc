const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const traitRouter = require('./routes/trait.routes');
const teamRouter = require('./routes/team.routes');
const financeRouter = require('./routes/finance.routes')
const eventRouter = require('./routes/event.routes')
const PORT = process.env.PORT || 8000




const app = express();


app.use(express.static('./public/images'));
app.use(cors());
app.use(express.json())



app.use('/api', financeRouter)
app.use('/api', userRouter)
app.use('/api', traitRouter)
app.use('/api', teamRouter)
app.use('/api', eventRouter)


app.listen(PORT, () => {console.log(`Listening ${PORT}`)});

