var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 1000 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;


var canvas = d3.select(".SCATTER").append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom);

var context = canvas.getContext("2d");

var path = d3.geoPath()
  .context(context)
  .projection(d3.geoAlbersUsa())
    .scale(1285)
    .translate([canvas.width / 2, canvas.height / 2]);

context.lineWidth = 0.5;

shapefile.open("https://github.com/pacunningham821/map1/blob/master/cb_2017_36_county_within_ua_500k.shp", null);
