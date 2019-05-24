import { FETCH_DATA} from './types';
import axios from 'axios'

export const fetchData = () => dispatch =>{
    axios('http://api.jsonbin.io/b/5ac79b198daf792844bf3523')
    .then(res => dispatch({
        type:FETCH_DATA,
        data: res
    }))
}