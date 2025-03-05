import axios, { AxiosInstance } from "axios";

export class AxiosAdapter {
  reservationSpaces: AxiosInstance;
  constructor(baseUrl: string) {
    this.reservationSpaces = this.getAxiosInstance(baseUrl)
  }
  getAxiosInstance (server: string): AxiosInstance {
    console.log({token: localStorage.getItem("token")});
    const axiosHttp: AxiosInstance = axios.create({
      baseURL: server,
      headers: { "Content-Type": "application/json" },
    });
    return axiosHttp
  }
  async httpPost({ url, body }: { url: string; body?: unknown }) {
    try {
      const online = await this.isOnline()
      if(!online) throw "No hay conexión"
      this.reservationSpaces = this.setToken(localStorage.getItem("token") as string)
      const postResponse = await this.reservationSpaces.post(url, body);
      return await postResponse?.data;
    } catch (error) {
      console.error(error);
      throw error
    }
  }

  setToken (token: string = "") {
    this.reservationSpaces.defaults.headers.Authorization = `Bearer ${token}`
    return this.reservationSpaces;
  }

  async isOnline() {
    try {
      await fetch("https://www.google.com", { mode: "no-cors" });
      return true;
    } catch {
      return false;
    }
  }
}

const axiosAdapter = new AxiosAdapter(import.meta.env.VITE_API_URL)
export default axiosAdapter;