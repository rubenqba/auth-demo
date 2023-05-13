import { PageRequest } from "@model/common";
import ApiService from "./api-service";
import { UserData } from "@model/users";
import { UserDataPage } from "@api/users";

export class JsonPlaceholderService extends ApiService {
  constructor() {
    super({ baseUrl: "https://jsonplaceholder.typicode.com" });
  }

  getUserPage(pageRequest: PageRequest): Promise<UserDataPage> {
    return this._http.get('/users')
    .then(res => {
      console.log(JSON.stringify(res.data, null, 2));
      return res.data;
    });
  }
  findUser(arg0: number): Promise<UserData> {
    return this._http.get(`/users/${arg0}`).then((res) => {
      console.log(JSON.stringify(res.data, null, 2));
      return res.data;
    });
  }
}
