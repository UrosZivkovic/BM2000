import {Component, OnInit, Input} from '@angular/core';
import {AuthService} from "../auth.service";
import {PostsManagerService} from "../posts_manager_service/posts-manager.service";

@Component({
  selector: 'app-novost',
  templateUrl: './novost.component.html',
  styleUrls: ['./novost.component.css']
})
export class NovostComponent implements OnInit {

  @Input() _dataId;

  @Input() _naslov = "neki tamo naslov";
  @Input() _sadrzaj = "neki tamo sadrzaj";

  constructor(private _authService: AuthService,private _postsManager:PostsManagerService) {
  }

  ngOnInit() {
  }

}
