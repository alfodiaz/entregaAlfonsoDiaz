// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
export var artists = [];

if(indexedDB !== undefined){

  // Open (or create) the database
  var open = indexedDB.open("ArtistDatabase", 1);
  // Create the schema
  open.onupgradeneeded = function() {
      var db = open.result;
      var store = db.createObjectStore("ArtistStore", {keyPath: "id"});
  };
  
  open.onsuccess = function() {
      // Start a new transaction
      var db = open.result;
      var tx = db.transaction("ArtistStore", "readwrite");
      var store = tx.objectStore("ArtistStore");
  
      // Add some data
      store.put({id: 1, name: "Mick Jagger"});
      store.put({id: 2, name: "Freddy Mercury"});
      store.put({id: 3, name: "Michael Jackson"});
      store.put({id: 4, name: "Whitney Houston"});
      store.put({id: 5, name: "John Lennon"});
      store.put({id: 6, name: "Ringo Star"});
      
  
      store.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
            artists.push(cursor.value.name);
          cursor.continue();
        }
        else {
        }
      };
  
      // Query the data
      var getMickJagger = store.get(1);
      //var getBob = index.get(["Smith", "Bob"]);
  
      getMickJagger.onsuccess = function() {
      };
  
    
      // Close the db when the transaction is done
      tx.oncomplete = function() {
          db.close();
      };
  
  }
}
export default indexedDB;