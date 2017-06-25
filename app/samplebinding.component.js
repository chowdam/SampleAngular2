"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SampleBindingComponent = (function () {
    function SampleBindingComponent() {
        this.title = "Sample Angular Application";
        this.imageUrl = "http://lorempixel.com/400/200/";
        this.isActive = false;
    }
    SampleBindingComponent.prototype.onDivClick = function () {
        console.log("Div Click fired");
    };
    SampleBindingComponent.prototype.onClick = function () {
        console.log("Clicked");
    };
    SampleBindingComponent.prototype.onClickBtn = function ($event) {
        $event.stopPropagation();
        console.log(" Div-Btn Clicked");
    };
    return SampleBindingComponent;
}());
SampleBindingComponent = __decorate([
    core_1.Component({
        selector: 'samplebindiing',
        template: "\n\n//---------------------components-----------------------------------\n    <h1>Hello Messages</h1>\n    <messages></messages>\n    <courses></courses>\n    <authors></authors>\n//----<samplebinding></samplebinding>------------\n\n    //--------------------property binding----------------------------\n    <h4> {{title}} </h4>\n    <img src=\"{{ imageUrl }}\" />\n    <img [src]=\"imageUrl\" />\n    <img bind-src=\"imageUrl\" />\n\n\n    //-------------------------styles examples------------------------------\n      <button type=\"submit\" class=\"btn btn-primary\"\n      [class.active]=\"isActive\"\n      [style.backgroundColor]=\"isActive? 'blue': 'grey'\"\n      >Submit</button>\n\n//-------------------------Event binding examples------------------------------\n    <button (click)=\"onClick()\">Check</button> &nbsp;\n\n    <button on-click=\"onClick()\">Check Mate</button>\n    <br/>\n    <div (click) = \"onDivClick()\">\n      <button  (click)=\"onClickBtn($event)\" >DivBtn </button>\n    </div>\n<br />\n<input type=\"text\" [value]=\"title\" (input)=\"title = $event.target.value\" />\nPreview: {{title}}\n   \n  "
    })
], SampleBindingComponent);
exports.SampleBindingComponent = SampleBindingComponent;
//# sourceMappingURL=samplebinding.component.js.map