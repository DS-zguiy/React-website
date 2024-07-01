import { resultSuccess } from "../_util";

export default [
  {
    url: "/api/getData",
    timeout: 1000,
    method: "get",
    response: () => {
      return resultSuccess({data:"mock数据"});
    },
  },
];
