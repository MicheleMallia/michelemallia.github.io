import {Title} from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';
import { faBriefcase, faGraduationCap, faLocationDot, faUserGraduate, faIndustry, faBook, faUsers, faNewspaper, faLink } from '@fortawesome/free-solid-svg-icons';

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
  faBook = faBook;
  faUsers = faUsers;
  faNewspaper = faNewspaper;
  faLink = faLink;
  
  constructor(private titleService : Title) { 
    this.titleService.setTitle('CV - Michele Mallia')
  }

  ngOnInit(): void {
    
  }

}
