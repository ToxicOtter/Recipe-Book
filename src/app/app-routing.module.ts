import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeResolver } from "./recipes/recipe-resolver.service";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";

//lista de rotas que serão usadas
const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: "full" },
    { 
        path: 'recipes', 
        component: RecipesComponent, 
        canActivate: [AuthGuard],
        children:[
            {path: '', component: RecipeStartComponent},
            {path: 'new', component: RecipeEditComponent},
            {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolver]},
            {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolver]}
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent},
    {path: 'auth', component: AuthComponent}
];

@NgModule({
    //chama as rotas que definimos
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}