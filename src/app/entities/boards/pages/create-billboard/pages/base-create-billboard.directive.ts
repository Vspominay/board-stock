import { Directive, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Directive()
export abstract class BaseCreateBillboardDirective implements OnInit, OnDestroy {
  protected destroy$: Subject<void> = new Subject<void>();
  public createBillboardForm!: FormGroup;

  public ngOnInit(): void {
    this.initForm();
  }

  public onSubmit(): void {
    if (this.createBillboardForm.invalid) return;

    console.log(this.createBillboardForm);
  }

  protected abstract initForm(): void;

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}