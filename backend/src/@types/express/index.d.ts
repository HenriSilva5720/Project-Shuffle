declare namespace Express {
  export interface Request {
    validatedBody: any;
    userId: string;
    restaurantId: string;
  }
}
