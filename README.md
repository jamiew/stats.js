stats.js
========

Abstraction layer for doing js pageview, event, and goal tracking across
multiple stats tracking tools: Google Analytics, Mixpanel, Genetify et al

This is crayz simple but has been really useful for me. Patches/pull requests/issues welcome

Usage
-----

```javascript
track_pageview('/jamiew')
track_event(['Videos', 'Play']);
track_goal('Purchase', 100)
```

Supported services
------------------
* Google Analytics
* Genetify (page testing)
* Mixpanel

License
-------

This source code made freely available under an MIT License

Copyfree &copy; 2012 Jamie Wilkinson

Authors
-------
* [Jamie Dubs](https://github.com/jamiew)

