const _ = require('lodash');
const axios = require('axios').default;
const querystring = require('querystring');


//  To get token
// 	Client ID:		3MHHDBBCI04AYIODGEHZLXQYUAYDBGBYMIJVIYVSHQBPQT0G
// 	Client secret:	0GNQNFIGS3YYKVVJTX4XSKV0IUHAMH15D2OHGIWEMVAOUTFW
// 	1. https://foursquare.com/oauth2/authenticate?client_id=3MHHDBBCI04AYIODGEHZLXQYUAYDBGBYMIJVIYVSHQBPQT0G&response_type=code&redirect_uri=http://www.6d.com.sa
// 	2. https://foursquare.com/oauth2/access_token?client_id=3MHHDBBCI04AYIODGEHZLXQYUAYDBGBYMIJVIYVSHQBPQT0G&client_secret=0GNQNFIGS3YYKVVJTX4XSKV0IUHAMH15D2OHGIWEMVAOUTFW&grant_type=authorization_code&redirect_uri=http://www.6d.com.sa&code=R4NI4H111RWGJVOPJLGSY0DWBQTJF4IPSF0EKFGBKOAG1KJF#_=_
// 	3. LHM2UWPE1MCKXTU1KOTQZKZIHO322IHZZN3HI3UXEZYYV5PQ


class FoursquareAPI {
	constructor(config) {
		this.config = {
			'oauth_token': config.api_key,
			'm': 'swarm',
			'v': '20200917',
			// A random coordinate to use between calls imitating regular behavior
			'll': '26.30' + this.between(340000000000, 499999999999) + ',50.1' + this.between(2870000000000, 3119999999999)
		};
		this.basePath = 'https://api.foursquare.com/v2/';
	}

	// Get Commands

	getFriends(options = {}) {

		_.defaults(options, {
			'user_id': 'self',
		});

		_.defaults(this.config, {
			'USER_ID': 'self',
			'limit': 100,
		});

		return axios.get(this.basePath + 'users/' + options.user_id + '/friends', { 'params': this.config });
	}

	getLastSeen(options = {}) {
		_.defaults(options, {
			'user_id': 'self',
		});

		_.defaults(this.config, {
			'USER_ID': 'self',
			'limit': 100,
		});

		return this.getUser(options);
	}

	getUser(options = {}) {
		_.defaults(options, {
			'user_id': 'self',
		});

		_.defaults(this.config, {
			'USER_ID': 'self',
			'limit': 100,
		});

		return axios.get(this.basePath + 'users/' + options.user_id, { 'params': this.config });
	}

	getCheckins(options = {}) {
		return options;
	}

	// returns user timeline after timestamp
	getRecent(options) {
		_.defaults(options, {
			'limit': 60,
		});

		_.defaults(this.config, {
			'afterTimeStamp': Date.now() - (1 * 24 * 60 * 60 * 1000),
			'limit': options.limit,
		});

		return axios.get(this.basePath + 'checkins/recent', { 'params': this.config });
	}


// Checkin Functions
	check_in(location_id) {
		return location_id;
	}

	promoe_checkin_nine_oclockers() {
		// get list from config
		// this.promoe_checkin();
		return;
	}

	promoe_checkin_twelve_oclockers() {
		// get list from config
		// this.promoe_checkin();
		return;
	}

	promoe_checkin_fourthirty_oclockers() {
		// get list from config
		// this.promoe_checkin();
		return;
	}

	promoe_checkin() {
		// checkin promoe
		// $this->check_in('5c1d4d037b385f002ca392ef');
		return;
	}

	// promoe auto like ?

	silent_check_in(location_id) {
		return location_id;
	}

	add_here_now() {
		// update ll to this location location
		// do a random explore request
		// checkin
		// get here now
		// call addFriend function
		return;
	}

	addFriendByID(id) {
		return id;
	}


// Like Functions
	likeCheckin(checkin_id) {
		const res = axios.post(this.basePath + 'checkins/' + checkin_id + '/like', querystring.stringify(this.config));
		return res;
	}

	likeUnliked() {
		const succeeded = [];


		this.getRecent().then(result => {
			result.response.recent.forEach(element => {
				if(element.like == false) {
					const like_result = this.likeCheckin(element.id).then(liked =>{
						console.log(liked);
						process.exit();
						return liked;
					}).catch(error =>{
						console.log(error);
					});
					succeeded.push(like_result);
				}
			});

			return succeeded;
		}).catch(error => {
			return error;
		});
	}

	promoe_autolike() {
		return;
	}

	auto_like() {
		return;
	}

	between(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	getToken() {
		this.desktopLogin(false);
		this.get_cookie_info();
	}

	desktopLogin(booleanthing) {
		return booleanthing;
	}

	get_cookie_info() {
		return;
	}

}

module.exports = FoursquareAPI;
