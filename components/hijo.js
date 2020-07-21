Vue.component('hijo',{

    template: //html
    `
    <div class='py-6 bg-success'>
    <h4>Componente hijo {{numero}}</h4>
    <h4>Nombre : {{nombre}}</h4>
    <button @click="numero++">+</button>
    </div> 
    
    `,
    props: ['numero'],
    data(){
        return{
            nombre: 'Ignacio'
        }
    },
    mounted(){
        this.$emit('nnombreHijo',this.nombre);
    }
})