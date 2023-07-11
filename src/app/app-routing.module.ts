import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";

//lista de rotas que serão usadas
const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: "full" },
    { 
        path: 'recipes', 
        loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
    },
    {
        path: 'shopping-list',
        loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    }
];

@NgModule({
    //chama as rotas que definimos
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}