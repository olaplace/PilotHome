// Document descriptors to pass to write(). 
var json_documents = [
  { uri: '/json/23hj-ae1e3b8856f7-23hj.json',
    guid: '23hj-ae1e3b8856f7-23hj',
	domain: 'health',
    followed_since: '2014-01-31T19:57:33+08:00',
	tel: 33658190000,
	address: '123 Paradise Road, Dreamland, Dreamcity, 1234',
	alert: 'AH-OFF',
	name: 'Sara Connor',
    content: {
      disease: 'heart',
      desc: 'Sara Connor suffers from heart failure. A great attention should be paid. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	  medication: [
	    'Med A',
	    'Med F',
	    'Med M'
	  ],
      statistics: {
  	  date: '2015-05-07T19:57:33+08:00',
        alert: false,
        lower_frequency_heart: 58,
        higher_frequency_heart: 145		
      }
    },
    contact: {
      link: 'Son',
      tel: 33658190000,
      address: '760 Forest Place, Glenshaw, Michigan, 1175'
    },
    location: {
      type: 'Point',
      coordinates: [15.27027, -107.313581]
    },
    tags: [
      'health',
      'heart',
      'disease'
    ]
  },
  { uri: '/json/8hh5-ae1e3b8856f7-8hh5.json',
    guid: '8hh5-ae1e3b8856f7-8hh5',
    domain: 'health',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658190000,
	address: '123 Paradise Road, Dreamland, Dreamcity, 2345',
	alert: 'AH-OFF',
    name: 'Jane Doe',
    content: {
      disease: 'heart',
      desc: 'Jane Doe suffers from alzheimer desease. A great attention should be paid. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	  medication: [
	    'Med C',
	    'Med L',
	    'Med M'
	  ],
      statistics: {
        date: '2015-05-07T19:57:33+08:00',
        alert: false,
        lower_frequency_heart: 65,
        higher_frequency_heart: 123		
      }
    },
    contact: {
      link: 'Daughter',
      tel: 33658191234,
      address: '123 Dream Place, Town, New York, 1175'
    },
    location: {
      type: 'Point',
      coordinates: [35.34251, -87.313581]
    },
    tags: [
      'health',
      'memory',
      'disease'
    ]
  },
  { uri: '/json/9kml-ae1e3b8856f7-9kml.json',
    guid: '9kml-ae1e3b8856f7-9kml',
    domain: 'health',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658199876,
	address: '345 Paradise Road, Dreamland, Dreamcity, 3456',
	alert: 'AH-ON',
    name: 'John Doe',
    content: {
      disease: 'heart',
      desc: 'John Doe suffers from heart failure. A great attention should be paid. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	  medication: [
	    'Med K',
	    'Med X',
	    'Med W'
	  ],
      statistics: {
        date: '2015-05-03T19:57:33+08:00',
        alert: true,
        lower_frequency_heart: 78,
        higher_frequency_heart: 197		
      }
    },
    contact: {
      link: 'Son',
      tel: 336581987534,
      address: '666 Road, Town, City, 4532'
    },
    location: {
      type: 'Point',
      coordinates: [25.27027, -77.313581]
    },
    tags: [
      'health',
      'heart',
      'disease'
    ]
  },
  { uri: '/json/ba77-ae1e3b8856f7-ba77.json',
    guid: 'ba77-ae1e3b8856f7-ba77',
    domain: 'health',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658197531,
	address: '456 Paradise Road, Dreamland, Dreamcity, 4567',
	alert: 'AH-OFF',
    name: 'Mary Popins',
    content: {
      disease: 'knee',
      desc: 'Mary Popins suffers from her left knee. She cannot fly anymore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	  medication: [
	    'Med S',
	    'Med Z'
	  ],
      statistics: {
        date: '2015-05-07T19:57:33+08:00',
        alert: false,
        lower_frequency_heart: 58,
        higher_frequency_heart: 145		
      }
    },
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [45.27027, -68.313581]
    },
    tags: [
      'health',
      'knee',
      'disease'
    ]
  },
  { uri: '/json/8ge4-ae1e3b8856f7-8ge4.json',
    guid: '8ge4-ae1e3b8856f7-8ge4',
    domain: 'energy',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658199898,
	address: '567 Paradise Road, Dreamland, Dreamcity, 5678',
  	alert: 'AE-ON',
    name: 'John Wayne',
    type: 'lights',
    status: 'On',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [45.27027, -68.313581]
    },
    tags: [
      'energy',
      'light'
    ]
  },
  { uri: '/json/9mm2-ae1e3b8856f7-9mm2.json',
    guid: '9mm2-ae1e3b8856f7-9mm2',
    domain: 'energy',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658199558,
	address: '678 Paradise Road, Dreamland, Dreamcity, 6789',
  	alert: 'AE-OFF',
    name: 'James Bond',
    type: 'lights',
    status: 'Off',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },  
    location: {
      type: 'Point',
      coordinates: [35.27027, -78.313581]
    },
    tags: [
      'energy',
      'light'
    ]
  },
  { uri: '/json/fh5r-ae1e3b8856f7-fh5r.json',
    guid: 'fh5r-ae1e3b8856f7-fh5r',
    domain: 'energy',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658191234,
	address: '789 Paradise Road, Dreamland, Dreamcity, 7890',
  	alert: 'AE-ON',
    name: 'Sean Connery',  
    type: 'lights',
    status: 'On',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [15.27027, -28.313581]
    },
    tags: [
      'energy',
      'light'
    ]
  },
  { uri: '/json/5xs1-ae1e3b8856f7-5xs1.json',
    guid: '5xs1-ae1e3b8856f7-5xs1',
    domain: 'energy',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658199898,
	address: '890 Paradise Road, Dreamland, Dreamcity, 8901',
  	alert: 'AE-OFF',
    name: 'Gary Grant',
    type: 'lights',
    status: 'Off',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [65.27027, -38.313581]
    },
    tags: [
      'energy',
      'light'
    ]
  },
  { uri: '/json/9jtd-ae1e3b8856f7-9jtd.json',
    guid: '9jtd-ae1e3b8856f7-9jtd',
    domain: 'energy',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658198453,
	address: '901 Paradise Road, Dreamland, Dreamcity, 9012',
  	alert: 'AE-OFF',
    name: 'Steven Spielberg',
    type: 'screens',
    status: 'Off',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [25.27027, -118.313581]
    },
    tags: [
      'energy',
      'screen'
    ]
  },
  { uri: '/json/7f8q-ae1e3b8856f7-7f8q.json',
    guid: '7f8q-ae1e3b8856f7-7f8q',
    domain: 'energy',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658198453,
	address: '112 Paradise Road, Dreamland, Dreamcity, 1123',
  	alert: 'AE-ON',
    name: 'Wolfgang Mozart',
    type: 'screens',
    status: 'On',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [35.27027, -84.313581]
    },
    tags: [
      'energy',
      'screen'
    ]
  },
  { uri: '/json/h7d6-ae1e3b8856f7-h7d6.json',
    guid: 'h7d6-ae1e3b8856f7-h7d6',
    domain: 'energy',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658193344,
	address: '113 Paradise Road, Dreamland, Dreamcity, 1134',
  	alert: 'AE-OFF',
    name: 'Ludwig Beethoven',
    type: 'washing machine',
    status: 'Off',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [25.27027, -74.313581]
    },
    tags: [
      'energy',
      'washing machine'
    ]
  },
  { uri: '/json/987h-ae1e3b8856f7-987h.json',
    guid: '987h-ae1e3b8856f7-987h',
    domain: 'energy',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658193774,
	address: '114 Paradise Road, Dreamland, Dreamcity, 1145',
  	alert: 'AE-ON',
    name: 'Abraham Lincoln',
    type: 'washing machine',
    status: 'On',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [45.27027, -94.313581]
    },
    tags: [
      'energy',
      'washing machine'
    ]
  },
  { uri: '/json/43fx-ae1e3b8856f7-43fx.json',
    guid: '43fx-ae1e3b8856f7-43fx',
    domain: 'safety',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658199841,
	address: '115 Paradise Road, Dreamland, Dreamcity, 1156',
  	alert: 'AS-OFF',
    name: 'Henry IV',
    type: 'fire',
    status: 'Off',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [42.27027, -85.313581]
    },
    tags: [
      'safety',
      'fire',
	  'alarm'
    ]
  },
  { uri: '/json/mnh5-ae1e3b8856f7-mnh5.json',
    guid: 'mnh5-ae1e3b8856f7-mnh5',
    domain: 'safety',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658190911,
	address: '116 Paradise Road, Dreamland, Dreamcity, 1167',
  	alert: 'AS-ON',
    name: 'Francois Ier',
    type: 'fire',
    status: 'On',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [12.27027, -65.313581]
    },
    tags: [
      'safety',
      'fire',
      'alarm'
    ]
  },
  { uri: '/json/mnz2-ae1e3b8856f7-mnz2.json',
    guid: 'mnz2-ae1e3b8856f7-mnz2',
    domain: 'safety',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658190911,
	address: '117 Paradise Road, Dreamland, Dreamcity, 1178',
  	alert: 'AS-ON',
    name: 'Georges Washington',
    type: 'watter',
    status: 'Off',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [22.27027, -115.313581]
    },
    tags: [
      'safety',
      'watter',
      'alarm'
    ]
  },
  { uri: '/json/1wq2-ae1e3b8856f7-1wq2.json',
    guid: '1wq2-ae1e3b8856f7-1wq2',
    domain: 'safety',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658190911,
	address: '118 Paradise Road, Dreamland, Dreamcity, 1189',
  	alert: 'AS-OFF',
    name: 'Theodore Roosevelt',
    type: 'watter',
    status: 'Off',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [32.27027, -95.313581]
    },
    tags: [
      'safety',
      'watter',
      'alarm'
    ]
  },
  { uri: '/json/432g-ae1e3b8856f7-432g.json',
    guid: '432g-ae1e3b8856f7-432g',
    domain: 'safety',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658195555,
	address: '223 Paradise Road, Dreamland, Dreamcity, 2234',
  	alert: 'AS-ON',
    name: 'Winston Churchill',
    type: 'watter',
    status: 'On',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [38.27027, -81.313581]
    },
    tags: [
      'safety',
      'watter',
      'alarm'
    ]
  },
  { uri: '/json/9kla-ae1e3b8856f7-9kla.json',
    guid: '9kla-ae1e3b8856f7-9kla',
    domain: 'safety',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658195555,
	address: '224 Paradise Road, Dreamland, Dreamcity, 2245',
  	alert: 'AS-ON',
    name: 'Daffy Duck',
    type: 'intrusion',
    status: 'On',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [18.27027, -59.313581]
    },
    tags: [
      'safety',
      'intrusion',
      'alarm'
    ]
  },
  { uri: '/json/7gh3-ae1e3b8856f7-7gh3.json',
    guid: '7gh3-ae1e3b8856f7-7gh3',
    domain: 'safety',
    followed_since: '2014-01-31T19:57:33+08:00',
    tel: 33658195555,
	address: '225 Paradise Road, Dreamland, Dreamcity, 2256',
  	alert: 'AS-ON',
    name: 'René Barjavel',
    type: 'intrusion',
    status: 'Off',
    contact: {
      link: 'Son',
      tel: 33658199745,
      address: '123 Paradise Road, Dreamland, Dreamcity, 9876'
    },
    location: {
      type: 'Point',
      coordinates: [38.27027, -96.313581]
    },
    tags: [
      'safety',
      'intrusion',
      'alarm'
    ]
  }
];

module.exports = {
  json_docs: json_documents       // Export the development connection
}