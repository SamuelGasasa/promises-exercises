/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((value) => {
        try {
          resolve(transformer(value));
        } catch (e) {
          reject(e);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise.then(
    (result) =>
      new Promise((resolve, reject) => {
        if (Number(result)) {
          resolve(result * result);
        } else !Number(result);
        reject(`Cannot convert '${result}' to a number!`);
      })
  );
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch((numberPromise)=>{
    if((numberPromise)) {
      return 0;
    }
    else{
      return numberPromise;
    }
  });
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise.then(success=>{
    throw success;
  },failure=>{
    return failure;
  });
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};
