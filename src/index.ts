import express from 'express'

const app = express()

const port = 3001

app.get('/', (req, res) => {
  res.send('Hello, TypeScript + Node.js + Express!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
