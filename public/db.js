const request = indexedDB.open("budget", 1);


request.onupgradeneeded = (event) => {
  console.log("onupgradeneeded => executed");
  const db = event.target.result;
  const objectStore = db.createObjectStore("budget");
};


request.onsuccess = event => {
  console.log(request.result.name);
  const db = target.result;
  const objectStore = db.createObjectStore("budget");
};