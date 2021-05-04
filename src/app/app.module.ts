import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IntegracaoSistemasComponent } from './integracao-sistemas/integracao-sistemas.component';
import { ProjectDailyComponent } from './integracao-sistemas/project-daily/project-daily.component';
import { ProjectReviewComponent } from './integracao-sistemas/project-review/project-review.component';
import { ProjectPlanningComponent } from './integracao-sistemas/project-planning/project-planning.component';
import { ProjectReabastecimentoLeanComponent } from './integracao-sistemas/project-reabastecimento-lean/project-reabastecimento-lean.component';
import { ProjectQualityTeamComponent } from './integracao-sistemas/project-quality-team/project-quality-team.component';
import { ProjectRetrospectivaComponent } from './integracao-sistemas/project-retrospectiva/project-retrospectiva.component';
import { ProjectInformativoDiarioComponent } from './integracao-sistemas/project-informativo-diario/project-informativo-diario.component';

@NgModule({
  declarations: [
    AppComponent,
    IntegracaoSistemasComponent,
    ProjectDailyComponent,
    ProjectReviewComponent,
    ProjectPlanningComponent,
    ProjectReabastecimentoLeanComponent,
    ProjectQualityTeamComponent,
    ProjectRetrospectivaComponent,
    ProjectInformativoDiarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
