import { z } from 'zod';

// req-validation with zod
// body --> object
// data --> object

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(['Autumn', 'Summer', 'Fall'], {
      required_error: 'Title is required',
    }),
    year: z.number({
      required_error: 'Year is required',
    }),
    code: z.enum(['01', '02', '03']),
    startMonth: z.enum(['January', 'February'], {
      required_error: 'Start Month is required',
    }),
    endMonth: z.enum(['January', 'February'], {
      required_error: 'End Month is required',
    }),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};

// await createUserZodSchema.parseAsync(req)
