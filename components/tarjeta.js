Vue.component('tarjeta',{
    template:
    `
    <div class="card card-hover border border-secondary rounded img-fluid position-absolute zoom" style=" height:314px; width:262px;  background-image: url('view.png'); max-height:314px;" >
                <div class="card-body" style="padding-top: -5px; z-index:2; position-absolute">
                    <div class="row t-info">
                    <div class="col-4"  >
                        <span class="fcircular" >
                        <img src="descarga.png" class="rounded-circle z-depth-2 shadow" height="55" width="55" alt="100x100" style="padding-bottom: 5px;">
                        </span>
                    </div>
                        <div class="col-8" padding-right="0">
                        
                        <div class="row"> 
                            <div class="col-3">3</h7></div>
                            <div class="col-9 d-flex justify-content-end" style="padding: top 25;">  
                                <div class="row" style="padding-top: 4px;">
                                    <i class="fas fa-star" style="color:gold"></i>
                                    <i class="fas fa-star" style="color:gold"></i>
                                    <i class="fas fa-star" style="color:gold"></i>
                                    <i class="fas fa-star" style="color:grey"></i>
                                    <i class="fas fa-star" style="color:grey"></i>
                                </div>  
                            </div>
                        </div>
                        <div class="row">
                           <h5 class="t-tarjeta" style="font-size: 15px; padding-left: 15px; padding-top:10px; ">C.S Tlajomulco</h5>
                        </div>
                        </div>
                    </div>
                    <div class="row">
                    <div class="col" style="max-height: 50px; padding-top:10px;">
                        <div class="tb-tarjeta rounded" style="background-color: #00d74e;">
                            <h5 class="ct-tarjeta" style="font-size: 10px; text-align:center; color:white;" >Disponible en urgencias </h5>
                            <h5 class="ct-tarjeta" style="font-size: 10px; text-align:center; color:white;" >Servicio 24 horas</h5>
                            <h5 class="ct-tarjeta" style="font-size: 10px; text-align:center; color:white;" >Equipamento completo</h5>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col" style="padding-top: 20px; text-align:center;">
                        <button class="btn btn-light shadow" style="font-size: 10px; display:inline-block;">REGISTRAR EMERGENCIA</button>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col">
                        <ul style="padding-left: 0; padding-top:10px;x">
                            <li style="list-style-type: none;"><a href="" style="color: black; text-decoration:none;">ESPECIALIDADES</a></li>
                            <li style="list-style-type: none;"><a href="" style="color: black; text-decoration:none;">SERVICIOS</a></li>
                            <li style="list-style-type: none;"><a href="" style="color: black; text-decoration:none;">PRECIOS</a></li>
                            <li style="list-style-type: none;"><a href="" style="color: black; text-decoration:none;">CONTACTO</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
    `,
    data(){
        return{

        }
    }
})