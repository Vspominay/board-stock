import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AppState } from '../../../../../../reducers';
import { selectGallery } from '../../../../state/boards.selectors';

@Component({
  selector: 'app-billboard-gallery',
  templateUrl: './billboard-gallery.page.html',
  styleUrls: ['./billboard-gallery.page.scss'],
})
export class BillboardGalleryPage implements OnInit {

  public images$: Observable<string[]> = this._route.paramMap
                                             .pipe(
                                               map(paramMap => paramMap.get('id')),
                                               switchMap((id) => this._store.select(selectGallery(id)))
                                             );

  constructor(private _store: Store<AppState>, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

}
