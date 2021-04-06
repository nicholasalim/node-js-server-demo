const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`nicholas's test app initialized on port:${PORT}`)
);

app.get('/', (req,res) => {
    res.status(200).send("server running");
})

app.get('/emoji', (req, res) => {
    const emoji = ['🤓','🖥','💿','✏️','🐢','👀','🧠'];
    let rand = Math.floor(Math.random() * emoji.length);
    res.status(200).send({
        randomEmoji : emoji[rand]
    })
});

app.post('/echo/:id', (req, res) => {
    const { id } = req.params;
    const { message } = req.body;

    if (!message){
        res.status(418).send({
            message : 'yo where the body at?',
            expected : {
                "echo" : "the message i'm supposed to echo"
            }
        })
    }

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    res.send({
        echoId : `${id}`,
        echoMessage : `recived ${message} at ${date} ${time}`
    })
})