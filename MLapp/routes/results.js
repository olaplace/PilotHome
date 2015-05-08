var express = require('express');
var marklogic = require('marklogic');
var router = express.Router();

var conn = require("../env.js").connection;

var db = marklogic.createDatabaseClient(conn);
var qb = marklogic.queryBuilder;


/* GET search page. */
router.get('/', function(req, res, next) {
	
	
	res.render('results', { title: 'Results of the search:' });
/*	
	db.documents.query(
		  qb.where(qb.byExample({domain: 'health'}))
		).result( function(documents) {
		    console.log('Matches for domain=health:')

			var docString = JSON.stringify(documents);
			console.log('JSON.stringify(documents)=' + docString);
			var docParse = JSON.parse(docString);
			console.dir('JSON.parse(docString)=' + docParse);
			for(var i = 0; i < documents.length; i++) {
			    var obj = documents[i];

			    console.log("doc:" +i +" =" + JSON.stringify(obj));
			}

		    documents.forEach( function(document) {
		      console.log('\nURI: ' + document.uri);
		      console.log('Name: ' + document.content.content.name);
			  console.log('Content domain: ' + document.content.domain);
			  //console.log('Alert: ' + document.alert);
			  //console.log('Domain: ' + document.domain);
			  //console.log('Domain: ' + document.domain);			  			  			  			  		  
		    });
			var myList = [{label: "one", num: 1},{label: "two", num: 2},{num: 3}];
			res.render('results', { title: 'Results of the search:', docstring: docString, docp: docParse, mylist: myList, mydocs: [{uri:"/json/cobra.json",category:"content",format:"json",contentType:"application/json",contentLength:"105",content:{name:"cobra",kind:"mammal",desc:"The cobra is a venomous, hooded snake of the family Elapidae."}},{uri:"/json/aardvark.json",category:"content",format:"json",contentType:"application/json",contentLength:"106",content:{name:"aardvark",kind:"mammal",desc:"The aardvark is a medium-sized burrowing, nocturnal mammal."}}] });			
			//res.render('results', { title: 'Results of the search:', docstring: docString, docp: docParse, mylist: [{label: "one", num: 1},{label: "two", num: 2},{num: 3}], mydocs: [{uri:"/json/cobra.json",category:"content",format:"json",contentType:"application/json",contentLength:"105",content:{name:"cobra",kind:"mammal",desc:"The cobra is a venomous, hooded snake of the family Elapidae."}},{uri:"/json/aardvark.json",category:"content",format:"json",contentType:"application/json",contentLength:"106",content:{name:"aardvark",kind:"mammal",desc:"The aardvark is a medium-sized burrowing, nocturnal mammal."}}] });
		}, function(error) {
		    console.log(JSON.stringify(error, null, 2));
		});	
*/	
	  
});

/* POST search page. */
router.post('/', function(req, res, next) {
	
	console.log("In results.post, search domain = " + req.body.domain_query);
	var queryDomain = req.body.domain_query;
	var queryAlert = req.body.alert_query;
	var queryOrder = req.body.order_query;
	var queryTag = req.body.tag_query;

	if (queryAlert == "Yes") {
		if (queryDomain == "health") {
			queryAlert = "AH-ON";
		}
		else if (queryDomain == "energy") {
			queryAlert = "AE-ON";
		}
		else if (queryDomain == "safety") {
			queryAlert = "AS-ON";
		}
	}
	if (queryOrder == "Yes") {
		console.log(" !!! Search requires Order in a descending way !!!");
		var qOrder = true;
	}
	
	if (queryTag.length > 0) {
		var theQBE = {
        	domain: queryDomain,
        	alert: queryAlert,
        	tags: [queryTag],
        	$filtered: qOrder
      	}   
	}
	else { // No Tag in the query
		var theQBE = {
        	domain: queryDomain,
        	alert: queryAlert,
        	$filtered: qOrder
      	}   
	}
	
	if (queryDomain.length > 0) {
		if (qOrder) { //We need to sort per name
			db.documents.query(
				  //qb.where(qb.byExample({domain: queryDomain}))
				  qb.where(qb.byExample(theQBE)).orderBy(qb.sort('name'))
				).result( function(documents) {
    	
					// The whole set of documents with its data
					var docString = JSON.stringify(documents);

					if (documents.length > 0) {
						var nbrDocs = documents.length;
					}
					else {
						var nbrDocs = 0;
					}
    	
					var resultDocs = {};
					var tabDocuments = [];
    	
					resultDocs.tabDocuments = tabDocuments;
				
					for(var i = 0; i < documents.length; i++) {
					    var obj = documents[i];
    	
						var aUri = obj.uri;
						var aAlert = obj.content.alert;
						var aPerson = obj.content.name;	
						var aPhone = obj.content.tel;
						var aAddress = obj.content.address;						
						var curDoc = {
					   	 	uri: aUri,
					   	 	alert: aAlert,
							person: aPerson,
							phone: aPhone,
							address: aAddress 
					};
					resultDocs.tabDocuments.push(curDoc);
				    //console.log("doc:" +i +" =" + JSON.stringify(obj));
				}

				res.render('results', { title: 'Results of the search: ' + nbrDocs + ' documents', docstring: docString, resdocs: resultDocs.tabDocuments});

			}, function(error) {
			    console.log(JSON.stringify(error, null, 2));
			});
		}
		else { // No sort per name
			db.documents.query(
				  //qb.where(qb.byExample({domain: queryDomain}))
				  qb.where(qb.byExample(theQBE))
				).result( function(documents) {
					// The whole set of documents with its data
					var docString = JSON.stringify(documents);

					if (documents.length > 0) {
						var nbrDocs = documents.length;
					}
					else {
						var nbrDocs = 0;
					}
    	
					var resultDocs = {};
					var tabDocuments = [];
    	
					resultDocs.tabDocuments = tabDocuments;
				
					for(var i = 0; i < documents.length; i++) {
					    var obj = documents[i];
    	
						var aUri = obj.uri;
						var aAlert = obj.content.alert;
						var aPerson = obj.content.name;	
						var aPhone = obj.content.tel;
						var aAddress = obj.content.address;						
						var curDoc = {
					   	 	uri: aUri,
					   	 	alert: aAlert,
							person: aPerson,
							phone: aPhone,
							address: aAddress 
					};
					resultDocs.tabDocuments.push(curDoc);
				    //console.log("doc:" +i +" =" + JSON.stringify(obj));
				}

				res.render('results', { title: 'Results of the search: ' + nbrDocs + ' documents', docstring: docString, resdocs: resultDocs.tabDocuments});

			}, function(error) {
			    console.log(JSON.stringify(error, null, 2));
			});
		}
	
	}
	
/* OK	
	db.documents.query(
		  qb.where(qb.byExample({kind: 'mammal'}))
		).result( function(documents) {
		    console.log('Matches for kind=mammal:')

			var docString = JSON.stringify(documents);
			console.log('JSON.stringify(documents)=' + docString);
			var docParse = JSON.parse(docString);
			console.dir('JSON.parse(docString)=' + docParse);
			for(var i = 0; i < documents.length; i++) {
			    var obj = documents[i];

			    console.log("doc:" +i +" =" + JSON.stringify(obj));
			}

		    documents.forEach( function(document) {
		      console.log('\nURI: ' + document.uri);
		      console.log('Name: ' + document.content.name);		  
		    });
			res.render('results', { title: 'Results of the search:', docstring: docString, docp: docParse, mylist: [{label: "one", num: 1},{label: "two", num: 2},{num: 3}], mydocs: [{uri:"/json/cobra.json",category:"content",format:"json",contentType:"application/json",contentLength:"105",content:{name:"cobra",kind:"mammal",desc:"The cobra is a venomous, hooded snake of the family Elapidae."}},{uri:"/json/aardvark.json",category:"content",format:"json",contentType:"application/json",contentLength:"106",content:{name:"aardvark",kind:"mammal",desc:"The aardvark is a medium-sized burrowing, nocturnal mammal."}}] });
		}, function(error) {
		    console.log(JSON.stringify(error, null, 2));
		});	
*/	 
	  
});

module.exports = router;