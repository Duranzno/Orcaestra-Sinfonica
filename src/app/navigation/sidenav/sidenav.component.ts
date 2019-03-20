import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserMenu, AnonMenu, Menu } from './menu.elements';
import { AuthService } from '../../core/services/auth.service';
import { IUser, User } from '../../core/models/user.model';
import { OrcaState, From } from '../../core/store';
import { map, tap } from 'rxjs/operators';
import { mapMenuAdmin, mapMenuGenres } from './menu.mapper';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Input() iconOnly = false;
  @Output() closeSidenav = new EventEmitter<void>();
  @Input() public userSubs: Menu[] = [
    {
      'name': 'Navidad',
      'link': '#',
      'icon': 'input',
      'isUser': true,
      'chip': false,
      'open': false,
      'isAdmin': false,
    },
    {
      'name': 'LLaneras',
      'link': '#',
      'icon': 'input',
      'isUser': true,
      'chip': false,
      'open': false,
      'isAdmin': false,
    },
  ];
  private subscription = new Subscription();
  user$: Observable<IUser>;
  avatarSrc$: Observable<string>;
  public menus: Menu[];
  public $menus: Observable<Menu[]>;
  public anonMenu = AnonMenu;

  constructor(private authService: AuthService, private store: Store<OrcaState>) { }

  ngOnInit() {
    this.user$ = this.store.select(From.auth.getUser);
    this.$menus = this.user$.pipe(
      map(iUser => {
        const user = new User(iUser);
        const adminMenu = mapMenuAdmin(iUser);
        return mapMenuGenres(iUser, this.userSubs, adminMenu);
      })
    );
    this.subscription = this.$menus.subscribe(m => this.menus = m);
    this.avatarSrc$ = this.store.select(From.auth.getAvatar);
  }
  onClose() {
    this.closeSidenav.emit();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onLogout() {
    this.onClose();
    this.store.dispatch(new From.auth.SetUnauthenticated());
  }
}
