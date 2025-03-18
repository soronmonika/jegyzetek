//Viz halmazállapota eljárás
function VizHalmazallapota(homerseklet) {
    if (homerseklet < 0) {
        document.write(`A víz halmazállapota ${homerseklet}C°-on: szilárd (jég)<br>`);
    }
    else if (homerseklet > 100) {
        document.write(`A víz halmazállapota ${homerseklet}C°-on: légnemű (gőz)<br>`);
    }
    else {
        document.write(`A víz halmazállapota ${homerseklet}C°-on: folyékony (víz)<br>`);
    }
}

VizHalmazallapota(-20);
VizHalmazallapota(20);
VizHalmazallapota(200);