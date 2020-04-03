const app = require('./bin/www')
const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`)
})