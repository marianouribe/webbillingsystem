import NotificationService, {NOTIF_BUYLIST_CHANGED} from './notification-service';

let ns = new NotificationService();

let instance = null;
var buyList = [];

class DataService {
    constructor(){
        if(!instance){
            instance = this;
        }
        return instance;
    }

    itemOnBuyList = item => {
        // for (var x = 0; x < buyList.length; x++) {
        //     if (buyList[x].IdArticulo === item.IdArticulo) {
        //         //console.log(buyList[x].IdArticulo);
        //         return true;
        //     }            
        // }

        //vericar error cuando cambio de cantiadad de productos
        try {
            for (let x of buyList) {
                if (x.CodigoArticulo === item.CodigoArticulo) {
                  //console.log(buyList[x].IdArticulo);
                  return true;
                }
                
            }
        } catch (err) {
            
        }
            
        return false;
    }

    addBuyListItem = item => {
        buyList.push(item);
        ns.postNotification(NOTIF_BUYLIST_CHANGED, buyList);
        //console.log(item.PrecioUnitarioArticulo);

    }
    removeBuyListItem = (item, all) => {
        if (all == 1){
            // for (var x = 0; x < buyList.length; x++) {
                buyList.splice(0, buyList.length);
                ns.postNotification(NOTIF_BUYLIST_CHANGED,buyList);
            // }
            
        }else {
            for (var x = 0; x < buyList.length; x++){
                if (buyList[x].CodigoArticulo === item.CodigoArticulo){
                    buyList.splice(x,1);
                    ns.postNotification(NOTIF_BUYLIST_CHANGED, buyList);
                    break;
                }
            }
        }

        
    }

    // removeAllListItem = item => {
    //     form
    // }
}

export default DataService;