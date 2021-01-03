const express = require('express');

const app = express();

const PORT = 8000;

app.get('/', (rq, rs) => rs.send('Hello World'));

app.listen(PORT, () => console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`))
