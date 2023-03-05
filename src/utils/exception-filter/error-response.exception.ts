import { HttpException, HttpStatus } from '@nestjs/common';

export class ErrorException extends HttpException {
  constructor(
    statusCode: number,
    error: string,
    messages: string[] = [],
    httpStatus: HttpStatus = HttpStatus.NOT_FOUND,
    data?: Record<string, any>,
  ) {
    super(
      {
        statusCode,
        error,
        messages,
        data,
      },
      httpStatus,
    );
  }
}
