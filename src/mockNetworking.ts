const RCTNetworking = {
  addListener: function (name, callback) {},
  removeListeners: function () {},
  sendRequest: function (options, cb) {},
  abortRequest: function (id) {},
};

let requestId = 0;

let receiving;
let complete;

RCTNetworking.addListener = function (status, cb) {
  if (status === 'didReceiveNetworkData') {
    receiving = cb;
  } else if (status === 'didCompleteNetworkResponse') {
    complete = cb;
  }
};

RCTNetworking.sendRequest = function (options, cb) {
  fetch(options.url, {
    method: options.method,
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: options.headers,
    body: options.method === 'POST' ? JSON.stringify(options.data) : undefined, // body data type must match "Content-Type" header
  }).then((data) => {
    console.log('------');
    console.log(requestId, data);
    receiving({ requestId, data });
    complete({ requestId, error: '', timeOutError: false });
  });
  cb(++requestId);
};

export { RCTNetworking };
