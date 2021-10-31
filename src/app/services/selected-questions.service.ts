import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedQuestionsService {
  selectedQuestion = [0,0];
  constructor(
  ) { }
}
