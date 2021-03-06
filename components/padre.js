Vue.component('padre',{
    //Los eventos se reciben con @
    template: 
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente Padre: {{numeroPadre}}</h2>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        {{nombrePadre}}
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
    </div>
     `,
     data(){
         return{
             numeroPadre: 10,
             nombrePadre: 'Mario'
         }
     }
})

