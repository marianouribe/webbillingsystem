import 'whatwg-fetch';

class HttpService{
    getProducts = () => {
        //Asincrono
        //1 orden de ejecucion, promise para manejar peticiones asinctronas
        var promise = new Promise((resolve, reject) => {
            //2
            fetch('http://localhost:3004/product')
            .then(response => {
                //4
                resolve(response.json());
            // console.log(response.json());
            })
        });

        //3
        return promise;
    }
}

export default HttpService;
