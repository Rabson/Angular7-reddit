import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASEURL } from './url.config';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  /**
   * @TODO : To retrive comment on specfic post.
   * @param paramLink : Comment link as param.
   */
  getCommet(paramLink): Observable<any> {
    return this.http.get(`${BASEURL}/${paramLink}/.json`);
  }
}
