"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
;
(function() {
    'use strict'
    var keyCounter = 0
    var allWaypoints = {}
    
    function Waypoint(options) {
        if (!options) {
            throw new Error('No options passed to Waypoint constructor')
        }
        if (!options.element) {
            throw new Error('No element option passed to Waypoint constructor')
        }
        if (!options.handler) {
            throw new Error('No handler option passed to Waypoint constructor')
        }
        this.key = 'waypoint-' + keyCounter
        this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
        this.element = this.options.element
        this.adapter = new Waypoint.Adapter(this.element)
        this.callback = options.handler
        this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
        this.enabled = this.options.enabled
        this.triggerPoint = null
        this.group = Waypoint.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        })
        this.context = Waypoint.Context.findOrCreateByElement(this.options.context)
        if (Waypoint.offsetAliases[this.options.offset]) {
            this.options.offset = Waypoint.offsetAliases[this.options.offset]
        }
        this.group.add(this)
        this.context.add(this)
        allWaypoints[this.key] = this
        keyCounter += 1
    }
    
    Waypoint.prototype.queueTrigger = function(direction) {
        this.group.queueTrigger(this, direction)
    }
    
    Waypoint.prototype.trigger = function(args) {
        if (!this.enabled) {
            return
        }
        if (this.callback) {
            this.callback.apply(this, args)
        }
    }
    
    
    Waypoint.prototype.destroy = function() {
        this.context.remove(this)
        this.group.remove(this)
        delete allWaypoints[this.key]
    }
    
    
    Waypoint.prototype.disable = function() {
        this.enabled = false
        return this
    }
    
    
    Waypoint.prototype.enable = function() {
        this.context.refresh()
        this.enabled = true
        return this
    }
    
    
    Waypoint.prototype.next = function() {
        return this.group.next(this)
    }
    
    
    Waypoint.prototype.previous = function() {
        return this.group.previous(this)
    }
    
    Waypoint.invokeAll = function(method) {
        var allWaypointsArray = []
        for (var waypointKey in allWaypoints) {
            allWaypointsArray.push(allWaypoints[waypointKey])
        }
        for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
            allWaypointsArray[i][method]()
        }
    }
    
    
    Waypoint.destroyAll = function() {
        Waypoint.invokeAll('destroy')
    }
    
    
    Waypoint.disableAll = function() {
        Waypoint.invokeAll('disable')
    }
    
    
    Waypoint.enableAll = function() {
        Waypoint.invokeAll('enable')
    }
    
    
    Waypoint.refreshAll = function() {
        Waypoint.Context.refreshAll()
    }
    
    
    Waypoint.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    
    
    Waypoint.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    Waypoint.adapters = []
    Waypoint.defaults = {
        context: window,
        continuous: true,
        enabled: true,
        group: 'default',
        horizontal: false,
        offset: 0
    }
    Waypoint.offsetAliases = {
        'bottom-in-view': function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        'right-in-view': function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }
    window.Waypoint = Waypoint
}())
;(function() {
    'use strict'
    function requestAnimationFrameShim(callback) {
        window.setTimeout(callback, 1000 / 60)
    }
    var keyCounter = 0
    var contexts = {}
    var Waypoint = window.Waypoint
    var oldWindowLoad = window.onload
    
    function Context(element) {
        this.element = element
        this.Adapter = Waypoint.Adapter
        this.adapter = new this.Adapter(element)
        this.key = 'waypoint-context-' + keyCounter
        this.didScroll = false
        this.didResize = false
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }
        this.waypoints = {
            vertical: {},
            horizontal: {}
        }
        element.waypointContextKey = this.key
        contexts[element.waypointContextKey] = this
        keyCounter += 1
        this.createThrottledScrollHandler()
        this.createThrottledResizeHandler()
    }
    
    Context.prototype.add = function(waypoint) {
        var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
        this.waypoints[axis][waypoint.key] = waypoint
        this.refresh()
    }
    
    Context.prototype.checkEmpty = function() {
        var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
        var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
        if (horizontalEmpty && verticalEmpty) {
            this.adapter.off('.waypoints')
            delete contexts[this.key]
        }
    }
    
    Context.prototype.createThrottledResizeHandler = function() {
        var self = this
        function resizeHandler() {
            self.handleResize()
            self.didResize = false
        }
        this.adapter.on('resize.waypoints', function() {
            if (!self.didResize) {
                self.didResize = true
                Waypoint.requestAnimationFrame(resizeHandler)
            }
        })
    }
    
    Context.prototype.createThrottledScrollHandler = function() {
        var self = this
        function scrollHandler() {
            self.handleScroll()
            self.didScroll = false
        }
        this.adapter.on('scroll.waypoints', function() {
            if (!self.didScroll || Waypoint.isTouch) {
                self.didScroll = true
                Waypoint.requestAnimationFrame(scrollHandler)
            }
        })
    }
    
    Context.prototype.handleResize = function() {
        Waypoint.Context.refreshAll()
    }
    
    Context.prototype.handleScroll = function() {
        var triggeredGroups = {}
        var axes = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: 'right',
                backward: 'left'
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: 'down',
                backward: 'up'
            }
        }
        for (var axisKey in axes) {
            var axis = axes[axisKey]
            var isForward = axis.newScroll > axis.oldScroll
            var direction = isForward ? axis.forward : axis.backward
            for (var waypointKey in this.waypoints[axisKey]) {
                var waypoint = this.waypoints[axisKey][waypointKey]
                var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
                var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
                var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
                var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
                if (crossedForward || crossedBackward) {
                    waypoint.queueTrigger(direction)
                    triggeredGroups[waypoint.group.id] = waypoint.group
                }
            }
        }
        for (var groupKey in triggeredGroups) {
            triggeredGroups[groupKey].flushTriggers()
        }
        this.oldScroll = {
            x: axes.horizontal.newScroll,
            y: axes.vertical.newScroll
        }
    }
    
    Context.prototype.innerHeight = function() {
        
        if (this.element == this.element.window) {
            return Waypoint.viewportHeight()
        }
        
        return this.adapter.innerHeight()
    }
    
    Context.prototype.remove = function(waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key]
        this.checkEmpty()
    }
    
    Context.prototype.innerWidth = function() {
        
        if (this.element == this.element.window) {
            return Waypoint.viewportWidth()
        }
        
        return this.adapter.innerWidth()
    }
    
    
    Context.prototype.destroy = function() {
        var allWaypoints = []
        for (var axis in this.waypoints) {
            for (var waypointKey in this.waypoints[axis]) {
                allWaypoints.push(this.waypoints[axis][waypointKey])
            }
        }
        for (var i = 0, end = allWaypoints.length; i < end; i++) {
            allWaypoints[i].destroy()
        }
    }
    
    
    Context.prototype.refresh = function() {
        
        var isWindow = this.element == this.element.window
        
        var contextOffset = isWindow ? undefined : this.adapter.offset()
        var triggeredGroups = {}
        var axes
        this.handleScroll()
        axes = {
            horizontal: {
                contextOffset: isWindow ? 0 : contextOffset.left,
                contextScroll: isWindow ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: 'right',
                backward: 'left',
                offsetProp: 'left'
            },
            vertical: {
                contextOffset: isWindow ? 0 : contextOffset.top,
                contextScroll: isWindow ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: 'down',
                backward: 'up',
                offsetProp: 'top'
            }
        }
        for (var axisKey in axes) {
            var axis = axes[axisKey]
            for (var waypointKey in this.waypoints[axisKey]) {
                var waypoint = this.waypoints[axisKey][waypointKey]
                var adjustment = waypoint.options.offset
                var oldTriggerPoint = waypoint.triggerPoint
                var elementOffset = 0
                var freshWaypoint = oldTriggerPoint == null
                var contextModifier, wasBeforeScroll, nowAfterScroll
                var triggeredBackward, triggeredForward
                if (waypoint.element !== waypoint.element.window) {
                    elementOffset = waypoint.adapter.offset()[axis.offsetProp]
                }
                if (typeof adjustment === 'function') {
                    adjustment = adjustment.apply(waypoint)
                }
                else if (typeof adjustment === 'string') {
                    adjustment = parseFloat(adjustment)
                    if (waypoint.options.offset.indexOf('%') > - 1) {
                        adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
                    }
                }
                contextModifier = axis.contextScroll - axis.contextOffset
                waypoint.triggerPoint = elementOffset + contextModifier - adjustment
                wasBeforeScroll = oldTriggerPoint < axis.oldScroll
                nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
                triggeredBackward = wasBeforeScroll && nowAfterScroll
                triggeredForward = !wasBeforeScroll && !nowAfterScroll
                if (!freshWaypoint && triggeredBackward) {
                    waypoint.queueTrigger(axis.backward)
                    triggeredGroups[waypoint.group.id] = waypoint.group
                }
                else if (!freshWaypoint && triggeredForward) {
                    waypoint.queueTrigger(axis.forward)
                    triggeredGroups[waypoint.group.id] = waypoint.group
                }
                else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
                    waypoint.queueTrigger(axis.forward)
                    triggeredGroups[waypoint.group.id] = waypoint.group
                }
            }
        }
        Waypoint.requestAnimationFrame(function() {
            for (var groupKey in triggeredGroups) {
                triggeredGroups[groupKey].flushTriggers()
            }
        })
        return this
    }
    
    Context.findOrCreateByElement = function(element) {
        return Context.findByElement(element) || new Context(element)
    }
    
    Context.refreshAll = function() {
        for (var contextId in contexts) {
            contexts[contextId].refresh()
        }
    }
    
    
    Context.findByElement = function(element) {
        return contexts[element.waypointContextKey]
    }
    window.onload = function() {
        if (oldWindowLoad) {
            oldWindowLoad()
        }
        Context.refreshAll()
    }
    Waypoint.requestAnimationFrame = function(callback) {
        var requestFn = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            requestAnimationFrameShim
        requestFn.call(window, callback)
    }
    Waypoint.Context = Context
}())
;(function() {
    'use strict'
    function byTriggerPoint(a, b) {
        return a.triggerPoint - b.triggerPoint
    }
    function byReverseTriggerPoint(a, b) {
        return b.triggerPoint - a.triggerPoint
    }
    var groups = {
        vertical: {},
        horizontal: {}
    }
    var Waypoint = window.Waypoint
    
    function Group(options) {
        this.name = options.name
        this.axis = options.axis
        this.id = this.name + '-' + this.axis
        this.waypoints = []
        this.clearTriggerQueues()
        groups[this.axis][this.name] = this
    }
    
    Group.prototype.add = function(waypoint) {
        this.waypoints.push(waypoint)
    }
    
    Group.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    
    Group.prototype.flushTriggers = function() {
        for (var direction in this.triggerQueues) {
            var waypoints = this.triggerQueues[direction]
            var reverse = direction === 'up' || direction === 'left'
            waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
            for (var i = 0, end = waypoints.length; i < end; i += 1) {
                var waypoint = waypoints[i]
                if (waypoint.options.continuous || i === waypoints.length - 1) {
                    waypoint.trigger([direction])
                }
            }
        }
        this.clearTriggerQueues()
    }
    
    Group.prototype.next = function(waypoint) {
        this.waypoints.sort(byTriggerPoint)
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
        var isLast = index === this.waypoints.length - 1
        return isLast ? null : this.waypoints[index + 1]
    }
    
    Group.prototype.previous = function(waypoint) {
        this.waypoints.sort(byTriggerPoint)
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
        return index ? this.waypoints[index - 1] : null
    }
    
    Group.prototype.queueTrigger = function(waypoint, direction) {
        this.triggerQueues[direction].push(waypoint)
    }
    
    Group.prototype.remove = function(waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
        if (index > -1) {
            this.waypoints.splice(index, 1)
        }
    }
    
    
    Group.prototype.first = function() {
        return this.waypoints[0]
    }
    
    
    Group.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    
    Group.findOrCreate = function(options) {
        return groups[options.axis][options.name] || new Group(options)
    }
    Waypoint.Group = Group
}())
;(function() {
    'use strict'
    var $ = window.jQuery
    var Waypoint = window.Waypoint
    function JQueryAdapter(element) {
        this.$element = $(element)
    }
    $.each([
        'innerHeight',
        'innerWidth',
        'off',
        'offset',
        'on',
        'outerHeight',
        'outerWidth',
        'scrollLeft',
        'scrollTop'
    ], function(i, method) {
        JQueryAdapter.prototype[method] = function() {
            var args = Array.prototype.slice.call(arguments)
            return this.$element[method].apply(this.$element, args)
        }
    })
    $.each([
        'extend',
        'inArray',
        'isEmptyObject'
    ], function(i, method) {
        JQueryAdapter[method] = $[method]
    })
    Waypoint.adapters.push({
        name: 'jquery',
        Adapter: JQueryAdapter
    })
    Waypoint.Adapter = JQueryAdapter
}())
;(function() {
    'use strict'
    var Waypoint = window.Waypoint
    function createExtension(framework) {
        return function() {
            var waypoints = []
            var overrides = arguments[0]
            if (framework.isFunction(arguments[0])) {
                overrides = framework.extend({}, arguments[1])
                overrides.handler = arguments[0]
            }
            this.each(function() {
                var options = framework.extend({}, overrides, {
                    element: this
                })
                if (typeof options.context === 'string') {
                    options.context = framework(this).closest(options.context)[0]
                }
                waypoints.push(new Waypoint(options))
            })
            return waypoints
        }
    }
    if (window.jQuery) {
        window.jQuery.fn.waypoint = createExtension(window.jQuery)
    }
    if (window.Zepto) {
        window.Zepto.fn.waypoint = createExtension(window.Zepto)
    }
}())
;
;(function($){"use strict";$.fn.counterUp=function(options){var settings=$.extend({time:400,delay:10,offset:100,beginAt:0,formatter:false,context:"window",callback:function(){}},options),s;return this.each(function(){var $this=$(this),counter={time:$(this).data("counterup-time")||settings.time,delay:$(this).data("counterup-delay")||settings.delay,offset:$(this).data("counterup-offset")||settings.offset,beginAt:$(this).data("counterup-beginat")||settings.beginAt,context:$(this).data("counterup-context")||settings.context};var counterUpper=function(){var nums=[];var divisions=counter.time/counter.delay;var num=$(this).attr("data-num")?$(this).attr("data-num"):$this.text();var isComma=/[0-9]+,[0-9]+/.test(num);num=num.replace(/,/g,"");var decimalPlaces=(num.split(".")[1]||[]).length;if(counter.beginAt>num)counter.beginAt=num;var isTime=/[0-9]+:[0-9]+:[0-9]+/.test(num);if(isTime){var times=num.split(":"),m=1;s=0;while(times.length>0){s+=m*parseInt(times.pop(),10);m*=60}}for(var i=divisions;i>=counter.beginAt/num*divisions;i--){var newNum=parseFloat(num/divisions*i).toFixed(decimalPlaces);if(isTime){newNum=parseInt(s/divisions*i);var hours=parseInt(newNum/3600)%24;var minutes=parseInt(newNum/60)%60;var seconds=parseInt(newNum%60,10);newNum=(hours<10?"0"+hours:hours)+":"+(minutes<10?"0"+minutes:minutes)+":"+(seconds<10?"0"+seconds:seconds)}if(isComma){while(/(\d+)(\d{3})/.test(newNum.toString())){newNum=newNum.toString().replace(/(\d+)(\d{3})/,"$1"+","+"$2")}}if(settings.formatter){newNum=settings.formatter.call(this,newNum)}nums.unshift(newNum)}$this.data("counterup-nums",nums);$this.text(counter.beginAt);var f=function(){if(!$this.data("counterup-nums")){settings.callback.call(this);return}$this.html($this.data("counterup-nums").shift());if($this.data("counterup-nums").length){setTimeout($this.data("counterup-func"),counter.delay)}else{$this.data("counterup-nums",null);$this.data("counterup-func",null);settings.callback.call(this)}};$this.data("counterup-func",f);setTimeout($this.data("counterup-func"),counter.delay)};$this.waypoint(function(direction){counterUpper();this.destroy()},{offset:counter.offset+"%",context:counter.context})})}})(jQuery);
;var WordPressPopularPosts=function(){var c=function(){},g=!!HTMLElement.prototype.attachShadow,f=function(b,e,a,c){var d=new XMLHttpRequest;b=-1!=["GET","POST"].indexOf(b)?b:"GET";d.open(b,e+("GET"==b?"?"+a:""),!0);"POST"==b&&d.setRequestHeader("Content-type","application/x-www-form-urlencoded");d.setRequestHeader("X-Requested-With","XMLHttpRequest");d.onreadystatechange=function(){4===d.readyState&&200<=d.status&&300>d.status&&"function"===typeof c&&c.call(void 0,d.response)};d.send("POST"==b?a:
null)};return{get:function(b,e,a){a="function"===typeof a?a:c;f("GET",b,e,a)},post:function(b,e,a){a="function"===typeof a?a:c;f("POST",b,e,a)},ajax:f,theme:function(b){if(g){var e=document.createElement("style"),a=document.createElement("a");b.parentNode.appendChild(a);var c=getComputedStyle(a);e.innerHTML=".wpp-list li a {color: "+c.color+"}";b.parentNode.removeChild(a);a=b.attachShadow({mode:"open"});for(a.append(e);b.firstElementChild;)a.append(b.firstElementChild)}}}}();
if("undefined"!==typeof wpp_params&&0<wpp_params.ID){var do_request=!0;if("1"==wpp_params.sampling_active){var num=Math.floor(Math.random()*wpp_params.sampling_rate)+1;do_request=1===num}do_request&&WordPressPopularPosts.post(wpp_params.ajax_url,"_wpnonce="+wpp_params.token+"&wpp_id="+wpp_params.ID+"&sampling="+wpp_params.sampling_active+"&sampling_rate="+wpp_params.sampling_rate,function(c){wpp_params.debug&&window.console&&window.console.log&&window.console.log(JSON.parse(c))})};