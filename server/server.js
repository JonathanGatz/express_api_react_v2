const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.json({ users: ["user 1", "user 2", "user 3"]})
});

app.listen(5001, () => {
    console.log("server is live on 5000 .. .. hehe")
})