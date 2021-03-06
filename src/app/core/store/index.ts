import * as media from './media';
import * as auth from './auth';
import * as music from './music';
import * as ui from './ui';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { Store, StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { OrcaActions, OrcaState, OrcaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEffectsModules } from '../effects';
const optionalImports = [];


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(OrcaReducers,
      // {metaReducers}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
    AppEffectsModules,
  ],
  exports: [
  ],
  providers: [...OrcaActions],
})
export class CoreStoreModule { constructor() { } }
export { OrcaState, OrcaActions, OrcaReducers } from './reducers';
export const From = { media, auth, music, ui };

