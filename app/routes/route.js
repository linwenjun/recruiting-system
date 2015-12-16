exports.setRoutes = function(app) {
  app.use('/', require('./routers/index'));
  app.use('/register', require('./routers/register'));
  app.use('/answer', require('./routers/answer'));
};