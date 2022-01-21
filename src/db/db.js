import Dexie from "dexie";

export const db = new Dexie('TasksDB');
db.version(1).stores({
  tasks: '++id, date, complete',
});