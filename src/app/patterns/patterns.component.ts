import { Component, OnInit } from '@angular/core';
import { Pattern } from './pattern/pattern.model';
import { PatternService } from './pattern/pattern.service';
import { TagService } from '../tags/tag.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tag } from '../tags/tag.model';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.scss']
})
export class PatternsComponent implements OnInit {

  patterns!: Pattern[]; // ! = pour ignorer l'absence d'initialisation stricte de typescript > 2.7
  filteredPatterns!: Pattern[];

  constructor(private PatternService: PatternService, private tagService: TagService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    // const tag = +this.route.snapshot.params['label']; // le + avant pour transormer en string
    const tag:string = this.route.snapshot.params['label'];
    this.patterns = this.PatternService.getPatterns();
    const chosenTag = this.tagService.getTagByShortUrl(tag);

    // this.patterns.forEach(
    //   pattern => pattern.pat_tags.forEach(

    //   )
    // );
    // console.log(this.patterns);

    // const selectedTag = 6;
    // this.filteredPatterns = this.patterns.filter((p: Pattern) => {
    //   p.pat_tags.includes(selectedTag);
    // });

    // console.log(this.filteredPatterns);
  }

}
