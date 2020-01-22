// Set themes
//am4core.useTheme(am4themes_animated);

// Create map instance
var map = am4core.create("mapdiv", am4maps.MapChart);

// Set map definition
map.geodata = am4geodata_worldHigh;

// Set projection
map.projection = new am4maps.projections.Miller();

var visitedCountries = 
[
	"AT",
	"BS",
	"BQ",
	"CA",
	"CW",
	"CZ",
	"DE",
	"DO",
	"ES",
	"FR",
	"GB",
	"IN",
	"IT",
	"MX",
	"NL",
	"NO",
	"SK",
	"JM",
	"JP", 
	"PL",
	"VA",
	"US",
];

// Create map polygon series
var visitedSeries = map.series.push(new am4maps.MapPolygonSeries());
visitedSeries.useGeodata = true;
visitedSeries.include = visitedCountries;
visitedSeries.exclude = ["AQ"];

var unvisitedSeries = map.series.push(new am4maps.MapPolygonSeries());
unvisitedSeries.useGeodata = true;
unvisitedSeries.exclude = visitedCountries + ["AQ"];

// Configure series
var visitedTemplate = visitedSeries.mapPolygons.template;
visitedTemplate.tooltipText = "{name}";
visitedTemplate.fill = am4core.color("#74B266");
visitedTemplate.togglable = true;

// Set events to apply "active" state to clicked polygons
var currentActive;
visitedTemplate.events.on("hit", function (event) {
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
var hoverState = visitedTemplate.states.create("hover");
hoverState.properties.fill = colorSet.getIndex(0);

map.deltaLongitude = -10;

// Disable zoom and pan
map.maxZoomLevel = 1;
map.seriesContainer.draggable = false;
map.seriesContainer.resizable = false;
map.seriesContainer.events.disableType("doublehit");
map.chartContainer.background.events.disableType("doublehit");