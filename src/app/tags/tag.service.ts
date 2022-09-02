import { Injectable } from '@angular/core';
import { Tag } from './tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private tags = [
    new Tag(
      1, 'Col Claudine', 'col-claudine'
    ),
    new Tag(
      2, 'Dos-nu', 'dos-nu'
    ),
    new Tag(
      3, 'Historique', 'historique'
    ),
    new Tag(
      4, 'Manches ballon', 'manches-ballon'
    ),
    new Tag(
      5, 'Steampunk', 'steampunk'
    ),
    new Tag(
      6, 'Encolure carrée', 'encolure-carree'
    )
  ];

  getTags() {
    return this.tags.slice();
  }

  getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  getRandomTags(start: number, length: number, random: boolean) {
    if(random) {
      start = this.getRandomIntInclusive(start, this.tags.length-length);
    }
    return this.tags.slice(start, start+length);
  }

  getTagById(tag_id: number) {
    // console.log('patron : ', this.patterns[pat_id]);
    return this.tags[tag_id];
  }

  getTagByLabel(tag_label: number) {
    // console.log('patron : ', this.patterns[pat_id]);
    return this.tags[tag_label];
  }

  getTagByShortUrl(tag_short_url: string) {
    console.log('tags', this.tags);
    const filteredTag:Tag[] = this.tags.filter(element => {
      element.tag_label.includes('Historique');
    });
    console.log('test : ', filteredTag);
    return filteredTag;

    // const selectedTag = 6;
    // this.filteredPatterns = this.patterns.filter((p: Pattern) => {
    //   p.pat_tags.includes(selectedTag);
    // });


    // return this.tags[tag_label];
  }
}
