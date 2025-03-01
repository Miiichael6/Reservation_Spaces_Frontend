import axios, { AxiosInstance } from "axios";

export default function useHttp() {
  const axiosInstance = () => {
    const axiosHttp: AxiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      //   adapter: axiosAdapter,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      },
    });
    return axiosHttp
  }

  async function httpPost({ url, body }: { url: string; body?: unknown }) {
    const api = axiosInstance();
    const postResponse = await api.post(url, body);
    return await postResponse?.data;
  }

  return { httpPost };
}
