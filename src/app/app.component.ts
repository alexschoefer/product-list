import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet], // Ensure Header is a standalone component or part of a module
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product-list';
}
