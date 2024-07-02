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
  {
    url: "/api/getUserInfo",
    method: "get",
    response: () => {
      return resultSuccess({name:'尹双喜',age:'18',gender:'男'});
    },
  },
];
