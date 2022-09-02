import { Injectable } from '@angular/core';
import { Tag } from 'src/app/tags/tag.model';
import { Pattern } from './pattern.model';

@Injectable({
  providedIn: 'root'
})
export class PatternService {

  /*
  this.pat_id = pat_id;
  this.pat_name = pat_name;
  this.pat_creator = pat_creator;
  this.pat_difficulty = pat_difficulty;
  this.pat_description = pat_description;
  this.pat_images = pat_images;
  this.pat_mar_id = pat_mar_id;
  this.pat_cat_id = pat_cat_id;
  this.pat_tags = pat_tags;
  */


  private patterns = [
    new Pattern(
      0, 'Back is back', 'Vanessa Pouzet', 1, 'Deux découpes au choix pour sublimer le dos : soft ou sexy chocolat. La coupe près du corps et l\'encolure ras de cou vous assurent une tenue parfaite. Une tunique féminine à porter en soirée, au travail, à superposer, à oser avec un noeud, de la dentelle, en color block... Le dos peut-être boutonné ou cousu.',
      [
        '/0-vanessa-pouzet-back-is-back/back-is-back-du-34-au-46-verso.jpg',
        '/0-vanessa-pouzet-back-is-back/back-is-back-du-34-au-46-recto.jpg'
      ],
      1, 1,
      [
        2
      ]
    ),
    new Pattern(
      1, 'Wanted', 'Vanessa Pouzet', 1, 'Le tee-shirt wanted soulignera joliment tous les décolletés. Un basic qui ne passe pas inaperçu avec sa ligne délicate et féminine. Intemporel, vous pourrez le mixer avec toutes les pièces de votre dressing quelque soit la saison. Longueur de manches variable : courtes, rétro, 3/4 ou longues. Modèle réalisable avec une simple machine à coudre.',
      [

      ],
      1, 1,
      [
        6
      ]
    )
  ];

  getPatterns() {
    return this.patterns.slice();
  }

  getPattern(pat_id: number) {
    // console.log('patron : ', this.patterns[pat_id]);
    return this.patterns[pat_id];
  }

  getPatternsFromCreator(mar_id: number) {
    // console.log(this.patterns);
    // return this.patterns.pat_mar_id == "0";
    // return this.patterns.find("pat_mar_id" == mar_id);
    console.log(this.patterns);
  }

  getPatternsFromTag(tag_id: number) {
    // return this.patterns.filter()
  }

  /*
  public pat_id: int;
    public pat_name: string;
    public pat_description: string;
    public pat_images: Image[];
    public pat_mar_id: int;
    public pat_cat_id: int;
    */
}
