
var url = 'http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd';
var url_microsoft = 'http://wams.edgesuite.net/media/MPTExpressionData02/BigBuckBunny_1080p24_IYUV_2ch.ism/manifest(format=mpd-time-csf)';

var player = dashjs.MediaPlayer().create();
player.initialize( document.querySelector( '#videoPlayer' ), url, true );

