# leaflet-marker-color
>


## Description
Create Leaflet marker in any color and/or size with optional icon (font-awesome) or text

## Installation
### bower
`bower install https://github.com/FCOO/leaflet-marker-color.git --save`

## Demo
http://FCOO.github.io/leaflet-marker-color/demo/ 

## Usage
    var myColorMarker = L.colorMarker( LatLng, options );

### options

| Id | Type | Default | Description |
| :--: | :--: | :-----: | --- |
| `size` | string | `""` | The size of the marker. Value = `"XS"` or `"XSMALL"`, `"SM"` or `"SMALL"`, `"NORMAL"`, `"LG"` or `"LARGE"`, `"XL"` or `"XLARGE"` |
| `backgroundColor` | string | `"#2C7FC9"` | Color of the marker. Default = standard leaflet marker |
| `color` | string | `""` | Color of the icon or text. If not given the best contrast color of white and black are used |
| `iconClass` | string | `""` | The class-name for the icon. E.q. fontawesone `"fas fa-home"` |
| `text` | string | `""` | The text inside the marker  |


### Methods

        .setBackgroundColor( bgcolor );
        .setColor( color );
        .setIconClass( iconClass );
        .setText( text );

    


## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/leaflet-marker-color/LICENSE).

Copyright (c) 2018 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk
