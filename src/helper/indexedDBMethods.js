const indexedDBMethods = {
  openTaskDatabase: () => {
    let db = null;
    let objectStore = null;
    let DBOpenReq = indexedDB.open("Tasks", 1);
  
  
    DBOpenReq.addEventListener("error", (error) => {
      console.warn(error);
    });
    DBOpenReq.addEventListener("success", (event) => {
      db = event.target.result;
      console.log("Successfully accessed database!", db);
    });
    DBOpenReq.addEventListener("upgradeneeded", (event) => {
      db = event.target.result;
      console.log("Upgrade needed", db);
    });
  },


}

export default indexedDBMethods;