import { Component, OnChanges,Input} from '@angular/core';

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
    ngOnChanges():void{
       this.starWidth = this.rating * 86/5;     
    }
}