proto = null

_ = (@iframe) ->    
  @state = { duration : 0, position: 0 }
  return

callbacks = {}
events = { PAUSE : 'pause', PLAY : 'play', READY: 'ready', FINISH : 'finish', ERROR : 'error', PLAY_PROGRESS: 'progress'}

_.prototype = 
  constructor: _
  _communicate: (message) -> 
    return unless typeof message is 'object'
    return unless @iframe?.contentWindow?
    message.from = 'audiusapi'
    @iframe.contentWindow.postMessage JSON.stringify(message), '*'
    return
  bind: (event, callback) -> 
    return throw new Error('event callback must be a function') unless typeof callback is 'function'
    callbacks[event] = callback 
    return
  getDuration: -> return @state.duration
  getPosition: -> return @state.position
  setDuration: (duration) -> 
    @state.duration = duration
    return
  setPosition: (position) ->
    @state.position = position
    return
  togglePlay: -> 
    @_communicate { method: 'togglePlay' }
    return
  seekTo: (position) -> 
    @_communicate { method: 'seekTo', value: position }
    return 
  setVolume: (volume) -> 
    @_communicate { method: 'setVolume', value: volume }
    return
  stop: -> 
    @_communicate { method: 'stop' }
    return

a = (e) -> 
  return throw new Error('embed api must be initialized with an iframe') unless (e.nodeName? and e.nodeName is 'IFRAME')
  window.addEventListener 'message', (e) -> 
    return unless e.data?
    try
      { origin, data, event } = JSON.parse(e.data)
      if origin? and origin is 'audiusembed'
        if ['ready', 'progress'].includes(event)
          proto.setDuration data.duration
          proto.setPosition data.position
        return unless callbacks[event]?
        callbacks[event]()
    catch err 

  , false
  proto = new _ e
  proto

do -> 
  window.Audius = {}
  window.Audius.Embed = a
  window.Audius.Events = events
  return