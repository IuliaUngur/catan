import {PublicUserProfileModel} from "./public.user.profile.model"

export /**
 * GameModel
 */
class GameModel {
    constructor(
        public gameName : string, 
        public owner : PublicUserProfileModel) {  
    } 
}