import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./shared/components/product-list/product-list.component";


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, ProductListComponent], 
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product-list';
}
