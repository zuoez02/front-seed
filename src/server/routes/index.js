import express from 'express';
import jadeRouteRegister from './jadeRouteRegister';

const router = express.Router();

jadeRouteRegister(router);

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

/* GET hello message */
router.get('/hello', (req, res) => res.send('This is hello message from GET /hello'));

export default router;
