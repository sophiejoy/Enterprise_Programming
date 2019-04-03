import { SearchInfo } from "./search-info";
import { User } from "./user";
import { Repo } from "./repo";

export class UserSearchResults {
  info: SearchInfo;
  items: User[];
}

export class RepoSearchResults {
  info: SearchInfo;
  items: Repo[];
}
