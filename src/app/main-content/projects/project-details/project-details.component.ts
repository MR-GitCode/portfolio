import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProjectDetails } from '../../../interfaces/project-details.interface';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {

  languageService = inject(LanguageService);
  private readonly firestore = inject(Firestore);
  private readonly route = inject(ActivatedRoute);

  projectDetails$!: Observable<ProjectDetails>;

  // ⬇️ DAS HIER kommt genau HIER rein
  ngOnInit(): void {
    // "id" kommt aus der URL /projects/:id  (z.B. /projects/el-pollo-loco)
    const id = this.route.snapshot.paramMap.get('id')!;

    this.projectDetails$ = docData(
      doc(this.firestore, 'projects', id)   // collection "projects", document = id
    ) as Observable<ProjectDetails>;
  }
}
