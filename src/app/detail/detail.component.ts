import { Component, OnInit } from '@angular/core';
import{ SONG } from '../../assets/data/songs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  mysongs = SONG;
  songName:string;
  artistName:string;
  yearReleased:string;
  genre:string;

  constructor() {
    
   }
    


  ngOnInit() {
  }
   
     displaySong(myNum:number):void{
        this.songName=this.mysongs[myNum].songName;
        this.artistName=this.mysongs[myNum].artistName;
        this.yearReleased=this.mysongs[myNum].yearReleased;
        this.genre=this.mysongs[myNum].genre;
     }


}
