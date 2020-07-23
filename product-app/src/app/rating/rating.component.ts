import {
    Component,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    SimpleChanges,
} from '@angular/core'

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnChanges {
    constructor() {}

    starWidth: number

    @Input() rating: number

    ngOnChanges(): void {
        console.log(this.rating)
        this.starWidth = (75 / 5) * this.rating
    }

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

    onClickRating(): void {
        console.log('Click on rating')
        this.ratingClicked.emit(`Rating ${this.rating} was clicked`)
    }
}
