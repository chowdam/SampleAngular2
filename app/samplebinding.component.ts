import {Component} from '@angular/core'

@Component({
  selector: 'samplebindiing',
  template: `

//---------------------components-----------------------------------
    <h1>Hello Messages</h1>
    <messages></messages>
    <courses></courses>
    <authors></authors>
//----<samplebinding></samplebinding>------------

    //--------------------property binding----------------------------
    <h4> {{title}} </h4>
    <img src="{{ imageUrl }}" />
    <img [src]="imageUrl" />
    <img bind-src="imageUrl" />


    //-------------------------styles examples------------------------------
      <button type="submit" class="btn btn-primary"
      [class.active]="isActive"
      [style.backgroundColor]="isActive? 'blue': 'grey'"
      >Submit</button>

//-------------------------Event binding examples------------------------------
    <button (click)="onClick()">Check</button> &nbsp;

    <button on-click="onClick()">Check Mate</button>
    <br/>
    <div (click) = "onDivClick()">
      <button  (click)="onClickBtn($event)" >DivBtn </button>
    </div>
<br />
<input type="text" [value]="title" (input)="title = $event.target.value" />
Preview: {{title}}
   
  `
})


export class SampleBindingComponent{
  title = "Sample Angular Application";
  imageUrl = "http://lorempixel.com/400/200/";

   isActive=false;


   onDivClick(){
     console.log("Div Click fired");
   }
    onClick(){
    console.log("Clicked");
  }
  onClickBtn($event){
    $event.stopPropagation();
    console.log(" Div-Btn Clicked");
  }


}
