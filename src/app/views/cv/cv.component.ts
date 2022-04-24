import { Component, OnInit } from '@angular/core';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  faBriefcase = faBriefcase;
  faGraduationCap = faGraduationCap;
  
  constructor() { }

  ngOnInit(): void {
  }

}
