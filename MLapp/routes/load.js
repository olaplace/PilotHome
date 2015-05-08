var express = require('express');
var marklogic = require('marklogic');
var router = express.Router();

var conn = require("../env.js").connection;
var json_docs = require("../documents/json/mlapp-docs.js").json_docs;

var db = marklogic.createDatabaseClient(conn);
var qb = marklogic.queryBuilder;

/* GET home page. */
router.get('/', function(req, res, next) {
		  
  res.render('load', { msg_load: 'Form to load documents' });
});


/* POST home page. */
router.post('/', function(req, res, next) {
	
	console.log("In load.post, Type to load = " + req.body.docs_to_load);
	console.log("In load.post, Type to remove = " + req.body.docs_to_remove);
	if (req.body.docs_to_load === "JSON" || req.body.docs_to_load === "json") {
		
		// Write the JSON docs
		db.documents.write(
		  json_docs.map(function(item) {
		    return {
		      uri: item.uri,
		      contentType: "application/json",
		      collections: ["demo data"],
		      content: item
		    }
		  })
		).
		  result(function(response){
		    console.dir(JSON.stringify(response))
		  });
		
		res.render('load', { msg_load: 'Documents loaded in MarkLogic' });
	}
	  
	// Remove JSON documents  
	if (req.body.docs_to_remove === "JSON" || req.body.docs_to_remove === "json") {
		
		db.documents.removeAll(
		  {directory: '/json/'}
		).result( function(response) {
		  console.log(response);
		});
		res.render('load', { msg_load: 'Documents removed!!!' });
	}
	// Remove XML documents  
	else if (req.body.docs_to_remove === "XML" || req.body.docs_to_remove === "xml") {
		
		db.documents.removeAll(
		  {directory: '/xml/'}
		).result( function(response) {
		  console.log(response);
		});
		res.render('load', { msg_load: 'Documents removed!!!' });
	}	// Remove RAW documents  
	else if (req.body.docs_to_remove === "RAW" || req.body.docs_to_remove === "raw") {
		
		db.documents.removeAll(
		  {directory: '/raw/'}
		).result( function(response) {
		  console.log(response);
		});
		res.render('load', { msg_load: 'Documents removed!!!' });
	}
	
});

module.exports = router;