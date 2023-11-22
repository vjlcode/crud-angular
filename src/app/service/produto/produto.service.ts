import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produto} from "../../model/produto/produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = "http://localhost:8080/produtos";

  constructor(private http: HttpClient) {}

  getAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  addProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }
 }
