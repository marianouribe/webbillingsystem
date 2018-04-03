import 'whatwg-fetch';

class HttpService{
    getProducts = (_api_filtro) => {
        //Asincrono
        //1 orden de ejecucion, promise para manejar peticiones asinctronas
        let promise = new Promise((resolve, reject) => {
            //2 'http://10.0.0.5:8080/apiwb/api/articulo/1/1'
            // fetch('http://localhost:3004/product')
            fetch("http://10.0.0.4:3004/api/" + _api_filtro).then(
              response => {
                //4
                resolve(response.json());
                //console.log(response.json());
              }
            );
        });

        //3
        return promise;
    }
}

export default HttpService;
