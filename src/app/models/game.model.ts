import {UserProfileModel} from "./user.profile.model"

export /**
 * GameModel
 */
class GameModel {
    constructor(
        public gameName : string, 
        public owner : UserProfileModel) {  
    }
}