import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IBillboard } from '../../interfaces/billboard.interface';

import { ISegmentItem } from '../../shared/components/layout-switch/interfaces/segmant-item';
import { BILLBOARDS } from '../home/data/billboards.data';
import { IUserProfile } from './interfaces/user.interface';
import { USER } from './data/user.data';
import { PROFILE_BILLBOARDS_SEGMENTS } from './constants/profile-billboards-segments.constant';
import { LAYOUT_SEGMENT } from '../../constants/layout-segments.constant';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public user!: IUserProfile;
  public billboards: IBillboard[] = [...BILLBOARDS, ...BILLBOARDS];
  public readonly segments: ISegmentItem[] = [...PROFILE_BILLBOARDS_SEGMENTS];
  public readonly layoutSegments: ISegmentItem[] = [...LAYOUT_SEGMENT];
  public listView!: 'horizontal' | 'vertical';
  public segmentsValue!: {
    title: string,
    count: number
  };

  constructor(private _navController: NavController) { }

  public ngOnInit() {
    this.user = { ...USER };
    this.listView = this.layoutSegments[0].value as 'horizontal' | 'vertical';
    this.defineTitle(this.segments[0].value as 'active' | 'rentedOut' | 'archived');
  }

  public defineTitle(segment: 'active' | 'rentedOut' | 'archived'): void {
    if (!this.segmentsValue) {
      this.segmentsValue = {
        title: '',
        count: 0
      }
    }
    this.segmentsValue.title = this.segments.find(el => el.value === segment).text;
    this._defineSegmentCount(segment);
  }

  private _defineSegmentCount(segment: 'active' | 'rentedOut' | 'archived'): void {
    this.segmentsValue.count = {
      'active': this.user.activeBillboards,
      'rentedOut': this.user.rentOutBillboards,
      'archived': this.user.archivedBillboards
    }[segment];
  }

  public openEditProfile() {
    this._navController.navigateForward('profile/edit');
  }
}
