import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MainComponent } from "./components/main/main.component";
import { HowWeWorkComponent } from "./components/how-we-work/how-we-work.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainComponent, HowWeWorkComponent, AboutUsComponent, RecipesComponent, TestimonialsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jsb_task';
}
