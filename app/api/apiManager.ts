export interface ResponseObject {
  data?: any
  status?: number
  token?: string
  refreshToken?: string
  errorCode?: number
  errorMessage?: string
}

const responseHandling = async (response: Response) => {
  const data = await response.json();
  const responseObject: ResponseObject = {
    data: data,
    status: response.status,
  };
  return responseObject;
};

const errorHandling = async (error: any) => {
  console.log(error);
  const errorObject: ResponseObject = {};
  errorObject.status = error.code;
  errorObject.errorCode = error.code;
  errorObject.errorMessage = error.response ? (await error.response.json()).message : 'Error';
  return errorObject;
};

class ApiService {
  async apiGet(path: string) {
    try {
      const response = await fetch(path);
      return responseHandling(response);
    } catch (error) {
      return errorHandling(error);
    }
  }
}

export default new ApiService();
