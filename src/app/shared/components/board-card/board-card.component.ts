import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, skip, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardCardComponent implements OnInit {

  private _destroy$: Subject<void> = new Subject<void>();

  public likeToggle$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  @Input() id!: string;
  @Input() img!: string;
  @Input() title!: string;

  @Input() set isFavorite(value: boolean) {
    this.likeToggle$.next(value);
  };

  @Input() price!: number;
  @Input() location!: string;
  @Input() rate?: number;
  @Input() view: 'horizontal' | 'vertical' = 'vertical';
  @Input() type?: string;

  @Output() onToggleFavorite: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public ngOnInit() {
    this.likeToggle$.pipe(
      skip(1),
      takeUntil(this._destroy$),
      distinctUntilChanged(),
      debounceTime(400),
    ).subscribe((value) => {
      this.onToggleFavorite.emit(value);
    });
  }

  public changeFavoriteValue(isFavorite: boolean, event: any): void {
    event.stopPropagation();
    event.preventDefault();
    this.likeToggle$.next(isFavorite);
  }

  public ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
