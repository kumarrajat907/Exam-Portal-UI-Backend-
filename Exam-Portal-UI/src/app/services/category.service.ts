import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './url';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAllCategory() {
    return this.http.get(`${baseUrl}/category/getAll`);
  }

  public addCategory(category:any){
    return this.http.post(`${baseUrl}/category/add`,category);
  }
}
