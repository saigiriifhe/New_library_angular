
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
 import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';
 import { BackButton } from '../../shared/back-button/back-button';
 import { Feedback1 } from '../../models/feedback1.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BackButton
  ],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss'
})
export class Feedback{

  private platformId = inject(PLATFORM_ID);

  userFeedback: Feedback1 = {

  membershipCategory: '',
  name: '',
  enrollEmpId: '',
  departmentSchool: '',
  courseBatch: '',
  mobileNumber: '',
  email: '',
  libraryVisit: '',
  visitPurpose: '',
  satisfaction: '',
  suggestions: ''

};

  submitFeedback(form: NgForm) {

    // Prevent SSR execution
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const url =
      'https://docs.google.com/forms/d/e/1FAIpQLSdGLl7Aj9yoE-qIu-ZHbJq_eHQBviHrbgDLCN_7ZkKDoE8iYA/formResponse';

    const formData = new FormData();

    formData.append('entry.2052431593', this.userFeedback.membershipCategory);
    formData.append('entry.6350424', this.userFeedback.name);
    formData.append('entry.522703975', this.userFeedback.enrollEmpId.toString());
    formData.append('entry.288029031', this.userFeedback.departmentSchool);
    formData.append('entry.1153675783', this.userFeedback.courseBatch);
    formData.append('entry.82668673', this.userFeedback.mobileNumber.toString());
    formData.append('entry.563010020', this.userFeedback.email);
    formData.append('entry.1541527899', this.userFeedback.libraryVisit);
    formData.append('entry.119263117', this.userFeedback.visitPurpose);
    formData.append('entry.1952734763', this.userFeedback.satisfaction);
    formData.append('entry.1104367451', this.userFeedback.suggestions);

    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    })
    .then(() => {
      console.log(this.userFeedback);
      alert('Feedback Submitted Successfully.');
       // Reset the Angular form
  form.resetForm();
      
     this.userFeedback = {
 membershipCategory: '',
  name: '',
  enrollEmpId: '',
  departmentSchool: '',
  courseBatch: '',
  mobileNumber: '',
  email: '',
  libraryVisit: '',
  visitPurpose: '',
  satisfaction: '',
  suggestions: ''
};

    })
    .catch(error => {
      console.error('Submission Error:', error);
      alert('Unable to submit feedback.');
    });

  }

}