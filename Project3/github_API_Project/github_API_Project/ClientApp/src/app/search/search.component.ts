import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserSearchResults } from '../user-search-results';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchString: string;
  userSearchResults: User[];
  isUser: boolean;
  isRepo: boolean;
  loading: boolean = false;
  searchFailed: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  search() {
    this.loading = true;
    this.searchFailed = false;

    this.userService.searchForUsers(this.searchString)
      .subscribe(
      (data: UserSearchResults) => { this.userSearchResults = data.items; this.loading = false; },
        (error: any) => { console.log(error); this.searchFailed = true; this.loading = false; });
   }

}

