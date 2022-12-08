import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { combineLatest, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';
import { TranslateService } from "@ngx-translate/core";

import { IBillboard } from '../../interfaces/billboard.interface';
import { AppState } from '../../reducers';
import { SetSearchValue } from '../boards/state/boards.actions';
import { AVAILABLE_LOCATIONS } from './data/available-locations.data';
import { ModalSelectLocationComponent } from './components/modal-select-location/modal-select-location.component';
import { BILLBOARDS } from './data/billboards.data';
import { FILTERS } from './data/filters.data';
import { selectAgents, selectFeaturedBillboards, selectUser } from './state/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public readonly viewModel$ = combineLatest([
    this._store.select(selectUser),
    this._store.select(selectAgents),
    this._store.select(selectFeaturedBillboards)
  ])
    .pipe(map(([user, agents, featuredBillboards]) => ({ user, agents, featuredBillboards })));

  //TODO delete it after api integration
  public currentLocation!: { label: string, value: string };
  public userName: string = 'John';
  public billboards = [...BILLBOARDS];
  public featuredBillboards!: IBillboard[];
  public filters: string[] = [...FILTERS];
  public searchInput: FormControl = new FormControl('');

  constructor(
    private _modalCtrl: ModalController,
    private _changeDetectorRef: ChangeDetectorRef,
    private _store: Store<AppState>,
    private _navController: NavController,
    private _translateService: TranslateService
  ) { }

  private _destroy$: Subject<void> = new Subject<void>();

  public ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public ngOnInit() {
    //TODO will be deleted after api integration
    this.featuredBillboards = [...this.billboards, ...this.billboards].sort(() => +(Math.random() > 0.5));

    this.currentLocation = {
      label: AVAILABLE_LOCATIONS.labels[0],
      value: AVAILABLE_LOCATIONS.values[0]
    };

    this.searchInput.valueChanges
        .pipe(
          takeUntil(this._destroy$),
          debounceTime(400),
          distinctUntilChanged(),
          tap((value) => {
            this._store.dispatch(SetSearchValue({ searchString: value }));
            this._navController.navigateForward('/boards');
          })).subscribe();
  }

  public selectLocation() {
    this._modalCtrl.create({
      component: ModalSelectLocationComponent,
      breakpoints: [0.55],
      initialBreakpoint: 0.55,
      componentProps: {
        locations: AVAILABLE_LOCATIONS,
        currentLocation: this.currentLocation.value
      },
      cssClass: ['select-modal-container'],
      mode: 'md'
    })
        .then(modalEl => {
          modalEl.present();
          return modalEl.onDidDismiss();
        })
        .then(res => {
          if (res.role === 'confirm') {
            this.currentLocation = { ...res.data };
            this._translateService.use(this.currentLocation.value);
            this._changeDetectorRef.detectChanges();
          }
        });
  }
}
