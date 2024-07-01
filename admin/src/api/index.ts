import {http} from "@/server";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(VITE_BASE_URL);


export async function uploadFile(data?: any) {
  return http.request({
    url: "/api/v1/cos/upload",
    method: "post",
    data,
    headers: { "Content-Type": "multipart/form-data" },
  });
}

/** 获取ip信息 */
export async function getUser() {
  return http.request({
    url: "/getUser",
    method: "get",
  });
}

export async function getData() {
  return http.request({
    url: "/getData",
    method: "get",
  });
}

export const getCategory = async () => {
  return http.request({
    url: "/category/queryCategoryAll",
    method: "get",
  });
};
