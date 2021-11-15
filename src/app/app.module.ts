import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { FormsModule } from "@angular/forms";
import { StartGameComponent } from './components/start-game/start-game.component';
import{ReactiveFormsModule} from '@angular/forms';
import { PlayerConnectComponent } from './components/player-connect/player-connect.component';
import { SystemCommentsComponent } from './components/system-comments/system-comments.component';
import { GameOnlineComponent } from './components/game-online/game-online.component';
import { OpenGameComponent } from './components/open-game/open-game.component';
import { AboutComponent } from './components/about/about.component';
import { QuizNameDialogComponent } from './components/quiz-name-dialog/quiz-name-dialog.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { CaterorisToChooseComponent } from './components/cateroris-to-choose/cateroris-to-choose.component';
import { OuestionComponent } from './components/ouestion/ouestion.component';
import { OuestionListComponent } from './components/ouestion-list/ouestion-list.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { ChooseQuestionComponent } from './components/choose-question/choose-question.component';
import { GameResultsComponent } from './components/game-results/game-results.component';
import { WinerComponent } from './components/winer/winer.component';
import { ChatOnlinComponent } from './chat-onlin/chat-onlin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CategoryComponent,
    StartGameComponent,
    PlayerConnectComponent,
    SystemCommentsComponent,
    GameOnlineComponent,
    OpenGameComponent,
    AboutComponent,
    AppComponent,
    NewGameComponent,
    CaterorisToChooseComponent,
    OuestionComponent,
    OuestionListComponent,
    AddQuestionComponent,
    ChooseQuestionComponent,
    QuizNameDialogComponent,
    GameResultsComponent,
    WinerComponent,
    ChatOnlinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
