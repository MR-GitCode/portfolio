import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, orderBy, query } from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { AboutContent } from '../interfaces/about-content.interface';
import { ContactContent } from '../interfaces/contact-content.interface';
import { FormContent } from '../interfaces/form-content.interface';
import { HeroContent } from '../interfaces/hero-content.interface';
import { LegalContent } from '../interfaces/legal-content.interface';
import { Testimonial, TestimonialsContent } from '../interfaces/testimonials.interface';
import { Skill, SkillContent } from '../interfaces/skill-content.interface';
import { Project, ProjectsOverviewContent } from '../interfaces/projects-overview-content.interface';
import { NavContent } from '../interfaces/nav-content.interface';


@Injectable({
  providedIn: 'root'
})
export class FirestoreContentService {
    private firestore = inject(Firestore);

    /**
    * Load documents from firestor as Signal
    */
    private getDocumentSignal<content>(collectionName: string, documentId: string) {
        return toSignal(
        docData(doc(this.firestore, collectionName, documentId)).pipe(
            map(data => data as content | undefined)
        ),
        { initialValue: undefined }
        );
    }

    /**
     * 
     * @param collectionPath 
     * @param orderByField 
     * @returns 
     */
    private getCollectionSignal<Content>(collectionPath: string, orderByField?: string) {
        const collectionRef = collection(this.firestore, collectionPath);
        const q = orderByField 
        ? query(collectionRef, orderBy(orderByField))
        : collectionRef;
        return toSignal(
            collectionData(q).pipe(map(data => data as Content[])),
            { initialValue: [] as Content[] }
        );
    }

    getHeroContent() {
        return this.getDocumentSignal<HeroContent>('siteContent', 'hero');
    }

    getNavContent() {
        return this.getDocumentSignal<NavContent>('siteContent', 'nav');
    }

    getAboutContent() {
        return this.getDocumentSignal<AboutContent>('siteContent', 'about');
    }

    getSkillContent() {
        return this.getDocumentSignal<SkillContent>('siteContent', 'skill');
    }

    getSkills() {
        return this.getCollectionSignal<Skill>('skills', 'order');
    }

    getProjectsContent() {
        return this.getDocumentSignal<ProjectsOverviewContent>('siteContent', 'projects');
    }

     getProjects() {
        return this.getCollectionSignal<Project>('projects', 'order');
    }

    getTestimonialsContent() {
        return this.getDocumentSignal<TestimonialsContent>('siteContent', 'testimonials');
    }

    getTestimonials() {
        return this.getCollectionSignal<Testimonial>('testimonials', 'order');
    }

    getContactContent() {
        return this.getDocumentSignal<ContactContent>('siteContent', 'contact');
    }

    getFormContent() {
        return this.getDocumentSignal<FormContent>('siteContent', 'form');
    }

    getLegalContent() {
        return this.getDocumentSignal<LegalContent>('siteContent', 'legal');
    }
}