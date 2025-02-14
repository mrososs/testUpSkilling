import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakfastService {
  private apiUrl =
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast';
  private apiUrl2 = 'http://upskilling-egypt.com:3001/contact'; // ✅ API URL

  constructor(private http: HttpClient) {}
  sendContactForm(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl2, formData);
  }
  getBreakfastImage(): Observable<any[]> {
    return this.http.get<{ meals: any[] }>(this.apiUrl).pipe(
      map((response) => (response.meals ? response.meals.slice(0, 4) : [])) // ✅ Take only the first 4
    );
  }
}
