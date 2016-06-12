// You only have 20 seconds until the ogre horde arrives!
// Grab as much gold as you can, then retreat to your base and wall it off!

while(this.now() < 20) {
    // Collect coins
    var coins = this.findItems();
    for (var i=0; i<coins.length;i++) {
		var currCoin = coins[i];
		
	}
	
    var min = min(distance);
	var pos = distance.indexOf(min);
	var coin = coins[pos];
	
	this.move(coin.pos);
	
	
/*
	if (coin.value > nextCoin.value && this.distanceTo(coin) < this.distanceTo(nextCoin)) {
		this.move(coin.pos);
	} else if (this.distanceTo(coin) < this.distanceTo(nextCoin)) {
		this.move(coin.pos);
	} else if (coin.value < nextCoin.value && this.distanceTo(coin) > this.distanceTo(nextCoin)) {
		this.move(nextCoin.pos);
	} else if (this.distanceTo(coin) > this.distanceTo(nextCoin)) {
		this.move(nextCoin.pos);
	}
*/	
}

while (this.pos.x > 16) {
    // Retreat behind the fence
    this.moveXY(29, 38);
	this.moveXY(16, 38);
}

// Build a fence to keep the ogres out.
this.buildXY("fence", 21, 38);
