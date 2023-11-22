import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Produto} from "./model/produto/produto";
import {ProdutoService} from "./service/produto/produto.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-angular-v2';

  produtos: Produto[] = [];
  novoProdutos: Produto = { nome: "", preco: 0};

  constructor(private produtoService: ProdutoService) {}

  carregarProdutos() {
    this.produtoService.getAllProdutos().subscribe(
      (data) => {
        this.produtos = data;
      },
      (error) => {
        console.error("Erro ao carregar produtos", error);
      }
    );
  }

  adicionarProduto() {
    this.produtoService.addProduto(this.novoProdutos).subscribe(
      (data) => {
        this.novoProdutos = { nome: "", preco: 0};
        this.carregarProdutos();
      },
      (error) => {
        console.error("Erro ao adicionar produto:", error);
      }
    );
  }
}
