import { v4 as uuidv4 } from 'uuid';
import Moment from 'moment';

export const idgen = () => {
    return uuidv4();
}

export const tStamp = () => {
    return Moment().format('YYYY-MM-DD HH:mm:ss');
}