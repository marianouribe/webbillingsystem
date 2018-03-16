import 'whatwg-fetch';

class HttpService{
    getProducts = () => {
        //Asincrono
        //1 orden de ejecucion, promise para manejar peticiones asinctronas
        var promise = new Promise((resolve, reject) => {
            //2
            // fetch('http://localhost:3004/product')
            fetch('http://10.0.0.5:8080/apiwb/api/articulo')
            .then(response => {
                //4
                resolve(response.json()); 
                //console.log(response.json());
            })
        });

        //3
        return promise;
    }
}

export default HttpService;
