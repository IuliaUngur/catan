import {Component} from "angular2/core"
import {GameModel} from "./../models/game.model"
import {UserProfileModel} from "./../models/user.profile.model"

@Component({
    selector: 'lobby-page',
    template: `
        <div class="lobby">
            <div class="horizontal-button-wrapper">
                <button [disabled]="!selectedGame">Join Game</button>
                <button>Create Game</button>
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
                   new UserProfileModel("userName1", "urlPic")
                    ),
         new GameModel("gameName2",
                   new UserProfileModel("userName2", "urlPic")
                 )];
        
    private selectedGame: GameModel;
    constructor() {
        
    }
     public selectRow(row: GameModel){
         if(this.selectedGame == row)
            this.selectedGame=null;
         else
            this.selectedGame=row;
         
     }
}