export class Details{
    constructor(id){
        this.id = id;
        
        $('.loading').fadeIn();
        $('.games').addClass("d-none");
        $('.details').removeClass("d-none");
        $(this.getDetails(this.id)).ready(()=>{
            $('.loading').fadeOut(1000);
        });
        
    }

    async getDetails(id){
        const api = await `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        let gameDetails = await this.fechApi(api);
console.log(gameDetails);
        $('.details').html(`<div class="container">
        <header class="hstack justify-content-between">
           <h1 class="text-center h3 py-4">Details Game</h1>
           <button class="btn-close btn-close-white" id="btnClose"></button>
        </header>
        <div class="row g-4" id="detailsContent">
  <div class="col-md-4">
  <img src="${gameDetails.thumbnail}" class="w-100" alt="image details">
</div>
<div class="col-md-8">
  <h3>Title: ${gameDetails.title}</h3>
  <p>Category: <span class="badge text-bg-info"> ${gameDetails.genre}</span> </p>
  <p>Platform: <span class="badge text-bg-info"> ${gameDetails.platform}</span> </p>
  <p>Status: <span class="badge text-bg-info"> ${gameDetails.status}</span> </p>
  <p class="small">${gameDetails.description}</p>
  <a class="btn btn-outline-warning" target="_blank" href="${gameDetails.freetogame_profile_url}">Show Game</a>
</div>
  
  </div>
    </div>`);
    $('#btnClose').click(()=>{
        $('.games').removeClass("d-none");
        $('.details').addClass("d-none");
    });
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

