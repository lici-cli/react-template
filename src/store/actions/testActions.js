import * as TYPES from '../action-types';
import api from '../../api';

const testAction = {
  taskDelete (payload) {
    return {
      type: TYPES.TEST,
      payload
    }
  }
}

export default testAction;