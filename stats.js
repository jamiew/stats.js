// Generic stats wrappers
//
// track_pageview('/jamiew')
// track_event(['Videos', 'Play', 'Optional 3rd field, e.g. video title'])
// track_goal('Purchase', 100)
//

function genetify_enabled() {
  return (typeof(genetify) != "undefined" && genetify.pageview_xid);
}

function ganalytics_enabled() {
  return (typeof(_gaq) != 'undefined');
}

function mixpanel_enabled() {
  return (typeof(mpq) != 'undefined');
}

function track_event(args) {
  debug("### track_event", args);

  if (ganalytics_enabled()) {
    // TODO FIXME -- the 3rd argument to GA's _trackEvent is preventing them from being
    // logged at all, some mistake in how we're using it again? Manually disabling it for now
    var gargs = args;
    if (gargs.length == 3) {
      gargs.pop();
    }

    gargs.unshift('_trackEvent');
    _gaq.push(gargs);
  }

  if (genetify_enabled()) {
    genetify.record.goal('track_event', 1);
  }

  if (mixpanel_enabled()) {
    mpq.push(["track", args[1]+": "+args[2], {'title': args[3]}]);
  }
}

function track_goal(name, score) {
  debug("### track_goal, name="+name+" score="+score);

  // GA logs goals using the urls

  if (genetify_enabled()) {
    genetify.record.goal(name, score);
    genetify.record.goal(name, score);
  }

  if (mixpanel_enabled()) {
    mpq.push(["track", name, {'score': score}]);
  }
}

function track_pageview(url) {
  debug("### track_pageview", url);

  if (ganalytics_enabled()) {
    _gaq.push(['_trackPageview', url]);
  }

  if (genetify_enabled()) {
    genetify.record.goal('track_pageview', 1);
  }

  if (mixpanel_enabled()) {
    mpq.push(['track', 'mp_page_view', pageview_info()]);
  }
}

