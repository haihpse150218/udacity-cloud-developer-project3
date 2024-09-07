import {Router, Request, Response} from 'express';
import {UserRouter} from './users/routes/user.router';

const router: Router = Router();

router.use('/users', UserRouter);

router.get('/', async (req: Request, res: Response) => {
  console.log('zo')
  res.send(`V0`);
});

export const IndexRouter: Router = router;
