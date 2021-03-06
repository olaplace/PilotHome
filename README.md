# PilotHome (*MLapp*)

PilotHome is a MarkLogic Enterprise DB and NodeJS (Express + Hogan) demo. It is based on those products:

  - MarkLogic 8.0-2
  - NodeJS v0.12.2
  - Express 4.12.1
  - Hogan 0.0.6

The NodeJS application name is *MLapp*.

## *MLapp* functional goal
The functional global context is about piloting Internet of Things within a house or flat.

> Basically, some IoT devices are connected within houses or flats. 
> Those devices allow to gather informations around 3 domains:
> - Health (getting informations about people's health)
> - Energy (getting informations electronic devices like lights or screens)
> - Safety (getting informations security within the house/flat like fire or watter)
>
> In addition some alerts can be raised for each one of the 3 domains :
> - AH-ON: corresponding to a Health domain Alert
> - AE-ON: corresponding to an Energy domain Alert
> - AS-ON: corresponding to a Safety domain Alert

The *MLapp* demo application allows to load JSON documents (generated by the 3 domains IoT devices) in the MarkLogic database.
Then, it is possible to request and search the database in different ways like searching for raised alerts.

## *MLapp* installation
### Prerequisite
You need to have:
- A running MarkLogic database 
- node.js installed (npm is installed with node.js). Node can be installed from here: *https://nodejs.org/*
- A working Git account

### Installation
Go to the directory where you want to install the application:
```sh
$ mkdir Marklogic
$ cd Marklogic
```

Download the whole application from github:
```sh
$ git clone https://github.com/olaplace/PilotHome .
```

Go to the application directory:
```sh
$ cd MLapp
```

Edit the *env.js* file and adapt content to your MarkLogic database connection, particularly the following attributes:
```sh
  database: "Documents", // Each connection can specify its own database
  host: "localhost",     // The host against which queries will be run
  port: 8000,            // By default port 8000 accepts Client API requests
  user: "admin",         // A user with at least the rest-writer role
  password: "********"   // The users's password
```


## *MLapp* usage
Once installed, some tips to use the application (don't forget to load the JSON documents).

- Start the *MLapp* application (in the *MLapp* directory where the package has been dowmloaded. Should content *app.js* file):
```sh
$ DEBUG=MLapp:* ./bin/www
```

- Home page of the application in a browser:
```sh
http://localhost:3000
```

- You then need to load the *testing* documents with the following URL (19 documents). Select JSON in *Load documents of type (JSON)* field:
```sh
http://localhost:3000/load
```
*Note that here you can also remove the documents from the database.*

- You are now ready to search for documents with the following URL:
```sh
http://localhost:3000/search
```

> As search examples, you can try (the result should give 4 documents) :
> - *energy* for the domain criteria
> - Select (Search only where alerts raised) to get only the situation where an alert was raised
> - Select (Sort by person's name) in order to have the result sorted by the person'S name. Be aware that this functionality requires an Admin task on your database: you should add an *Element Range Indexes* of *type* "string" and *localname* "name". The search won't run properly if you selected the sort option without doing this Admin task!

Enjoy!!!

### Todo's... work to come :-)
Some additional content/functions that I would like to add:
 - Facet 
 - Semantics search
 - Geospatial search (the JSON loaded documents allow this)
 - Additional Query, Search and Sort...

### Version
1.0.0

### Tech

MLapp uses a number of open source projects to work properly:
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework 
* [Twitter Hogan] - the Twitter version of Mustache Views rendering


License
----
MIT


**Free Software, Enjoy this MLapp MarkLogic demo!**


[node.js]:http://nodejs.org
[Twitter Hogan]:http://twitter.github.io/hogan.js/
[express]:http://expressjs.com


