import { Component, OnInit } from '@angular/core';
import { PhrasesService } from '../../../shared/services/phrases.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Phrase } from '../../../shared/phrase';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {

  phrase!: Phrase;
  editValue!: string;
  editLanguage!: string;

  constructor(private phrasesService: PhrasesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public authService: AuthService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (data: Data) => {
        this.phrase = data['phrase'];
        this.editValue = this.phrase.value;
        this.editLanguage = this.phrase.language;
      },
      error: err => console.log(err)
    });
  }

  goToPhrasesList(): void {
    this.router.navigate(['../', {
      id: this.phrase.id
    }], {
      relativeTo: this.activatedRoute
    }).then()
  }

  isChanged(): boolean {
    return !(this.phrase.value === this.editValue && this.phrase.language === this.editLanguage);
  }

  save(): void {
    this.phrase.value = this.editValue;
    this.phrase.language = this.editLanguage;
  }
}
