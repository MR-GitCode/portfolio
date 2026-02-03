import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { ProjectDetails } from '../../../interfaces/project-details.interface';
import { LanguageService } from '../../../services/language.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { SkillsProjectDetails } from '../../../interfaces/skills-project-details.interface';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { StickerCircleComponent } from '../../../shared/sticker-circle/sticker-circle.component';
import { ContactButtonComponent } from '../../../shared/contact-button/contact-button.component';
import { NavMenuService } from '../../../services/nav-menu.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
      ContactButtonComponent,
      CommonModule,
      AnimateOnScrollDirective,
      StickerCircleComponent,
      RouterLink,
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {
  languageService = inject(LanguageService);
  navMenuService = inject(NavMenuService);
  private readonly firestore = inject(Firestore);
  private readonly route = inject(ActivatedRoute);
  private router = inject(Router);
  private viewportScroller = inject(ViewportScroller);

  projectDetails$!: Observable<ProjectDetails>;
  skills$!: Observable<SkillsProjectDetails[]>;

  navigateToProjectOverview(id: string): void{
    this.router.navigate(['/'], { fragment: id }).then(() => {
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(id);
      }, 100);
    });
  }

  nextProject() {
    
  }

  ngOnInit(): void {
    // "id" kommt aus der URL /projects/:id  (z.B. /projects/el-pollo-loco)
    const id = this.route.snapshot.paramMap.get('id')!;

    this.projectDetails$ = docData(
      doc(this.firestore, 'projectDetails', id)
    ) as Observable<ProjectDetails>;  
    
    this.skills$ = this.projectDetails$.pipe(
      map((projectDetails) => {
        return Object.values(projectDetails.skills);
      })
    );
  };
}

