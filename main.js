"use strict";

function calc() {
  let TP = document.getElementById("txtTp").value;
  const TS = document.getElementById("txtTs").value;
  const N = document.getElementById("txtLot").value;
  const OMM = document.getElementById("txtOmm").value;

  const rate = {
    WeK4: 3372,
    WeK7: 2729,
    ChK4: 2934,
    ChK7: 2728,
    ShK4: 6306,
    ShK7: 5457,
  };
  const TCK4 = 1.089;
  const TCK7 = 1.075;
  const PRRA = 1.07;

  const K4Add = TCK4 * PRRA;
  const K7Add = TCK7 * PRRA;

  TP = TP / N;

  const K4Sh = TP * rate.ShK4;
  const K4Ch = TS * rate.ChK4;
  const K4We = TS * rate.WeK4;
  const K4NCWe = TS * rate.WeK4 * OMM;

  const K7Sh = TP * rate.ShK7;
  const K7Ch = TS * rate.ChK7;
  const K7We = TS * rate.WeK7;
  const K7NCWe = TS * rate.WeK7 * OMM;

  let K4kikai = K4Sh + K4Ch + K4We;
  let K4kikainc = K4Sh + K4Ch + K4NCWe;
  let K4hanyou = K4Sh + K4We;

  let K7kikai = K7Sh + K7Ch + K7We;
  let K7kikainc = K7Sh + K7Ch + K7NCWe;
  let K7hanyou = K7Sh + K7We;

  K4kikai = Math.round(K4kikai * K4Add);
  K4kikainc = Math.round(K4kikainc * K4Add);
  K4hanyou = Math.round(K4hanyou * K4Add);

  K7kikai = Math.round(K7kikai * K7Add);
  K7kikainc = Math.round(K7kikainc * K7Add);
  K7hanyou = Math.round(K7hanyou * K7Add);

  document.getElementById("K4ki").textContent = K4kikai;
  document.getElementById("K4nc").textContent = K4kikainc;
  document.getElementById("K4han").textContent = K4hanyou;

  document.getElementById("K7ki").textContent = K7kikai;
  document.getElementById("K7nc").textContent = K7kikainc;
  document.getElementById("K7han").textContent = K7hanyou;
}
