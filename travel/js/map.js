// Set themes
//am4core.useTheme(am4themes_animated);

// Create map instance
var map = am4core.create("mapdiv", am4maps.MapChart);

// Set map definition
map.geodata = am4geodata_worldHigh;

// Set projection
map.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = new am4maps.MapPolygonSeries();
polygonSeries.useGeodata = true;

map.series.push(polygonSeries);

polygonSeries.exclude = ["AQ"];

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#74B266");
polygonTemplate.togglable = true;

// Set events to apply "active" state to clicked polygons
var currentActive;
polygonTemplate.events.on("hit", function (event) {
	map.maxZoomLevel = 32;
	if (currentActive == event.target) {
		map.goHome();
		currentActive = null;
	} else {
		map.zoomToMapObject(event.target);
		currentActive = event.target;
	}
	map.maxZoomLevel = 1;
});

// Create hover state and set alternative fill color
var colorSet = new am4core.ColorSet();
var hoverState = polygonTemplate.states.create("hover");
hoverState.properties.fill = colorSet.getIndex(0);

map.deltaLongitude = -10;

// Disable zoom and pan
map.maxZoomLevel = 1;
map.seriesContainer.draggable = false;
map.seriesContainer.resizable = false;
map.seriesContainer.events.disableType("doublehit");
map.chartContainer.background.events.disableType("doublehit");