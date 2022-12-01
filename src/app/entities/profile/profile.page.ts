import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { EBillboardStatus } from '../../enums/billboard-status.enum';
import { ISegmentItem } from '../../shared/components/layout-switch/interfaces/segmant-item';
import { IUserProfile } from './interfaces/user.interface';
import { selectBillboardsByStatus, selectUserInformation } from './state/profile.selectors';
import { PROFILE_BILLBOARDS_SEGMENTS } from './constants/profile-billboards-segments.constant';
import { USER } from './data/user.data';
import { LAYOUT_SEGMENT } from '../../constants/layout-segments.constant';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public viewModel$ = combineLatest([
    this._store.pipe(select(selectBillboardsByStatus(EBillboardStatus.Active))),
    this._store.pipe(select(selectBillboardsByStatus(EBillboardStatus.RentedOut))),
    this._store.pipe(select(selectBillboardsByStatus(EBillboardStatus.Archived))),
    this._store.pipe(select(selectUserInformation))
  ])
    .pipe(map(([active, rentedOut, archived, user]) => ({ active, rentedOut, archived, user })
    ));

  public user!: IUserProfile;
  public readonly segments: ISegmentItem[] = [...PROFILE_BILLBOARDS_SEGMENTS];
  public readonly layoutSegments: ISegmentItem[] = [...LAYOUT_SEGMENT];
  public listView!: 'horizontal' | 'vertical';
  public segmentsValue!: {
    title: string,
    value: string
  };

  constructor(private _navController: NavController, private _store: Store) { }

  public ngOnInit() {
    this.user = { ...USER };
    this.listView = this.layoutSegments[0].value as 'horizontal' | 'vertical';
    this.defineTitle(this.segments[0].value as 'active' | 'rentedOut' | 'archived');
  }

  public defineTitle(segment: 'active' | 'rentedOut' | 'archived'): void {
    if (!this.segmentsValue) {
      this.segmentsValue = {
        title: '',
        value: segment
      }
    }

    this.segmentsValue = {
      title: this.segments.find(el => el.value === segment).text,
      value: segment
    }
  }

  private _defineSegmentCount(segment: 'active' | 'rentedOut' | 'archived'): void {
    // this.segmentsValue.count = {
    //   'active': this.user.activeBillboards,
    //   'rentedOut': this.user.rentOutBillboards,
    //   'archived': this.user.archivedBillboards
    // }[segment];
  }

  public openEditProfile() {
    this._navController.navigateForward('profile/edit');
  }
}
