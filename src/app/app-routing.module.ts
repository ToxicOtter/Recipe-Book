import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";

//lista de rotas que serão usadas
const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: "full" }
];

@NgModule({
    //chama as rotas que definimos
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}