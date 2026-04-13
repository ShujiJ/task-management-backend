export const successResponse = (res: any, data: any, message = "Success") => {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (
  res: any,
  message = "Something went wrong",
  status = 500,
  error?: any,
) => {
  return res.status(status).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && { error }),
  });
};
