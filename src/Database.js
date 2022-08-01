
const DBURL = "https://uwin-homegoods-default-rtdb.firebaseio.com/";

function db_set (table, data) {
  return fetch(
    DBURL+table+".json",
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    }
  );
}

function db_get (table) {
  return fetch(DBURL+table+".json")
    .then(r => r.json());
}

export { db_set, db_get };
