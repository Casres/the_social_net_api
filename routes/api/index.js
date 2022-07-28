// import all of the api routes to prefix their enpoint name and package them up

const router = require('express').Router();
const thoughtRoutes = require('./user-thoughts');
const userRoutes = require('./user-routes');

// add prefix of /thoughts to routes created in thought-routes.js
router.use('/thoughts', thoughtRoutes);

// add prefix of /users to routes created in user-routes.js
router.use('/users', userRoutes);


module.exports = router;