//import { Chain } from "@angular/compiler";

export class PokemonDescription {
  description: string;
  version: string;


  constructor(description: string, version: string) {
    this.description = description;
    this.version = version;
  }
}

export class PokemonEntry {
  id: number;
  name: string;
  sprite: string;


  constructor(id: number, name: string, sprite: string) {
    this.id = id;
    this.name = name;
    this.sprite = sprite;
  }
}

export class PokemonAbility {
  url: string;
  name: string;

  constructor(url: string, name: string) {
        this.url = url;
        this.name = name;
    }
}

export class PokemonAbilityInfo {
  slot: number;
  abilities: PokemonAbility[];
  is_hidden: boolean;


  constructor(slot: number, is_hidden: boolean, abilities: PokemonAbility[]) {
    this.slot = slot;
    this.is_hidden = is_hidden;
    this.abilities = abilities;
  }

}

export class PokemonList {
  pokemons: PokemonEntry[];
  count: number;


  constructor(pokemons: PokemonEntry[], count: number) {
    this.pokemons = pokemons;
    this.count = count;
  }
}

export class PokemonStat {
  url: string;
  name: string;
  constructor(url: string, name: string) {
    this.url = url;
    this.name = name;
  }
}

export class PokemonStats {
  effort: number;
  base_stat: number;
  stat:PokemonStat[]


  constructor(effort: number, base_stat: number, stat:PokemonStat[]) {
    this.effort = effort;
    this.base_stat = base_stat;
    this.stat = stat;
  }
}


export class PokemonType {
  type: string;
  order: number;


  constructor(type: string, order: number) {
    this.type = type;
    this.order = order;
  }
}
    
export class Pokemon {
  id: number;
  name: string;
  baseInfo: PokemonEntry;
  abilityInfo: PokemonAbilityInfo;
  descriptions: PokemonDescription[];
  types: PokemonType[];
  stats: PokemonStats;


  constructor(baseInfo: PokemonEntry, abilityInfo: PokemonAbilityInfo, descriptions: PokemonDescription[], types: PokemonType[], stats: PokemonStats) {
    this.baseInfo = baseInfo;
    this.abilityInfo = abilityInfo;
    this.descriptions = descriptions;
    this.types = types;
    this.stats = stats;
  }
}



export class pokemonDetail {
    abilities : PokemonAbilityInfo[];
    stats : PokemonStats[];
    name : string;
    moves :  move[];

    constructor( abilities:PokemonAbilityInfo[], stats:PokemonStats[], name : string, moves:move[]){
      this.abilities=abilities;
      this.stats=stats;
      this.name=name;
      this.moves=moves;
    }
}

export class move {
  version_group_details : versionGroup[];
}

export class versionGroup{

  move_learn_method : PokemonStat;
  level_learned_at : number;
  version_group : PokemonStat;

  constructor(move_learn_method: PokemonStat, level_learned_at: number, version_group: PokemonStat ){
    this.level_learned_at=level_learned_at;
    this.move_learn_method=move_learn_method;
    this.version_group=version_group;
  }
}

export class evolutionDetails{
baby_trigger_item : string;
id : number;
chain : chainDetail;


}

export class chainDetail{
evolution_detail : evolution_details;
evolution_to: evolution_to;
constructor(evolution_detail: evolution_details,evolution_to:evolution_to){
  this.evolution_detail=evolution_detail;
  this.evolution_to=evolution_to;
}

}

export class evolution_details{
trigger : PokemonStat;
constructor(trigger: PokemonStat){
  this.trigger=trigger;
}
}

export class evolution_to{
evolution_detail: evolution_details;
evolution_to : evolution_to;
constructor(evolution_detail: evolution_details,evolution_to:evolution_to){
  this.evolution_detail=evolution_detail;
  this.evolution_to=evolution_to;
}
}
