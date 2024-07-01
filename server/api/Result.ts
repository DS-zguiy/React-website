enum ResultCode {
  Success = 1,
  Error = 0,
  Warning = 2,
}

// 定义数据类型
interface SuccessResult<T = any> {
  code: number;
  result: T; // 根据实际情况定义更具体的类型
  message: string;
  type: string;
}

interface ErrorResult {
  code: number;
  message: string;
  type: string;
}

interface WarningResult {
  code: number;
  message: string;
  type: string;
}

const createSuccessResult = <T>(
  result: T,
  message: string,
): SuccessResult<T> => {
  return {
    code: ResultCode.Success,
    result: result,
    message: message,
    type: 'success',
  };
};

const createErrorResult = (message: string): ErrorResult => {
  return {
    code: ResultCode.Warning,
    message: message,
    type: 'warning',
  };
};

const createWarningResult = (message: string): WarningResult => {
  return {
    code: ResultCode.Error,
    message: message,
    type: 'error',
  };
};

export {
  createSuccessResult as resultSuccess,
  createErrorResult as resultError,
  createWarningResult as resultWarning,
  SuccessResult,
  ErrorResult,
  WarningResult,
};
