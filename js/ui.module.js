import { Details } from "./details.module.js"
export class Ui{
    constructor(games){
      this.games = games;
      this.row = document.getElementById('gameData');
      $(this.display()).ready(()=>{
         $('.loading').fadeOut(1000);
        });
        $('.card').click( (e) => {
            const gameId = $(e.target).parentsUntil(".col")[$(e.target).parentsUntil(".col").length-1].getAttribute('data-id');
            let details = new Details(gameId);
        });
        
    }
    display(){
        let cartona = ``;
        for(let i =0; i < this.games.length; i++){
            cartona += `<div class="col">
            <div data-id="${this.games[i].id}" class="card h-100 bg-transparent" role="button" >
               <div class="card-body">
                  <figure class="position-relative">
                     <img class="card-img-top object-fit-cover h-100" src="${this.games[i].thumbnail}">
                  
                  </figure>
      
                  <figcaption>
      
                     <div class="hstack justify-content-between">
                        <h3 class="h6 small">${this.games[i].title}</h3>
                        <span class="badge text-bg-primary p-2">Free</span>
                     </div>
                     
                     <p class="card-text small text-center opacity-50">
                     ${this.games[i].short_description}
                     </p>
      
                  </figcaption>
               </div>
      
               <footer class="card-footer small hstack justify-content-between">
      
                  <span class="badge badge-color">${this.games[i].genre}</span>
                  <span class="badge badge-color">${this.games[i].platform}</span>
      
               </footer>
            </div>
        </div>`;
        }
        this.row.innerHTML = cartona;
    }
}