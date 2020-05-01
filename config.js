module.exports = {
  port: process.env.port || 3000,
  dbUrl: process.env.DB_URL || 'mongodb+srv://cristian:3GgH-w6gDnHFeN6@cluster0-tttcj.gcp.mongodb.net/test?retryWrites=true&w=majority',
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRoute: process.env.FILES_ROUTE || 'files'
}
