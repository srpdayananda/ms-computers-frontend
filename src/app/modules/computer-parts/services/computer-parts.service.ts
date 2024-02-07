import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ShoppingItem } from '../../shopping-list/model/shopping-list';

@Injectable({
  providedIn: 'root'
})
export class ComputerPartsService {
  private API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = environment.apiUrl;
  }

  getShoppingItems(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/ShoppingItem`);
  }

  createShoppingItem(shoppingItem: ShoppingItem): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/ShoppingItem`, shoppingItem);
  }

  updateShoppingItem(shoppingItem: ShoppingItem): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/ShoppingItem`, shoppingItem);
  }

  deleteShoppingItem(shoppingItem: ShoppingItem): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/ShoppingItem/${shoppingItem.id}`);
  }
}
