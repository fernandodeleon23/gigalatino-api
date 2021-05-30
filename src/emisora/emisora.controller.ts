import { Controller, Get, Param } from '@nestjs/common';
import { LastfmService } from '../services/lastfm/lastfm.service';
import { ItunesService } from '../services/itunes/itunes.service';
import { EmisoraService } from '../services/emisora/emisora.service';

@Controller('emisora')
export class EmisoraController {

    public emisora:any = [
        {
            'name': '',
            'slug': '',
            'slogan': '',
            'type':'',
            'logo': ''
        }
    ]

    constructor(
        private _emisora: EmisoraService,
        private _lastfm: LastfmService,
        private _itunes: ItunesService
    ){}

    @Get(':emisora')
    async index( @Param() params): Promise<any>{

        let songtitle = await this._emisora.getNowPlaying( params.emisora );

        if( songtitle.includes(' - ') ){

            const iTunesImg = await this._itunes.getTrack( songtitle.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split('.').join("") );

            let currentTitle = songtitle.split(" - ");

            const lastFmImg = this._lastfm.getTrack( currentTitle[0], currentTitle[1] );

            if( iTunesImg.length > 0 ){

                this.emisora[0].songcover = iTunesImg[0].artworkUrl60.split('60x60bb').join("350x350bb");

            }/*else if( await lastFmImg != false ){

                this.emisora[0].songcover = lastFmImg;*/

            else{
                this.emisora[0].imageStatus = 'no-image';
            }

            this.emisora[0].artist = currentTitle[0];
            this.emisora[0].song = currentTitle[1];

            // Setear el tipo
            this.emisora[0].type = 'music'
            
        }else{
            
            // Si no es una cancion
            this.emisora[0].type = 'commercial/jingle'

        }

        // Obtener info de la emisora

        const emisoraInfo = this._emisora.getEmisora( params.emisora );

        this.emisora[0].name = emisoraInfo[0].name;
        this.emisora[0].slug = emisoraInfo[0].slug;
        this.emisora[0].slogan = emisoraInfo[0].slogan;
        this.emisora[0].logo = emisoraInfo[0].logo;

        return this.emisora;

        //return this._emisora.getEmisoraLogo( 'robertdj' );

        //return emisora[0].streaming;

        //return this._emisora.getEmisora( 'robertdj' );

        //const result = await this._itunes.getTrack( 'La Banda Gorda - Subido en el palo' );

    }
}
