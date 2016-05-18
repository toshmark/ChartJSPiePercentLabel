Chart.pluginService.register({    
    afterDraw: function(chartInstance, easing) { 		
		if( chartInstance.config.type == 'pie' ) {
			var defaultConfig = Chart.defaults.global;
			var data = chartInstance.getDatasetMeta(0).data;		
			var total = 0;
			chartInstance.config.data.datasets[0].data.forEach(function(d) {
				total += parseFloat(d);
			});
			
			data.forEach(function (d) {				
				var pos = d.tooltipPosition();				
				var percent = (chartInstance.config.data.datasets[d._datasetIndex].data[d._index] / total) * 100;
				
				var ctx = chartInstance.chart.canvas.getContext("2d");
				ctx.font = Chart.helpers.fontString(defaultConfig.defaultFontSize, defaultConfig.defaultFontStyle, defaultConfig.defaultFontFamily);				
				ctx.fillStyle = "white";
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(Math.round(percent) + '%', pos.x, pos.y);
			});
		}
			
	
	}   
});