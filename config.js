module.exports = {
  dbUrl: process.env.DB_URL || 'mongodb+srv://devn8:lA12HnjJ6WLvpBD1@cluster0-tttcj.gcp.mongodb.net/test?retryWrites=true&w=majority',
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRoute: process.env.FILES_ROUTE || 'files',
  graphiqldev: process.env.NODE_ENV !== 'production'
}
