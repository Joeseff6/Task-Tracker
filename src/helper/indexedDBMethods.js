const indexedDBMethods = {
  openTasksDB: () => {
    let db = null;
    let objectStore = null;
    let DBOpenReq = indexedDB.open("TasksDB", 1);

    DBOpenReq.addEventListener("error", (error) => console.warn(error));
    DBOpenReq.addEventListener("success", (event) => {
      db = event.target.result;
    });
    DBOpenReq.addEventListener("upgradeneeded", (event) => {
      db = event.target.result;
      if (!db.objectStoreNames.contains("taskStore")) {
        objectStore = db.createObjectStore("taskStore", {
          autoIncrement: true,
        });
      }
    });
  },

  addTaskToDB: (task, date, time) => {
    let db = null;
    let DBOpenReq = indexedDB.open("TasksDB", 1);
    DBOpenReq.addEventListener("success", (event) => {
      db = event.target.result;
      let transaction = db.transaction("taskStore", "readwrite");
      const store = transaction.objectStore("taskStore");
      store.add({ task, date, time });
    });
  },
};

export default indexedDBMethods;
