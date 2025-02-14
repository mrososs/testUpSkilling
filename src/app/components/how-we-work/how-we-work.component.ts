import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakfastService } from './breakfast.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-how-we-work',
  standalone: true,
  imports: [CommonModule,RouterModule],
  providers: [BreakfastService],
  templateUrl: './how-we-work.component.html',
  styleUrl: './how-we-work.component.scss',
})
export class HowWeWorkComponent implements OnInit {
  breakfastItems$!: Observable<any[]>; // Observable to store API data
  breakfastService = inject(BreakfastService); // Injecting the service
  router = inject(Router);
  loading = true;
  ngOnInit() {
    this.breakfastItems$ = this.breakfastService.getBreakfastImage();
    this.breakfastItems$.subscribe(() => {
      this.loading = false; // ✅ Stop loading once data is received
    });
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
  trackByIndex(index: number, item: any): number {
    return item.idMeal; // Unique identifier for each item
  }
}
