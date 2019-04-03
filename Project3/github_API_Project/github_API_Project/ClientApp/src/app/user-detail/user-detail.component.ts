import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user';
import { Repo } from '../repo';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  private user: User;
  private repoResults: Repo[];

  constructor(private route: ActivatedRoute,
    private service: UserService) { }
 
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getUser(Number(params.get('id'))))
    ).subscribe((data: User) => {
      this.user = data

      
      this.service.searchForUserRepo(this.user.login)
        .subscribe((data: Repo[]) => {
          this.repoResults = data
        });
    });
  }
}

        

