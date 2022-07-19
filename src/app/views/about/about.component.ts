import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private titleService : Title) { 
    this.titleService.setTitle('About me - Michele Mallia')
  }
  
  ngOnInit(): void {
  }

}
