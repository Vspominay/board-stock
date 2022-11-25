import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ROUTES } from './constants/routes.constant';
import { setStepIndex } from './state/create-billboard.actions';
import { selectCurrentStep } from './state/create-billboard.selectors';

@Component({
  selector: 'app-create-billboard',
  templateUrl: './create-billboard.page.html',
  styleUrls: ['./create-billboard.page.scss'],
})
export class CreateBillboardPage implements OnInit {

  public defaultHref: string = '/home';

  private _destroy$: Subject<void> = new Subject<void>();

  public ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  constructor(private store: Store, private router: Router, private navController: NavController) { }

  public ngOnInit() {
    this.store.dispatch(setStepIndex({ stepIndex: ROUTES.indexOf(this.router.url.slice(this.router.url.lastIndexOf('/') + 1)) }));

    this.store.pipe(
      takeUntil(this._destroy$),
      select(selectCurrentStep),
    ).subscribe(step => {
      this.defaultHref = this.getDefaultHref(step ? step - 1 : -1)
    });
  }

  public getDefaultHref(index: number): string {
    return index !== -1 ? `/boards/create/${ROUTES[index]}` : '/home';
  }
}
