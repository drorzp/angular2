import { Component, OnChanges,Input,Output,EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ai-star',
    templateUrl: 'star.component.html',
    styleUrls:['star.component.css']
})
export class StarComponent implements OnChanges {
    constructor() { }
    starWidth:number
    @Input() rating:number;
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void{
       this.starWidth = this.rating * 86/5;     
    }
    onClick():void{
        this.ratingClicked.emit(` The rating ${this.rating} was clicked` );
    }
}