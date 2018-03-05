import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pokemon } from '../pokemon';
import { PokemonAbilityInfo } from '../pokemon';
import { PokemonStats } from '../pokemon';
import { PokemonService }  from '../pokemon.service';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/share';
import { ChangeDetectorRef } from '@angular/core';
import { isObject } from 'util';
import { isIdentifier } from '@angular/compiler';
import { isJsObject } from '@angular/core/src/change_detection/change_detection_util';


@Component({
  providers: [PokemonService],
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

 @Input() id: string;

 @Input() pokemon: Pokemon;
 
 @Input() name:string;
 
 @Input() abilities:PokemonAbilityInfo[];
 
 @Input() stats:PokemonStats[];
 
 @Input() evolution:any;
 
 fragment:any;

 result : any[];
 
 constructor(
  private cd: ChangeDetectorRef,
   private router: Router,
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location) { }

  ngOnInit():void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPokemon();
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }
  
  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }
  
getPokemon(): void {
    const id = this.route.snapshot.paramMap.get('id');    
    //let observable = this.pokemonService.getDetails(id);    
    this.pokemonService.getDetails(id).subscribe(res => {
      this.name = res.name;
      console.log(this.name);
      this.abilities = res.abilities;
      this.stats = res.stats;
      this.cd.detectChanges();
    });
    let observable2 = this.pokemonService.getEvolution(id);    
    observable2.subscribe(result => {
      this.evolution = result.chain;
      this.cd.detectChanges();
    }) ;
    
  }
 
  goBack(): void {
    this.location.back();
  }
  
  gotoHashtag(fragment: string):void {
    let url = '';
    console.log(this.router)
    let urlWithSegments = this.router.url.split('#');

    if(urlWithSegments.length){
      url = urlWithSegments[0];
    }
    window.location.hash = fragment;
   let element = document.querySelector("#" + fragment);
    if (element) element.scrollIntoView();
    }

}
