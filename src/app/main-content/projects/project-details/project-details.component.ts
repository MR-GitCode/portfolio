import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { ProjectDetails } from '../../../interfaces/project-details.interface';
import { LanguageService } from '../../../services/language.service';
import { ContactButtonComponent } from '../../../shared/contact-button/contact-button.component';
import { CommonModule, NgFor } from '@angular/common';
import { SkillsProjectDetails } from '../../../interfaces/skills-project-details.interface';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    ContactButtonComponent,
    CommonModule,
    NgFor,
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {

  languageService = inject(LanguageService);
  private readonly firestore = inject(Firestore);
  private readonly route = inject(ActivatedRoute);

  projectDetails$!: Observable<ProjectDetails>;
  skills$!: Observable<SkillsProjectDetails[]>;

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

