import {Title} from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';
import { faBriefcase, faGraduationCap, faLocationDot, faUserGraduate, faIndustry } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  faBriefcase = faBriefcase;
  faGraduationCap = faGraduationCap;
  faLocationDot = faLocationDot;
  faUserGraduate = faUserGraduate;
  faIndustry = faIndustry;
  
  constructor(private titleService : Title) { 
    this.titleService.setTitle('CV - Michele Mallia')
  }

  ngOnInit(): void {
    
  }

}
