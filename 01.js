const app = new Vue ({
    el: '#app',
    data: {
        message: 'Hola',
        frutas: [
            {nombre:'Pera', cantidad:10},
            {nombre:'Manzana', cantidad:5},
            {nombre:'Platano', cantidad:0},
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFruta (){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta='';
        }
    },
    //Función en tiempo real que suma los valores y los regresa
    //al llamado en html

    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})

const app2 = new Vue({
    el: '#app2',
    data:{
        fondo: 'bg-warning',
        color: false
    },
    methods:{

    }
})

const app3 = new Vue({
    el: '#app3',
    data: {
        mensaje: 'Hola Soy Luis',
        contador:0
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-success' : this.contador > 70,
                'bg-warning' : this.contador <69,
                'bg-danger'  : this.contador <40
            }
        }
    }
});
// Ciclo de vida de las instancias
const app4 = new Vue({
    el: '#app4',
    data: {
        saludo: 'Soy ciclo de vida de Vue'
    }, 
    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        //Al crear los métodos, observadores y eventos, pero aún no accede al DOM
        //Aún no se puede acceder a "el"
        console.log('created');
    },
    beforeMount(){
        //Se ejecuta antes de insertar el DOM
        console.log('beforeMount');
    },
    mounted(){
        //Se ejecuta al insertar el DOM
        console.log('mounted');
    },
    beforeUpdate(){
        // Al detectar un cambio
        console.log('beforeUpdate');
    },
    updated(){
        //Al realizar los cambios
        console.log('updated');
    },
    beforeDestroy(){
        //Antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed(){
        //Se destruye toda la instancia
        console.log('destroyed');
    },
    methods:{
        destruir(){
            this.$destroy();
        }
    }
    
});