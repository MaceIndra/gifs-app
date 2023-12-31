import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  @ViewChild('txtTag')
  public tagButton!: ElementRef<HTMLButtonElement>;

  constructor(private gifsService: GifsService){}

    get tags():string[]{

      //console.log( this.gifsService.tagsHistory);
      return this.gifsService.tagsHistory;
    }

    searchTag(newTag:string){


      console.log(newTag);

      this.gifsService.searchTag(newTag);
      //this.tagInput.nativeElement.value = '';



    }

}
