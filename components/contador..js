Vue.component('contador',{
    template: 
    `
    <div>
        <h3>{{numero}}</h3>
        <button @click="number++>+</button>
    </div>
    `,
    data(){
        return {
            numero: 0
        }
    }
})