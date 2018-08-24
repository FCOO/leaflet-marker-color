/****************************************************************************
	leaflet-marker-color.js,

	(c) 2017, FCOO

	https://github.com/FCOO/leaflet-marker-color
	https://github.com/FCOO

****************************************************************************/
(function (L/*, window/*, document, undefined*/) {
	"use strict";


    /*****************************************************
    L.ColorMarker
    *****************************************************/
    var defaultOptions = {

            draggable      : false,
            riseOnHover    : true,

            size           : 'NORMAL',
            backgroundColor: '#2C7FC9',
            color          : '',
            iconClass      : '',
            text           : ''

        };

    var normalIconHeight = 41, // = default leaflet marker height
        iconHeight = {
            'XLARGE': 2    * normalIconHeight,
            'LARGE' : 1.5  * normalIconHeight,
            'NORMAL':         normalIconHeight,
            'SMALL' : 0.75 * normalIconHeight,
            'XSMALL': 0.5  * normalIconHeight
        },
        sizeTranslate = {
            'XS': 'XSMALL',
            'SM': 'SMALL',
            'LG': 'LARGE',
            'XL': 'XLARGE'
        };

    L.ColorMarker = L.Marker.extend({
        initialize: function(latLng, options){
            options = $.extend({}, defaultOptions, options);

            var divIconOptions = {
                    className:  'leaflet-marker-color',
                    html     :  '<span class="background"></span>' +
                                '<span class="border"></span>' +
                                '<i class="icon" aria-hidden="true"></i>' +
                                '<div class="text" aria-hidden="true"></div>'
                },
                size = options.size || 'NORMAL';

            //Find size of icon
            size = size.toUpperCase();
            size = sizeTranslate[size] ? sizeTranslate[size] : (iconHeight[size] ? size : 'NORMAL');
            var height = iconHeight[size],
                width  = .75*height;

            options.height = height;
            options.size = size;

            divIconOptions.iconSize   = L.point( width,   height );
            divIconOptions.iconAnchor = L.point( width/2, height );
            options.icon = L.divIcon( divIconOptions );

            L.Marker.prototype.initialize.call(this, latLng, options);
        },


        onAdd: function(){
            L.Marker.prototype.onAdd.apply( this, arguments );
            this.$icon = $(this._icon);

            this.$icon.css('font-size', this.options.height+'px' );

            this.$background = this.$icon.find('span.background');
            this.$faIcon = this.$icon.find('i');
            this.$text = this.$icon.find('div.text');

            this.setBackgroundColor();

            if (this.options.iconClass)
                this.setIconClass();
            if (this.options.text)
                this.setText();

            return this;
        },


        setBackgroundColor: function(bgcolor){
            this.options.backgroundColor = bgcolor || this.options.backgroundColor;
            this.$background.css('color', this.options.backgroundColor );
            this.setColor();
            return this;
        },

        setColor: function( color ){
            this.options.color = color || this.options.color;
            color = this.options.color;

            //if no color is given => calc best contrast for white or black to use as icon-color
            if (!color){
                var bgColorRGBStr = window.getComputedStyle(this.$background[0]).color,
                    bgColorRGB = bgColorRGBStr.split("(")[1].split(")")[0].split(',');
                color = window.colorContrastRGB(parseInt(bgColorRGB[0]), parseInt(bgColorRGB[1]), parseInt(bgColorRGB[2]));
            }
            this.$faIcon.css('color', color );
            this.$text.css('color', color );
        },

        setIconClass: function(iconClass){
            this.options.iconClass = iconClass || this.options.iconClass;
            this.$faIcon.removeClass().addClass('icon '+ this.options.iconClass);
            this.$icon.addClass('contain-icon');
            return this;
        },

        setText: function(text){
            this.options.text = text || this.options.text;
            this.$text.html( this.options.text );
            this.$icon.removeClass('contain-icon');
            return this;
        }

    });

    L.colorMarker = function(latLng, options) {
        return new L.ColorMarker(latLng, options);
    };

}(L, this, document));



