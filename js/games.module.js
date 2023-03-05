import { Ui } from "./ui.module.js"
// let quiz =new Quiz(); 
export class Games{
    constructor(){
        this.getGames('MMORPG');
        $('.nav-item a').click( (e) => {
            $('.loading').fadeIn();
            $('.nav-item a').removeClass('active');
            let cat = e.target.getAttribute('data-category');
            e.target.classList.add('active');
            this.getGames(cat);
        });

    }
    async  getGames(cat){
        const api = await `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`;
        let games = await this.fechApi(api);
        let ui = new Ui(games);
    }

    async fechApi(api){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5f55547a1cmsh65eeb0681608390p140129jsnf8d4fbb28fc4',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let response = await fetch(api,options);
        let finalResult = await response.json();
        return finalResult;
    }

}
