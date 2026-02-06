import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { ProjectDetails } from '../../../interfaces/project-details.interface';
import { LanguageService } from '../../../shared/services/language.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { SkillsProjectDetails } from '../../../interfaces/skills-project-details.interface';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { StickerCircleComponent } from '../../../shared/sticker-circle/sticker-circle.component';
import { ContactButtonComponent } from '../../../shared/contact-button/contact-button.component';
import { NavMenuService } from '../../../shared/services/nav-menu.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
      ContactButtonComponent,
      CommonModule,
      AnimateOnScrollDirective,
      StickerCircleComponent,
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
  private destroy$ = new Subject<void>();

  projectDetails$!: Observable<ProjectDetails>;
  skills$!: Observable<SkillsProjectDetails[]>;

  allProjectIds: string[] = [];
  currentProjectId: string = '';

  /**
   * Navigates to the project overview section on the landing page
   * and scrolls to the selected project anchor.
   * @param projectId Id of the project.
   */
  navigateToProjectOverview(projectId: string): void{
    this.router.navigate(['/'], { fragment: projectId }).then(() => {
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(projectId);
      }, 100);
    });
  }

  /**
   * Navigates to the next project based on the current project ID.
   * @param currentProjectId Current project id.
   */
  nextProject(currentProjectId: string) {
    const currentIndex = this.allProjectIds.indexOf(currentProjectId);
    const nextIndex = (currentIndex + 1) % this.allProjectIds.length;
    const nextProjectId = this.allProjectIds[nextIndex];
    this.router.navigate(['/projects', nextProjectId]);
  }

  /**
   * Loads all project IDs and subscribes to route changes
   * to load the corresponding project details.
   */
  ngOnInit(): void {
    this.getProjectIds();
    
    this.route.paramMap.pipe(
      takeUntil(this.destroy$)
    ).subscribe(params => {
      const id = params.get('id')!;
      this.currentProjectId = id;
      this.loadProjectDetails(id);
    });
  };

  /**
   * Loads project details and related skills from Firestore
   * for the given project ID.
   * @param id ID of the project to load
   */
  loadProjectDetails(id: string) {
    this.projectDetails$ = docData(
      doc(this.firestore, 'projectDetails', id)
    ) as Observable<ProjectDetails>;  
    
    this.skills$ = this.projectDetails$.pipe(
      map((projectDetails) => {
        return Object.values(projectDetails.skills);
      })
    );
  }
  
  /**
   * Get all ids of the projects and saved in allProjectIds
   */
  getProjectIds() {
    const projectsCollection = collection(this.firestore, 'projectDetails');
    collectionData(projectsCollection).subscribe((allProjects: any[]) => {
      this.allProjectIds = allProjects.map(project => project.id);
    });
  }

  /**
   * Angular lifecycle hook that is called when the component
   * is destroyed. Cleans up all active subscriptions.
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}