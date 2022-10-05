import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book = {
    title: 'Chainsaw Man vol 3',
    author: 'Tatsuki Fujimoto',
    genre: 'ação',
    numberPages: 120,
    value: 30.00,
    imgBook: '../../../../assets/books/csm.jpg'
  }

  constructor() { }

  ngOnInit(): void {
  }

  addBook(){
    alert('Livro adicionado com sucesso')
  }
  cancelBook(){
    alert('Livro cancelado com sucesso')
  }


}
