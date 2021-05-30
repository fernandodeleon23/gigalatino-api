import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class LastfmService {

    public apiURL = 'https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=ee51ab6430deb826c169f0db8b04457a';

    constructor( private _http: HttpService ){}

    async getTrack( artist:string, title: string ):Promise<any>{

        let lastfm = await this._http.get( this.apiURL+'&artist='+artist+'&track='+title+'&format=json' ).toPromise();

        if( lastfm.data.error == 6 ){
            return false;
        }

        return lastfm.data.track.album.image[3]['#text'].replace(/\s/g, "");
    }
}
