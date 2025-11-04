
/* IndexedDB helper for JN Homeopathy Clinic Final */
const DB_NAME = 'JNHomeopathyClinicDB_final';
const DB_VERSION = 1;
let _db = null;
function openDB() {
  return new Promise((resolve, reject) => {
    if (_db) return resolve(_db);
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onerror = (e) => reject(e.target.error);
    req.onsuccess = (e) => { _db = e.target.result; resolve(_db); };
    req.onupgradeneeded = (e) => {
      _db = e.target.result;
      if (!_db.objectStoreNames.contains('patients')) {
        const store = _db.createObjectStore('patients', { keyPath: 'caseNo' });
        store.createIndex('name', 'name', { unique: false });
        store.createIndex('phone', 'phone', { unique: false });
        store.createIndex('date', 'date', { unique: false });
      }
    };
  });
}

function addOrUpdatePatient(patient) {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction('patients','readwrite');
    const store = tx.objectStore('patients');
    const req = store.put(patient);
    req.onsuccess = ()=> resolve(req.result);
    req.onerror = (e)=> reject(e.target.error);
  }));
}

function getAllPatients() {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction('patients','readonly');
    const store = tx.objectStore('patients');
    const req = store.getAll();
    req.onsuccess = ()=> resolve(req.result);
    req.onerror = (e)=> reject(e.target.error);
  }));
}

function getPatient(caseNo) {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction('patients','readonly');
    const store = tx.objectStore('patients');
    const req = store.get(caseNo);
    req.onsuccess = ()=> resolve(req.result);
    req.onerror = (e)=> reject(e.target.error);
  }));
}

function deletePatient(caseNo) {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction('patients','readwrite');
    const store = tx.objectStore('patients');
    const req = store.delete(caseNo);
    req.onsuccess = ()=> resolve(true);
    req.onerror = (e)=> reject(e.target.error);
  }));
}
