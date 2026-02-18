// CAJA VECINA V3 — Funciones compartidas
const go = p => window.location.href = p;
const save = (k, v) => sessionStorage.setItem(k, JSON.stringify(v));
const load = k => { try { return JSON.parse(sessionStorage.getItem(k)); } catch { return null; } };
const clearAll = () => sessionStorage.clear();
const fmt = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const RATE = 0.0037; // 1 CLP = 0.0037 PEN
const clpToPen = clp => (clp * RATE).toFixed(2);
