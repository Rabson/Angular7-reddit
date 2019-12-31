import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASEURL } from './url.config';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  /**
  *  @TODO : Retrive leatest posts.
  */  
  getPosts(): Observable<any> {
    return this.http.get(`${BASEURL}/.json`);
  }

  /**
   *  @TODO : Retrive trending posts.
   */
  getTrandingPosts(): Observable<any> {
    return this.http.get(`${BASEURL}/r/trending.json`);
  }
}
