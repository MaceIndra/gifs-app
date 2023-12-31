import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit{


  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif property is required');

    //console.log("Me han llamado")
  }

  @Input()
  public gif!: Gif;
}