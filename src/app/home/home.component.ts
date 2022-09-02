import { Component, OnInit } from '@angular/core';
import { TagService } from '../tags/tag.service';
import { Tag } from '../tags/tag.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  randomizedTags!: Tag[];

  constructor(private TagService: TagService) { }

  ngOnInit(): void {
    this.randomizedTags = this.TagService.getRandomTags(0, 2, true);
  }

}
