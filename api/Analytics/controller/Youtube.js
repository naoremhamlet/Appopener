const ytch = require('yt-channel-info')

async function YtChannelInfo(req, res, next) {

   const {channel} = req.query;

   const payload = {
      channelId: channel,
      channelIdType: 0,
   }
   
   ytch.getChannelInfo(payload).then((response) => {
      if (!response.alertMessage) {
         res.send({ success: true, data: response})
      } else {
         res.send({success: false, msg: response.alertMessage});
      }
   }).catch((err) => {
            res.send({ success: false, msg: "something went wrong"});
   })
}

async function YtVideos(req, res, next) {
    const {channel} = req.query;

    const payload = {
        channelId: channel,
        sortBy: 'newest',
        channelIdType: 0
     }
     
     ytch.getChannelVideos(payload).then((response) => {
       if (!response.alertMessage) {
            res.send({success: true, data:response})
       } else {
            res.send({success: false, msg: response.alertMessage});
       }
     }).catch((err) => {
            res.send({ success: false, msg: "something went wrong"});
     })
}


module.exports = {YtChannelInfo, YtVideos};