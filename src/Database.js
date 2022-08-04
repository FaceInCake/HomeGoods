
function post (url, data, callback) {
  fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
  .then(r => {
    r.text()
      .then(t => !t.startsWith("{") ? console.log(t) : callback(JSON.parse(t)));
    return r;
  })
  .catch(reason => {
    console.error("Login error occured: "+reason);
  });
}

function get (url, callback) {
  fetch(url, {
    method: 'GET'
  })
  .then(r => {
    r.text()
      .then(t => !t.startsWith("{") ? console.log(t) : callback(JSON.parse(t)));
    return r;
  })
  .catch(reason => {
    console.error("Login error occured: "+reason);
  });
}

function getWith (url, data, callback) {
  fetch(url, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
  .then(r => {
    r.text()
      .then(t => !t.startsWith("{") ? console.log(t) : callback(JSON.parse(t)));
    return r;
  })
  .catch(reason => {
    console.error("Login error occured: "+reason);
  });
}

export { post, get, getWith };
