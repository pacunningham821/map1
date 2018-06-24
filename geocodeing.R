library(ggmap)
#this code convers addresses to lat and lon
setwd("C:/Users/212067674/Desktop/WHERE_ITS_AT/Continued_Learning/D3/map/map1")
A = read.csv("locations.csv", stringsAsFactors = FALSE)

for (i in 1:nrow(A)) {
  L = geocode(A$Address[i], output = "latlona", source = "google")
  A$Lat[i] = L$lat
  A$Lon[i] = L$lon
}

write.csv(A, "locationsLL.csv")
