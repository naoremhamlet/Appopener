const Analytics = require('express').Router();
const { InstagramInfo } = require('./controller/Instagram');
const { YtVideos, YtChannelInfo } = require('./controller/Youtube');



Analytics.get('/api/youtube/info', YtChannelInfo);
Analytics.get('/api/youtube/videos', YtVideos);
Analytics.get('/api/instagram/info', InstagramInfo);
// Analytics.get('/api/twitter/info', TwitterInfo);


exports.Analytics = Analytics;