import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PokemonEntry } from '../pokemon';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

 selected:string;

  @Input() pokemon: PokemonEntry = null;
  @Output() onShow = new EventEmitter<string>();
 
  
  constructor() { }

  ngOnInit() {

  }
  
   showSelected(item:string){
        this.selected = item;
        this.onShow.emit(item);
    }


}
