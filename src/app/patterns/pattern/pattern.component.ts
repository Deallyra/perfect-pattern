import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { PatternService } from './pattern.service';

@Component({
    selector: 'app-pattern',
    templateUrl: './pattern.component.html',
    styleUrls: ['./pattern.component.scss']
})
export class patternComponent implements OnInit {
    pattern!: { pat_id: number; pat_name: string; pat_creator: string; pat_difficulty: number; pat_description: string; pat_images: string[]; };

    constructor(private PatternService: PatternService,
        private route: ActivatedRoute,
        private router: Router) {

         }

    ngOnInit(): void {
        const id = +this.route.snapshot.params['id'];
        // this.pattern = this.PatternService.getPattern(id);
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.pattern = this.PatternService.getPattern(+params['id']);
                }
            )
    }
}
