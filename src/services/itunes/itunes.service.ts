import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class ItunesService {

    public apiURL = 'https://itunes.apple.com/search?term=';

    constructor(
        private _http:HttpService
    ){}

    async getTrack( title:string ):Promise<any>{
        
        const result = await this._http.get( this.apiURL+title.toLowerCase() ).toPromise()

        let songs = result.data.results.filter( function(song){
            return song.kind == 'song'
        })

        songs = songs.filter( function(song){
            return song.collectionName.toLowerCase().indexOf("exitos") === -1
        })

        return songs
    }
}
