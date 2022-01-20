const indexedDBMethods = {
  openTaskDatabase: () => {
    let db = null;
    let objectStore = null;
    let DBOpenReq = indexedDB.open("Tasks", 2);

    DBOpenReq.addEventListener("error", (error) => {
      console.warn(error);
    });
    DBOpenReq.addEventListener("success", (event) => {
      db = event.target.result;
    });
    DBOpenReq.addEventListener("upgradeneeded", (event) => {
      db = event.target.result;
      if (!db.objectStoreNames.contains("taskStore")) {
        objectStore = db.createObjectStore("taskStore", {
          keyPath: "id",
        });
      }
    });
  },
};

export default indexedDBMethods;
