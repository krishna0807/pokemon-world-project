import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonEntry } from '../pokemon';
 
@Component({
  selector: 'pokemon-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   pkmon: string;
   pokemons: PokemonEntry[];
 
  constructor(private pokemonService: PokemonService) { }
  
   ngOnInit() {
     this.getPokemons();
   }
     
   getPokemons(): void {
     this.pokemonService.getPokemons()
       .subscribe(result => this.pokemons = result.pokemons);
   }
   
   onShow(item:string){
        this.pkmon = item;
    }
 }