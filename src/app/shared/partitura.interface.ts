import {IAuthor} from "./autor.interface"
import {IGenre}  from "./genero.interface";
import {IStored} from "./almacenamiento.interface";


export interface IScore{
    ///Obligatorios
    involucrados:IAuthor[],

    //Numero  legado del sistema Anterior
    its:number,
    //Nombre de la Obra
    obra:string,
    //Interfaz para reconocer el tipo de canción

    genero?:IGenre[],
    //Tipo Almacenamiento Fisico
    almacenamiento?:IStored[],
    //Instrumentos Usados
    instrumentOs:string[],
    ///OPTIONALES

    _id?:any;
    //TODO OP/K/V/HOB  =>¿Que significan?
    //Información Extra
    extraInfo?:string,

}