import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'

})
export class CardListComponent {


  @Input()
  public gifs: Gif[]=[];

  constructor(gifsService: GifsService){


    this.gifs= gifsService.gifList;
  }


 }
