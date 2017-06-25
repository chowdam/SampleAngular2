import {Component} from '@angular/core';

@Component({
selector: 'favorite',
template: `
<br/>
<i
style="length:20, width:20"
class='glyphicon'
[class.glyphicon-star-empty] = "!isFavorite"
[class.glyphicon-star] = "isFavorite"
(click)="onClick()" >
</i>

`
})

export class FavoriteComponent{
isFavorite = false;
onClick(){
    this.isFavorite = !this.isFavorite;
}
}
