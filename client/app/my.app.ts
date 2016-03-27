import {Component} from 'angular2/core';
import {RouteConfig, Route, RouterLink, Router, RouterOutlet} from 'angular2/router'
import {LoginPage} from './pages/login.page'
import {RegisterPage} from './pages/register.page'
import {LobbyPage} from './pages/lobby.page'
import {GamePage} from './pages/game.page'

@RouteConfig([
    new Route({path: '/login-page', component: LoginPage, name: 'LoginPage', useAsDefault: true }),
    new Route({path: '/register-page', component: RegisterPage, name: 'RegisterPage' }),
    new Route({path: '/lobby-page', component: LobbyPage, name: 'LobbyPage'}),
    new Route({path:'/game-page', component: GamePage, name: 'GamePage'})
])
@Component({
    selector: 'my-app',
    directives: [RouterLink, RouterOutlet],
    template: `
    <router-outlet></router-outlet>
  `
})
export class MyApp { }
