import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class EmisoraService {

    constructor(
        private _http: HttpService
    ){}

    public emisoras = [
        {
            'name': 'RobertDj.net',
            'slug': 'robertdj',
            'slogan': 'Con lo que te gusta',
            'streaming': 'https://cast.gigalatino.com:8910',
            'logo': 'https://robertdj.net/assets/images/logo.png'
        },
        {
            'name': 'Tu106fm.com',
            'slug': 'tu106',
            'slogan': 'Más de tus éxitos',
            'streaming': 'https://cast.gigalatino.com:8910',
            'logo': 'https://robertdj.net/assets/images/logo.png'
        }
    ];

    getEmisora( slug:string ){

        let emisora = this.emisoras.filter( function( emisora ){
            return emisora.slug == slug;
        })
        
        return emisora;
    }

    async getNowPlaying( slug_emisora: string ):Promise<any>{

        let radio = this.emisoras.filter( function( emisora ){
            return emisora.slug == slug_emisora;
        })

        let stats = await this._http.get( radio[0].streaming+'/statistics?json=1' ).toPromise();

        //return 'Divino - Pobre corazón';

        return stats.data.streams[0].songtitle;
    }

    getEmisoraLogo( slug_emisora:string ){

        let radio = this.emisoras.filter( function( emisora ){
            return emisora.slug == slug_emisora;
        })

        return radio[0].logo;
    }
}
