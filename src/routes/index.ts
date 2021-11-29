import { Router } from 'express';
import PermissionController from '../controllers/PermissionController';
import ProductController from '../controllers/ProductController';
import RoleController from '../controllers/RoleController';
import RolePermissionController from '../controllers/RolePermissionController';
import UserAccessControlListController from '../controllers/UserAccessControlListController';
import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';
import ensuredAuthenticated from '../middlewares/ensuredAuthenticated';
import { hasPermission, hasRole } from '../middlewares/permissions';

const routes = Router();

routes.post('/users', new UserController().create);
routes.post('/login', new SessionController().handle);

routes.get('/products', new ProductController().list);
routes.post(
  '/products',
  ensuredAuthenticated(),
  hasPermission(['create_product', 'list_product']),
  new ProductController().create
);

routes.post(
  '/roles',
  ensuredAuthenticated(),
  hasRole(['admin']),
  new RoleController().create
);

routes.post(
  '/permissions',
  ensuredAuthenticated(),
  new PermissionController().create
);

routes.post(
  '/users/acl',
  ensuredAuthenticated(),
  new UserAccessControlListController().create
);

routes.post('/roles/:roleId', new RolePermissionController().create);

export default routes;
