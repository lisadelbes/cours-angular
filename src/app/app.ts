import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Navigation } from './navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-project-angular');
}
