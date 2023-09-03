function DataResponse(data: any,status: number, message: string, error: boolean = false) {
  return {
    content_type: 'application/json',
    data,
    message,
    status,
    error: error
  };
}
export default DataResponse;