import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { EXCEPTION_ROUTES } from './constants/exceptions-routes.constant';

import { ITab } from './interfaces/tab.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit, OnDestroy {

  private _destroy$: Subject<void> = new Subject<void>();
  public isShowTabs: boolean = false;

  @Input() tabs!: ITab[];

  constructor(private _router: Router) { }

  public ngOnInit(): void {
    this._router.events
        .pipe(
          takeUntil(this._destroy$),
          filter(event => event instanceof NavigationEnd),
          map(event => event as NavigationEnd)
        )
        .subscribe(ev => {
          const url = ev.url;
          this._setActiveTab(this.tabs, url);
          this._defineShowSettings(url);
        });

    this._defineShowSettings(this._router.url);
  }

  private _setActiveTab(tabs: ITab[], url: string): void {
    tabs.forEach(tab => {
      tab.isActive = url.includes(tab.route);
    });
  }

  private _defineShowSettings(url: string): void {
    console.log(EXCEPTION_ROUTES.find(route => new RegExp(route).test(url)))
    this.isShowTabs = !EXCEPTION_ROUTES.find(route => new RegExp(route).test(url));
  }

  public ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
