import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/services/github-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image:any;
  bio: any;
  linkedin:any;
  github: any;
  name: any;

  constructor(private service: GithubApiService) { }

  ngOnInit(): void {
    this.getGitHubInfo();
  }

  getGitHubInfo() {
    this.service.getGitHubInfo().subscribe(
      (data: any) => {
        this.image = data.avatar_url;
        this.bio = data.bio;
        this.linkedin = data.blog;
        this.github = data.html_url;
        this.name = data.name;
      }
    );
  }
}
