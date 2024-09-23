# Earthquakes Map Project

## Table of Contents
1. [Overview](#overview)
2. [Project Details](#project-details)
   - [Background](#background)
   - [Goals](#goals)
   - [Methodology](#methodology)
   - [Visuals](#visuals)
3. [Conclusions](#conclusions)
4. [Future Work](#future-work)
5. [Collaborators](#collaborators)
6. References

## Overview

[INSERT GITHUB PAGES LINK HERE]

### What is this project about? 
This project is to help provide the United States Geological Survey (USGS) with a tool to visualizes earthquake data which is dynamic and interactive to help them better educate the public and other government organizations (also to help secure more funding) on this issue. 

## Project Details

### Goals
 - Use Leaflet to create a map which plots all earthquakes from dataset retreived from USGS
 - Add markers to reflect the magnitude of the earthquake by their size and depth of the earthquake by color
 - Include popups that provide additional information about the earthquake when its associated marker is clicked.
 - Create a legend to provide context for map data.

### Methodology
Detail the approach and methods used to achieve the project's goals.

In the "Methodology" section, you would typically describe the specific approaches, techniques, tools, and processes you used to accomplish the project's goals. Here are some examples of what you might include:

1. **Data Collection:**
   - Describe how you gathered the data for your project. This could involve web scraping, APIs, downloading datasets from public repositories, or collecting data manually.
   - **Example:** "Weather data was collected using the OpenWeatherMap API for the years 2018-2022, covering various cities across the globe."
   - Earthquake dataset was collected by geojson APi using D3 from USGS to display all earthquakes recorded the past 7 days.  The geopjason data is updated every 5 minutes.  

2. **Exploratory Data Analysis (EDA):**
   - Outline the steps you took to explore the data, including any visualizations, summary statistics, or correlation analyses.
   - **Example:** "EDA was performed using Leaflet and D3 in Javascript to visualize the distribution of earthquakes across different latitudes."

3. **Tools and Libraries:**
    - List any specific tools, libraries, or software that played a crucial role in your methodology.
    - **Example:** "The analysis was conducted in Python using Pandas for data manipulation, Matplotlib for plotting, and Scikit-learn for machine learning."
    - Javascript D3 was used to connect to geojson API to create this dynamic interactive visualization map. 
    - Leaflet was used to make this an interactive map including markers to reflect the magnitude of the earthquake by their size and the depth of the earthquake by color, earthquakes with higher magnitudes  appear larger, and earthquakes with greater depth  appear darker in color, the depth of the earth can be found as the third coordinate for each earthquake, includes popups that provide additional information about the earthquake when its associated marker is clicked, a legend that will provide context for the map data.


### Visuals

#### Figure 1: [Figure Title]
![Figure 1](path/to/figure1.png)

*This is an image of the earthquake map at a point in time. See the website for an updated map.*

#### Figure 2: [Figure Title]
![Figure 2](path/to/figure2.png)

*Brief description of Figure 2.*

#### Figure 3: [Figure Title]
![Figure 3](path/to/figure3.png)

*Brief description of Figure 3.*

#### Figure 4: [Figure Title]
![Figure 4](path/to/figure4.png)

*Brief description of Figure 4.*

#### Figure 5: [Figure Title]
![Figure 5](path/to/figure5.png)

*Brief description of Figure 5.*

## Conclusions

Summarize the key findings or results of the project.

## Future Work

Discuss any potential extensions, improvements, or follow-up projects that could build on the work done in this project.

## Collaborators

List the contributors to the project and briefly describe their contributions.

- **[Name 1]:** Role and contributions (e.g., "Data analysis, visualizations, and writing the overview section.")
- **[Name 2]:** Role and contributions (e.g., "Database management, methodology section, and figures creation.")
- **[Name 3]:** Role and contributions (e.g., "Literature review, conclusions section, and future work suggestions.")

## References
https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php