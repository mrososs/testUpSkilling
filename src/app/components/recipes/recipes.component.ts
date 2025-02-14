import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakfastService } from '../how-we-work/breakfast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule],
  providers: [BreakfastService],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {
  breakfastItems$!: Observable<any[]>; // Observable to store API data
  breakfastService = inject(BreakfastService); // Injecting the service
  router=inject(Router);

  ngOnInit(): void {
    this.breakfastItems$ = this.breakfastService.getBreakfastImage();
  }

  trackByIndex(index: number, item: any): number {
    return item.idMeal; // Unique identifier for each item
  }
  scrollToContact() {
    this.router.navigate(['/contactUs']).then(() => {
      setTimeout(() => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Slight delay to ensure navigation is complete
    });
  }
}
