// Stay alive for one minute.
// If you win, the next time you play will be more difficult and more rewarding!
// If you lose, you must wait a day before submitting again.
loop {
    var nearestCoin = this.findNearest(this.findItems());
    if (nearestCoin){
		this.move(nearestCoin.pos);
	}
	
	if(this.gold > 20){
        this.summon("soldier");
    }
	
	var soldiers = this.findFriends();
    var soldiersIndex = 0;	
	var enemy = this.findNearest(this.findEnemies());
	while(soldiersIndex < soldiers.length){
		var soldier = soldiers[soldiersIndex];
		soldiersIndex++;
		if (enemy) {
			this.command(soldier, "attack", enemy);
		}
	}
	if(enemy){
		if (this.distanceTo(enemy)<10){
			if(this.isReady("power-up")){
				this.powerUp();
				this.attack(enemy);
			} else if (this.isReady("bash")) {
				this.bash(enemy);
			}
		} else if (this.distanceTo(enemy) < 20) {
			if (this.canElectrocute(enemy)){
			this.electrocute(enemy);
			}
		}
	}
}
    
