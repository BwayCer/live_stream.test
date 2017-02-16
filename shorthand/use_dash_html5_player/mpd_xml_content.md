MPD 檔案內容
=======


## 頁籤


* [Dash-Industry-Forum/dash.js](#user-content-dash-industry-forumdashjs)
* [微軟](#微軟)



## Dash-Industry-Forum/dash.js


來源： [Dash-Industry-Forum/dash.js - GitHub](https://github.com/Dash-Industry-Forum/dash.js)<br />
文件： [http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd](http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd)


```
<?xml version="1.0" encoding="UTF-8"?>
<MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="urn:mpeg:dash:schema:mpd:2011"
    xmlns:scte35="http://www.scte.org/schemas/35/2014SCTE35.xsd"
    xsi:schemaLocation="urn:mpeg:dash:schema:mpd:2011 DASH-MPD.xsd"
    profiles="urn:mpeg:dash:profile:isoff-live:2011"
    type="static"
    minBufferTime="PT5.000S"
    maxSegmentDuration="PT2.005S"
    availabilityStartTime="2016-01-20T21:10:02Z"
    mediaPresentationDuration="PT193.680S">
    <Period id="period0">
        <AdaptationSet mimeType="video/mp4"
            segmentAlignment="true"
            startWithSAP="1"
            maxWidth="1920"
            maxHeight="1080"
            maxFrameRate="30000/1001"
            par="1:1">
            <SegmentTemplate timescale="90000"
                initialization="$RepresentationID$-Header.m4s"
                media="$RepresentationID$-270146-i-$Number$.m4s"
                startNumber="1"
                duration="179704"
                presentationTimeOffset="0"/>
            <Representation id="v1_257"
                bandwidth="1200000"
                codecs="avc1.4D401E"
                width="768"
                height="432"
                frameRate="30000/1001"
                sar="1:1"
                scanType="progressive"/>
            <Representation id="v2_257"
                bandwidth="1850000"
                codecs="avc1.4D401E"
                width="1024"
                height="576"
                frameRate="30000/1001"
                sar="1:1"
                scanType="progressive"/>
            <Representation id="v3_257"
                bandwidth="2850000"
                codecs="avc1.4D401E"
                width="1280"
                height="720"
                frameRate="30000/1001"
                sar="1:1"
                scanType="progressive"/>
            <Representation id="v4_257"
                bandwidth="200000"
                codecs="avc1.4D401E"
                width="320"
                height="180"
                frameRate="30000/1001"
                sar="1:1"
                scanType="progressive"/>
            <Representation id="v5_257"
                bandwidth="300000"
                codecs="avc1.4D401E"
                width="320"
                height="180"
                frameRate="30000/1001"
                sar="1:1"
                scanType="progressive"/>
            <Representation id="v6_257"
                bandwidth="4300000"
                codecs="avc1.4D401E"
                width="1280"
                height="720"
                frameRate="30000/1001"
                sar="1:1"
                scanType="progressive"/>
            <Representation id="v7_257"
                bandwidth="5300000"
                codecs="avc1.4D401E"
                width="1920"
                height="1080"
                frameRate="30000/1001"
                sar="1:1"
                scanType="progressive"/>
            <Representation id="v8_257"
                bandwidth="480000"
                codecs="avc1.4D401E"
                width="512"
                height="288"
                frameRate="30000/1001"
                sar="1:1"
                scanType="progressive"/>
            <Representation id="v9_257"
                bandwidth="750000"
                codecs="avc1.4D401E"
                width="640"
                height="360"
                frameRate="30000/1001"
                sar="1:1"
                scanType="progressive"/>
        </AdaptationSet>
        <AdaptationSet mimeType="audio/mp4"
            segmentAlignment="true"
            startWithSAP="1"
            lang="qaa">
            <SegmentTemplate timescale="90000"
                initialization="$RepresentationID$-Header.m4s"
                media="$RepresentationID$-270146-i-$Number$.m4s"
                startNumber="1"
                duration="179704"
                presentationTimeOffset="0"/>
            <Representation id="v4_258"
                bandwidth="130800" codecs="mp4a.40.2"
                audioSamplingRate="48000">
                <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/>
            </Representation>
        </AdaptationSet>
    </Period>
</MPD>
```



## 微軟


來源： [透過 DASH.js 將 MPEG-DASH 彈性資料流視訊嵌入到 HTML5 應用程式 | 微軟文件](https://docs.microsoft.com/zh-tw/azure/media-services/media-services-embed-mpeg-dash-in-html5)<br />
文件： [http://wams.edgesuite.net/.../manifest(format=mpd-time-csf)](http://wams.edgesuite.net/media/MPTExpressionData02/BigBuckBunny_1080p24_IYUV_2ch.ism/manifest(format=mpd-time-csf))


```
<?xml version="1.0" encoding="utf-8"?>
<MPD xmlns="urn:mpeg:dash:schema:mpd:2011"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    profiles="urn:mpeg:dash:profile:isoff-live:2011"
    type="static"
    mediaPresentationDuration="PT9M56.458S"
    minBufferTime="PT4S">
    <Period>
        <AdaptationSet id="1"
            group="1"
            profiles="ccff"
            bitstreamSwitching="true"
            segmentAlignment="true"
            contentType="video"
            mimeType="video/mp4"
            codecs="avc1.640028"
            maxWidth="1920"
            maxHeight="1080"
            startWithSAP="1">
            <SegmentTemplate
                timescale="10000000"
                media="QualityLevels($Bandwidth$)/Fragments(video=$Time$,format=mpd-time-csf)"
                initialization="QualityLevels($Bandwidth$)/Fragments(video=i,format=mpd-time-csf)">
                <SegmentTimeline>
                    <S d="30000000" r="197"/>
                    <S d="24166667"/>
                </SegmentTimeline>
            </SegmentTemplate>
            <Representation id="1_V_video_1"
                bandwidth="6000000"
                width="1920"
                height="1080"/>
            <Representation id="1_V_video_2" bandwidth="5027000" width="1600" height="900"/>
            <Representation id="1_V_video_3" bandwidth="2962000" width="1280" height="720"/>
            <Representation id="1_V_video_4" bandwidth="2056000" width="992" height="560"/>
            <Representation id="1_V_video_5" bandwidth="1427000" width="768" height="432"/>
            <Representation id="1_V_video_6" bandwidth="991000" width="592" height="332"/>
            <Representation id="1_V_video_7" bandwidth="688000" width="448" height="252"/>
            <Representation id="1_V_video_8" bandwidth="477000" width="368" height="208"/>
            <Representation id="1_V_video_9" bandwidth="331000" width="284" height="160"/>
            <Representation id="1_V_video_10" bandwidth="230000" width="224" height="128"/>
        </AdaptationSet>
        <AdaptationSet id="2" group="5" profiles="ccff" bitstreamSwitching="true" segmentAlignment="true" contentType="audio" mimeType="audio/mp4" codecs="mp4a.40.2">
            <SegmentTemplate timescale="10000000" media="QualityLevels($Bandwidth$)/Fragments(audio=$Time$,format=mpd-time-csf)" initialization="QualityLevels($Bandwidth$)/Fragments(audio=i,format=mpd-time-csf)">
                <SegmentTimeline>
                    <S d="30080000" r="1"/>
                    <S d="29866666"/>
                    <S d="30080000" r="1"/>
                    <S d="29866667"/>
                    <S d="30080000"/>
                    <S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="30080000"/><S d="29866667"/>
                    <S d="30080000" r="1"/><S d="29866666"/>
                    <S d="30080000" r="1"/><S d="29866667"/><S d="24533334"/>
                </SegmentTimeline>
            </SegmentTemplate>
            <Representation id="5_A_audio_1" bandwidth="160000" audioSamplingRate="48000"/>
        </AdaptationSet>
    </Period>
</MPD>
```

