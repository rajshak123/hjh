import isArray from 'lodash/isArray';
import isNil from 'lodash/isNil';

class Anwsers {
  constructor(data) {
    if (!isArray(data)) return [];

    const anwsers = {};
    data.forEach(item => {
      if (!isNil(item.id) && !isNil(item.answer)) {
        anwsers[item.id] = item.answer;
      }
    });

    return anwsers;
  }
}

export default Anwsers;
