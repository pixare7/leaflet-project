# Earthquakes Map Project

## Table of Contents
1. [Overview](#overview)
2. [Project Details](#project-details)  
   - [Goals](#goals)  
   - [Methodology](#methodology)  
     - [Data Collection](#data-collection)
     - [Data Visualization](#data-visualization)
     - [Tools and Libraries](#tools-and-libraries)
3. [Interactive Visualization](#interactive-visualization)
4. [Conclusions](#conclusions)
5. [Future Work](#future-work)
6. [References](#references)

## Overview

[https://pixare7.github.io/leaflet-project/](https://pixare7.github.io/leaflet-project/)

### What is this project about? 
This project provides the United States Geological Survey (USGS) with an interactive tool to visualize earthquake data dynamically. The map is designed to help educate the public and government organizations about earthquake patterns and their severity, as well as to support funding requests for earthquake preparedness initiatives.
Explore the  interactive [Earthquake Map](https://pixare7.github.io/leaflet-project/).

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
  - **Popups**: Each marker includes a popup that displays additional earthquake details, such as its location, magnitude, and depth, when clicked.
- **D3.js** fetches and processes the GeoJSON data from the USGS API, ensuring the map dynamically updates with the most recent seismic activity.
- **HTML** structures the webpage elements, including the map container, popups, and a **legend** that helps users interpret the color and size of the markers.
- **CSS** styles the layout, map container, legend, and customizes marker appearance, enhancing the user experience with clear and visually engaging design.

#### Tools and Libraries
- **JavaScript**: The core language that integrates Leaflet, D3.js, and handles interaction.
- **Leaflet.js**: For creating the interactive map and visualizing markers with varying characteristics.
- **D3.js**: For retrieving real-time GeoJSON data from the USGS API and updating the map with current earthquake activity.
- **HTML**: Provides the structure for the web page, including containers for the map and descriptive elements like popups and legends.
- **CSS**: Responsible for styling the web page layout, marker design, and the overall look of the map and legend to ensure a polished and user-friendly interface.

## Interactive Visualization

#### Figure 1: Interactive Earthquake Map
![Earthquake Map](https://github.com/pixare7/leaflet-project/blob/main/images/fig1.png)

*This map shows a snapshot of earthquake activity at a particular point in time. The live version updates continuously with new data.*

Explore the full interactive [Earthquake Map](https://pixare7.github.io/leaflet-project/) to dynamically visualize earthquake data, with real-time updates and additional features.

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