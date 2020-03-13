var Election = artifacts.require("./Election.sol");

contract("Election",function(account){
	var electionInstance;
	it("initializes with two candidates", function(){
		return Election.deployed().then(function(instance){
			return instance.candidatesCount();
		}).then(function(count){
			assert.equal(count,2);
		});
	});


	// it("initializes the candidates with correct values", function(){
	// 	return Election.deployed().then(function(instance){
	// 		electionInstance = instance;
	// 		return electionInstance.candidates(1);
	// 	}).then(function(candidate){
	// 		assert.equal(candidate[0],1,"Contains the correct id");
	// 		assert.equal(candidate[1],"Candidate 1","Contains the correct name");
	// 		assert.equal(candidate[2],0,"Contains the correct votes count");
	// 		return electionInstance.candidates(2);
	// 	}).then(function(candidate){
	// 		assert.equal(candidate[0],2,"Contains the correct id");
	// 		assert.equal(candidate[1],"Candidate 2","Contains the correct name");
	// 		assert.equal(candidate[2],0,"Contains the correct votes count");
	// 	});
	// });

	// it("allows a voter to cast a vote", function(){
	// 	return Election.deployed().then(function(instance){
	// 		electionInstance = instance;
	// 		candidateId = 1;
	// 		return electionInstance.vote(candidateId,{from:account[1]});
	// 	}).then(function(receipt){
	// 		assert.equal(receipt.logs.length,1,"an event was triggered");
	// 		assert.equal(receipt.logs[0].event,"votedEvent","the event type is correct");
	// 		assert.equal(receipt.logs[0].args._candidateId.toNumber(),candidateId,"the candidate id is correct");
	// 		return electionInstance.voters(account[1]);
	// 	}).then(function(voted){
	// 		assert(voted,"the voter was marked as voted");
	// 		return electionInstance.candidates(candidateId);
	// 	}).then(function(candidate){
	// 		var voteCount = candidate[2];
	// 		assert.equal(voteCount,1,"increments the candidate's vote count");
	// 	})
	// });

	// it("throws an exception for invalid candidates", function(){
	// 	return Election.deployed().then(function(instance){
	// 		electionInstance = instance;
	// 		return electionInstance.vote(99,{from:account[1]});
	// 	}).then(assert.fail).catch(function(error){
	// 		assert(error.message.indexOf('revert') >= 0, "error message must contain revert");
	// 		return electionInstance.candidates(1);
	// 	}).then(function(candidate1){
	// 		var voteCount = candidate1[2];
	// 		assert.equal(voteCount,1,"candidate1 did not recive any votes");
	// 		return electionInstance.candidates(2);
	// 	}).then(function(candidate2){
	// 		var voteCount = candidate2[2];
	// 		assert.equal(voteCount,0,"candidate2 did not recive any votes");
	// 	});
	// });

	// it("throws an exception for double voting", function(){
	// 	return Election.deployed().then(function(instance){
	// 		electionInstance = instance;
	// 		candidateId = 2;
	// 		electionInstance.vote(candidateId,{from:account[1]});
	// 		return electionInstance.candidates(candidateId);
	// 	}).then(function(candidate){
	// 		var voteCount = candidate[2];
	// 		assert.equal(voteCount,1,"accepts the first vote");
	// 		return electionInstance.vote(candidateId,{from:account[1]});
	// 	}).then(assert.fail).catch(function(error){
	// 		assert(error.message.indexOf('revert') >= 0, "error message must contain revert");
	// 		return electionInstance.candidates(1);
	// 	}).then(function(candidate1){
	// 		var voteCount = candidate1[2];
	// 		assert.equal(voteCount,1,"Candidate1 did not recive any votes");
	// 		return electionInstance.candidates(2);
	// 	}).then(function(candidate2){
	// 		var voteCount = candidate2[2];
	// 		assert.equal(voteCount,1,"Candidate2 did not recive any votes");
	// 	});
	// });


});