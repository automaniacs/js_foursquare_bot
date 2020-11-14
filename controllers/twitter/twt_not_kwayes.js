const twt = require('../../models/twitter.js');
const twitter_handle = 'notkwayes';
const api = new twt({ name: twitter_handle });

async function likeHashtag(options) {
	return api.likeHashtag(options);
}

async function updateHashtags() {
	return api.updateHashtags();
}

async function likeRandomHashtags(options) {
	return api.likeRandomHashtags(options);
}

async function getRateLimits(options) {
	return api.getRateLimits(options);
}

async function answer() {
	api.haaAnswer({ 'twitter_handle': twitter_handle });
}

module.exports.answer = answer;
module.exports.likeHashtag = likeHashtag;
module.exports.updateHashtags = updateHashtags;
module.exports.likeRandomHashtags = likeRandomHashtags;
module.exports.getRateLimits = getRateLimits;