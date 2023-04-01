# chartjs-plugin-sorting
Chartjs 4 sorting plugin to add buttons to sort datapoints from high to low, low to high and reset. 
By default Chart.js does not offer this options. This plugin is designed to help people quickly sort their bar chart datasets.

Currently, this will work only a single dataset.

Please visit the documentation on: https://www.chartjs3.com/chartjs-plugin-sorting<br>



## Getting Started
CDN
npm

Download

## Integration
HTML
Module

# Registration

To use this plugin you will need to register the plugin. 

```
// Register the plugin to all charts:
Chart.register(ChartjsPluginSorting);
```

# Buttons

All buttons used are build in HTML and have a fixed functionality. In total there are 3 buttons. 
- [ASC or Low to High Button](#low-to-high-button)
- [DESC or High to Low Button](#high-to-low-button)
- [Reset Button](#reset-button)

## Low to High Button

The ASC or Low to High button is basic button that is build in HTML. By pressing this button you will sort the datapoints based on ascending values. Because it is a HTML button you can quickly add design in css with a class name. 

## High to Low Button

The DESC or High to Low button is basic button that is build in HTML. By pressing this button you will sort the datapoints based on descending values. Because it is a HTML button you can quickly add design in css with a class name. 

## Reset Button

The Reset Button is basic button that is build in HTML. By pressing this button you will revert the datapoints back to it's original starting point as the initial load. Because it is a HTML button you can quickly add design in css with a class name. 
  
