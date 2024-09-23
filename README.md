# Earthquakes Map Project

## Table of Contents
1. [Overview](#overview)
2. [Project Details](#project-details)  
   - [Goals](#goals)  
   - [Methodology](#methodology)  
   - [Visuals](#visuals)
3. [Conclusions](#conclusions)
4. [Future Work](#future-work)
5. [References](#references)

## Overview

[INSERT GITHUB PAGES LINK HERE]

### What is this project about? 
This project provides the United States Geological Survey (USGS) with an interactive tool to visualize earthquake data dynamically. The map is designed to help educate the public and government organizations about earthquake patterns and their severity, as well as to support funding requests for earthquake preparedness initiatives.

## Project Details

### Goals
- Utilize **Leaflet** to create an interactive map that plots all earthquakes from a dataset retrieved from USGS.
- Implement markers that reflect the magnitude of earthquakes by size and the depth by color.
- Include popups that provide additional details about each earthquake when a marker is clicked.
- Create a legend to offer context for the visualized data.

### Methodology

#### Data Collection
- The earthquake data is retrieved from the USGS GeoJSON API, which provides up-to-date information on earthquakes recorded globally in the past 7 days. The dataset is updated every 5 minutes, ensuring that the map reflects the latest seismic activity.

#### Data Visualization
- **Leaflet** is used to plot earthquake data on a dynamic map. Markers on the map vary in size and color to represent different earthquake characteristics:
  - **Marker Size**: Indicates the magnitude of the earthquake (larger markers for higher magnitudes).
  - **Marker Color**: Reflects the depth of the earthquake, with deeper earthquakes shown in darker colors. The depth is derived from the third coordinate in the GeoJSON data.
- **D3.js** is integrated to fetch and process the GeoJSON data from the USGS API and dynamically update the map as new data becomes available.

#### Popups and Legend
- Each marker includes a popup that displays additional information about the earthquake, such as its location, magnitude, and depth, when clicked.
- A legend is provided to help users interpret the color and size of the markers on the map.

#### Tools and Libraries
- **JavaScript**: The core language for integrating these libraries and building the functionality.
- **Leaflet.js**: For interactive map creation and marker visualization.
- **D3.js**: For handling data retrieval and real-time updates from the USGS GeoJSON API.

### Visuals

#### Figure 1: Interactive Earthquake Map
![Earthquake Map](https://github.com/pixare7/leaflet-project/blob/main/images/fig1.png)

*This map shows a snapshot of earthquake activity at a particular point in time. The live version updates continuously with new data.*

## Conclusions

This project successfully demonstrates how real-time earthquake data can be visualized using modern web technologies like Leaflet and D3. By integrating live data from the USGS GeoJSON API, the interactive map provides an effective tool for visualizing earthquake activity in a clear and intuitive way. The use of marker size and color to represent magnitude and depth helps convey the severity and characteristics of each earthquake at a glance. This tool not only aids public awareness but can also be leveraged by government organizations for better planning and response strategies.

## Future Work

While the current map provides a solid foundation for visualizing earthquake data, there are several enhancements that could further improve the tool's functionality and usability:

1. **Additional Data Layers**: Incorporate other relevant geospatial data, such as fault lines, tectonic plate boundaries, or population density, to provide deeper insights into the impact of seismic events.

2. **Heatmap Layer**: Implement a heatmap overlay to better visualize earthquake density in specific regions, highlighting areas with frequent seismic activity.

3. **Historical Data Integration**: Add an option to visualize earthquake data over a longer period (e.g., past months or years) to analyze trends and patterns in seismic activity.
   
4. **Filtering and Search Capabilities**: Enable users to filter earthquakes by magnitude, depth, or location, and include a search bar to look up specific regions or timeframes.

## References

1. United States Geological Survey (USGS). "Earthquake Catalog GeoJSON Summary Feed." Available at: [https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).