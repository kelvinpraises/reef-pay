export function handleError(middleware: any, req: any, res: any, next: any) {
  middleware(req, res, (err: any) => {
    if (err) {
      console.error(err);
      return res.sendStatus(400); // Bad request
    }

    next();
  });
}
