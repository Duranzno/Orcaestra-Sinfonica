import { Action } from '@ngrx/store';
import { IScore, Origen, MediaTipo, CategoriaTipo, IScoreId } from '../../models';

export class ActionTypes {
  static SET_PARTITURA = '[MUSIC] Partitura Seleccionada';
  static SET_ID = '[MUSIC] Actualizada Partitura con su Id';
  static ADD_ORIGIN = '[MUSIC] Se agrego Origen';
  static SET_CATEGORIES = '[MUSIC] Saved categoria (Generos/Instruemntos)';
  static ADD_CATEGORY = '[MUSIC] Se guardo categoria a las existentes';
  static SET_FAVS = '[MUSIC] Se seleccionaron las partituras favoritas';
  // static SET_GRUPO = '[MUSIC] Saved Grupo';
}
export class SetPartitura implements Action {
  readonly type = ActionTypes.SET_PARTITURA;
  constructor(public payload: IScoreId) { }
}
export class SetId implements Action {
  readonly type = ActionTypes.SET_ID;
  constructor(public payload: string) { }
}
export class SetCategories implements Action {
  readonly type = ActionTypes.SET_CATEGORIES;
  constructor(public payload: { generos: string[], grupos: string[], instrumentos: string[] }) { }
}
export class SetFavorites implements Action {
  readonly type = ActionTypes.SET_FAVS;
  constructor(public payload: IScoreId[]) { }
}
export class AddOrigin implements Action {
  readonly type = ActionTypes.ADD_ORIGIN;
  constructor(public payload: { origin: Origen, type: MediaTipo }) { }
}
export class AddCategory implements Action {
  readonly type = ActionTypes.ADD_ORIGIN;
  constructor(public payload: { tipo: CategoriaTipo, categoria: string }) { }
}

export type Actions = SetPartitura | SetCategories | AddOrigin | AddCategory | SetFavorites | SetId;
