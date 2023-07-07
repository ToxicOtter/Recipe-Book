import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appPlaceholder]'
})
export class PlaceholderDirective{
    constructor(public viewContainerRef: ViewContainerRef){} //da acesso ao ponto no qual essa directive for adicionada
}