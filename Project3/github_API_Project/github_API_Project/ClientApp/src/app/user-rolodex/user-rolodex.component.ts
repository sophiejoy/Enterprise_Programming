import { Component, OnInit } from '@angular/core';
import { UserSearchResults } from '../user-search-results';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-rolodex',
  templateUrl: './user-rolodex.component.html',
  styleUrls: ['./user-rolodex.component.css']
})
export class UserRolodexComponent implements OnInit {

  private userResults: UserSearchResults;
  private currentPage: number = 1;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers(this.currentPage).subscribe((data: UserSearchResults) => this.userResults = data)
  }

  refreshResults() {
    this.service.getUsers(this.currentPage).subscribe((data: UserSearchResults) => this.userResults = data)
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
