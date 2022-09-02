import { Component, OnInit } from '@angular/core';
import { Creator } from './creator.model';
import { CreatorService } from './creators.service';
import { Pattern } from '../patterns/pattern/pattern.model';
import { PatternService } from '../patterns/pattern/pattern.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  creators!: Creator[];
  patterns!: Pattern[];

  constructor( private CreatorService: CreatorService) { }

  ngOnInit(): void {
    this.creators = this.CreatorService.getCreators();
    // test = this.patterns.getPatternsFromCreator();
    console.log(JSON.stringify(this.creators));
  }

}
