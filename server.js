const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api/example', (req, res) => {
    res.send({
        message: 'This message is from the demo endpoint'
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT:${PORT}`);
});
