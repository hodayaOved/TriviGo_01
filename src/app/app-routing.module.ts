import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemCommentsComponent } from './components/system-comments/system-comments.component';
import { CategoryComponent } from './components/category/category.component';
import { GameOnlineComponent } from './components/game-online/game-online.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OpenGameComponent } from './components/open-game/open-game.component';
import { PlayerConnectComponent } from './components/player-connect/player-connect.component';
import { StartGameComponent } from './components/start-game/start-game.component';
import { SystemComments } from 'src/model/SystemComments';
import { NewGameComponent } from './components/new-game/new-game.component';
import { ChooseQuestionComponent } from './components/choose-question/choose-question.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { OuestionListComponent } from './components/ouestion-list/ouestion-list.component';

const routes: Routes = [ 
  {path: 'PlayerConnect',component: PlayerConnectComponent},
  {path: 'login',component: LoginComponent},
  {path: 'category',component: CategoryComponent},
  {path: 'StartGame/:id',component: StartGameComponent},
  {path: 'StartGame',component: StartGameComponent},
  {path: 'game-online',component:GameOnlineComponent},
  {path: 'openGame',component:OpenGameComponent},
  {path: 'SystemComment',component:SystemCommentsComponent},
  {path: 'home',component: HomeComponent},
  
  { path: 'newGame', component: NewGameComponent },
  { path: 'choose-Question', component: ChooseQuestionComponent },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'Ouestion-List/:id/:category', component:  OuestionListComponent},
  {path: '**',component: HomeComponent}

 


  //{path: 'home',component: StartGameComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
