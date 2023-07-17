import express from 'express';

import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { UsersRouter } from '../modules/users/users.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/users',
    route: UsersRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
