import Koa from 'koa';
import path from 'path';
import views from 'koa-views';
import logger from 'koa-logger';
import convert from 'koa-convert';
import koaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import index from './routes/index';
import users from './routes/users';

const app = new Koa();
const router = new Router();

router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());

app.use(convert(logger()))
   .use(convert(bodyParser()))
   .use(convert(views(path.join(__dirname, 'views'), { ext: 'html', cache: true })))
   .use(convert(koaStatic(path.join(__dirname, 'public'), { hidden: true })))
   .use(router.routes())
   .use(router.allowedMethods())

app.listen(3000, () => console.log('Listening on port 3000.'));

export default app;
