import {Title} from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';
import { faBriefcase, faGraduationCap, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  faBriefcase = faBriefcase;
  faGraduationCap = faGraduationCap;
  faLocationDot = faLocationDot;
  
  constructor(private titleService : Title) { 
    this.titleService.setTitle('CV - Michele Mallia')
  }

  ngOnInit(): void {
    
  }

}
