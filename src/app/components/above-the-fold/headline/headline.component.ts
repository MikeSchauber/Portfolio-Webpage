import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss',
})
export class HeadlineComponent implements OnInit {
  name: string = 'Mike Schauber';
  letters: string[] = [];

  ngOnInit() {
    this.letters = this.name.split('');
  }
}
