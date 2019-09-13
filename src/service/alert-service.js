import {openAlert,closeAlert,hideAlert} from '../redux/actions';
import store from '../redux/store/index';

export default alert = (visibility,reason,message,type) => {
    store.dispatch(openAlert({visibility:visibility,reason:reason,message:message,type:type}));
    setTimeout(function(){
        store.dispatch(closeAlert(null));
        setTimeout(function(){
            store.dispatch(hideAlert(null));
            console.log("escondido");
        },1000);
    },2000);
}