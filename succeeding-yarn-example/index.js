import { fromLonLat } from 'ol/proj';
import Projection from 'ol/proj/Projection'
import { register } from 'ol/proj/proj4'
import proj4 from 'proj4';

let rdInfoStr = "EPSG:28992"
proj4.defs(rdInfoStr, '+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +towgs84=565.417,50.3319,465.552,-0.398957,0.343988,-1.8774,4.0725 +units=m +no_defs');
register(proj4);
const rdProjection = new Projection({
code: rdInfoStr,
});
let rd_coord_proj = proj4("EPSG:4326", rdInfoStr, [5.537109, 52.342052]);
let rd_coord_ol = fromLonLat([5.537109, 52.342052], rdProjection)
document.getElementById("map").innerHTML = `${document.title}:<ul><li style="color:green;">projected with proj4:${rd_coord_proj}</li><li style="color:green;">projected with  ol: ${rd_coord_ol}</li></ul>`
