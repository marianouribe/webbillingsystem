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
            for (let x of buyList) {
                if (x.CodigoArticulo === item.CodigoArticulo) {
                  //console.log(buyList[x].IdArticulo);
                  return true;
                }
                
            }
        return false;
    }

    addBuyListItem = item => {
        buyList.push(item);
        ns.postNotification(NOTIF_BUYLIST_CHANGED, buyList);
        //console.log(item.PrecioUnitarioArticulo);

    }
    removeBuyListItem = item => {
        for (var x = 0; x < buyList.length; x++){
            if (buyList[x].CodigoArticulo === item.CodigoArticulo){
                buyList.splice(x,1);
                ns.postNotification(NOTIF_BUYLIST_CHANGED, buyList);
                break;
            }
        }
    }
}

export default DataService;