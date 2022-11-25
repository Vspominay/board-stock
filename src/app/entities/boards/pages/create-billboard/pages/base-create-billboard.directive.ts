import { Directive, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

import { AppState } from '../../../../../reducers';
import { ROUTES } from '../constants/routes.constant';
import { createBillboard, nextStep } from '../state/create-billboard.actions';
import { selectCurrentStep } from '../state/create-billboard.selectors';

@Directive()
export abstract class BaseCreateBillboardDirective implements OnInit, OnDestroy {
  protected destroy$: Subject<void> = new Subject<void>();
  public createBillboardForm!: FormGroup;
  private stepIndex!: number;
  private readonly ROUTES = [...ROUTES];

  public ngOnInit(): void {
    this.initForm();

    this.store.pipe(
      select(selectCurrentStep),
      take(1)
    ).subscribe(step => this.stepIndex = step);
  }

  protected constructor(
    private navController: NavController,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {}

  public onSubmit(): void {
    if (this.createBillboardForm.invalid) return;
  }

  protected abstract initForm(): void;

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getStepPath(index: number) {
    return (ROUTES[index] || ROUTES[0]);
  }

  protected nextStep(): void {
    if (this.stepIndex !== ROUTES.length - 1) {
      this.navController.navigateForward(['../', this.getStepPath(this.stepIndex + 1)], { relativeTo: this.route });
      this.store.dispatch(nextStep());
    } else {
      this.store.dispatch(createBillboard());
    }
  }

}
