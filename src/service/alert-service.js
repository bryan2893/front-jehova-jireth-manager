import {openAlert,closeAlert} from '../redux/actions';
import store from '../redux/store/index';

export default alert = (visibility,reason,message) => {
    store.dispatch(openAlert({visibility:visibility,reason:reason,message:message}));
    setTimeout(function(){
        store.dispatch(closeAlert(null));
    },4000);
}