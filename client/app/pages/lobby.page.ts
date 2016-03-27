import {Component} from "angular2/core"
import {GameModel} from "./../models/game.model"
import {PublicUserProfileModel} from "./../models/public.user.profile.model"
import {AuthorizationService} from "./../services/authorization.service"
import {GameLobbyService} from "./../services/game.lobby.service"
 
@Component({
    selector: 'lobby-page',
    providers: [AuthorizationService, GameLobbyService],
    template: `
        <div class="lobby">
            <div class="horizontal-button-wrapper">
                <button [disabled]="!selectedGame">Join Game</button>
                <button>Create Game</button>
                <button (click)="onLogout()">Logout</button>
            </div> 
            <div class="game-table-wrapper">
                <table>
                    <thead> 
                        <th>Game Name</th>
                        <th>Owner</th>
                        <th>Slots</th>
                    </thead>
                    <tbody>
                        <tr *ngFor="#row of gameList" (click)="selectRow(row)" [ngClass]="{selected: row==selectedGame}">
                            <td>{{row.gameName}}</td>
                            <td>{{row.owner.userName}}</td>
                            <td>1/4</td>
                        </tr>
                    </tbody>         
                </table>
            </div>
        </div>
    `
})
export /**
 * LobbyPage
 */
class LobbyPage {
    private gameList : Array<GameModel> = 
        [new GameModel("gameName1",
                   new PublicUserProfileModel("userName1", "urlPic")
                    ),
         new GameModel("gameName2",
                   new PublicUserProfileModel("userName2", "urlPic")
                 )];
        
    private selectedGame: GameModel;
    
    constructor(private _authService: AuthorizationService, private _gameLobbyService: GameLobbyService) {
        
    }
    
    public selectRow(row: GameModel){
        if(this.selectedGame == row)
            this.selectedGame=null;
        else
            this.selectedGame=row;
    }
   
   public onLogout() {
       this._authService.logout();
   }
}