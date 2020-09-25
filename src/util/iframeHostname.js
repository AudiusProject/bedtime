export const iframeHostname = (n) => {
  var t, e, r, o = "";
  for ("//" === n.substr(0, 2) && (n = window.location.protocol + n), r = n.split("/"), t = 0, e = r.length; t < e && t < 3; t++) (o += r[t]), t < 2 && (o += "/");
  return o;
}
