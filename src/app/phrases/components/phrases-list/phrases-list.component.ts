import { Component, OnInit } from '@angular/core';
import { Phrase } from '../../../shared/phrase';
import { PhrasesService } from '../../../shared/services/phrases.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: Phrase[];
  selectedID!: number;

  constructor(private phrasesService: PhrasesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: params => {
        this.selectedID = +params['id'];
        this.phrasesService.getAllPhrases().then(res => this.phrases = res);
      },
      error: err => console.log(err)
    });
  }

  onSelect(phrase: Phrase): void {
    this.router.navigate([phrase.id], {
      relativeTo: this.activatedRoute
    }).then();
  }

  isSelected(phrase: Phrase): boolean {
    return phrase.id === this.selectedID
  }
}
