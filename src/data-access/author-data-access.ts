import axios from "axios";
import { authorsUrl } from "../endpoints/author.endpoint";
import AuthorDto from "../models/authors/author.model";

export default class AuthorDataAccess {
  static create(authorDto: AuthorDto) {
    return axios.post(authorsUrl, authorDto);
  }

  static edit(id: string, authorDto: AuthorDto) {
    return axios.patch(`${authorsUrl}/${id}`, authorDto);
  }

  static delete(id: string) {
    return axios.delete(`${authorsUrl}/${id}`);
  }

  static findAll() {
    return axios.get(authorsUrl);
  }

  static findOne(id: string) {
    return axios.get(`${authorsUrl}/${id}`);
  }
}
