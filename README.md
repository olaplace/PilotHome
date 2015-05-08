# PilotHome (MLapp)

PilotHome is a MarkLogic Enterprise DB and NodeJS (Express + Hogan) demo. It is based on those products:

  - MarkLogic 8.0-2
  - NodeJS v0.12.2
  - Express 4.12.1
  - Hogan 0.0.6

The NodeJS application name is "MLapp".

## MLapp functional goal
The functional global context is about piloting Internet of Things within a house or flat.

> Basically, some IoT devices are connected within houses or flats. 
> Those devices allow to gather informations around 3 domains:
> - Health (getting informations about people's health)
> - Energy (getting informations electronic devices like lights or screens)
> - Safety (getting informations security within the house/flat like fire or watter)
>
> In addition some alerts can be raised for each one of the 3 domains :
> AH-ON: corresponding to a Health domain Alert
> AE-ON: corresponding to an Energy domain Alert
> AS-ON: corresponding to a Safety domain Alert

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Version
1.0.0

### Tech

MLapp uses a number of open source projects to work properly:
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework 
* [Twitter Hogan] - the Twitter version of Mustache Views rendering


### Installation

You need Gulp installed globally:

```sh
$ npm i -g gulp
```

```sh
$ git clone [git-repo-url] dillinger
$ cd dillinger
$ npm i -d
$ mkdir -p public/files/{md,html,pdf}
$ gulp build --prod
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins

* Dropbox
* Github
* Google Drive
* OneDrive

Readmes, how to use them in your own application can be found here:

* [plugins/dropbox/README.md](https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md)
* [plugins/github/README.md](https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md)
* [plugins/googledrive/README.md](https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md)
* [plugins/onedrive/README.md](https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md)

### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma start
```

### Todo's

 - Write Tests
 - Rethink Github Save
 - Add Code Comments
 - Add Night Mode

License
----

MIT


**Free Software, Enjoy the MarkLogic demo!**


[node.js]:http://nodejs.org
[Twitter Hogan]:http://twitter.github.io/hogan.js/
[express]:http://expressjs.com


