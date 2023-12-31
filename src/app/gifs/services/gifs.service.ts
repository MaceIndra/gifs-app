import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchBoxComponent } from '../components/search-box/search-box.component';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { first } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagHistory: string[] = [];
  private apiKey:string = 'qw3eAsaF1xtpM4KkuFyIAT6wR5U81RbQ';
  private serviceUrl = 'http://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {

    this.loadLocalStorage();


   }

  get tagsHistory(){

    return [...this._tagHistory];
  }

  private organizeHistory(tag:string){

    tag= tag.toLowerCase();

    if(this.tagsHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter( (oldTag) => oldTag !== tag)
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this.tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }



  private saveLocalStorage():void{


    localStorage.setItem('history', JSON.stringify(this._tagHistory))
  }

  private loadLocalStorage():void{

    if(!localStorage.getItem('history'))return;

    this._tagHistory = JSON.parse(localStorage.getItem('history')!);

    if(this.tagsHistory.length===0)return;
    this.searchTag(this._tagHistory[0])
  }

  async searchTag(tag: string):Promise<void>{

    if(tag.length === 0)return;

    this.organizeHistory(tag);

    // fetch('http://api.giphy.com/v1/gifs/search?api_key=qw3eAsaF1xtpM4KkuFyIAT6wR5U81RbQ&q=valorant&limit=10')
    // .then( resp => resp.json())
    // .then(data => .log(data))

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('q', tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params}).subscribe(
    resp => {

      this.gifList = resp.data;
       console.log({gifs: this.gifList});

    }


    );
  }

}
