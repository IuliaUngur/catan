import {Injectable} from "angular2/core"
import {ApplicationService} from "./application.service"
import {Router} from "angular2/router";
import {Response} from "angular2/http"
import {AuthorizedApplicationService} from "./authorized.application.service"
import {GameModel} from "./../models/game.model"

@Injectable()
export /**
 * GameLobbyService
 */
class GameLobbyService extends AuthorizedApplicationService {
    private _lobbyGames : Array<GameModel> = [];
    private static authToken:string = "";
    
    constructor(private _router: Router) {
        super("game-lobby");
        
        // this._updateLobbyGames();
    }
    
    public getLobbyGames(): Array<GameModel> {
        return this._lobbyGames;
    }
    
    private _updateLobbyGames() {
        this.get('', {}).subscribe(response => {console.log(response)})
    }
    
}