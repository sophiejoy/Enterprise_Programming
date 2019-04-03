import { Component, OnInit } from '@angular/core';
import { RepoSearchResults } from '../repo-search-results';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {


  private userResults: RepoSearchResults;
  private currentPage: number = 1;
  private repoResults: RepoSearchResults;

  constructor(private service: RepositoryService) { }

  ngOnInit() {
    this.service.getRepository(this.currentPage).subscribe((data: RepoSearchResults) => this.repoResults = data)
  }

  refreshResults() {
    this.service.getRepository(this.currentPage).subscribe((data: RepoSearchResults) => this.repoResults = data)
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.refreshResults();
  }

  previousPage() {
    this.currentPage--;
    this.refreshResults();
  }


}

