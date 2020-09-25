_ = (@iframe) ->

_.prototype = 
  constructor: _
  _communicate: (message) -> 
    return unless typeof message is 'object'
    return unless @iframe?.contentWindow?
    message.from = 'audiusapi'
    @iframe.contentWindow.postMessage JSON.stringify(message), (@iframe.getAttribute 'src').split('?')[0]
  getPosition: -> @_communicate { method: 'getPosition' }
  togglePlay: -> @_communicate { method: 'togglePlay' }
  seekTo: (position) -> @_communicate { method: 'seekTo', value: position }
  stop: -> @_communicate { method: 'stop' }

a = (e) -> 
  return unless (e.nodeName? and e.nodeName is 'IFRAME')
  
  window.addEventListener 'message', (e) -> 
    console.log(e.data)
    if e.data? and e.data.from? and e.edata.from is 'audiusembed'
      console.log 'received message in embed api from embed', e.data
  , false
  new _ e
  
do -> 
  window.Audius = {}
  window.Audius.Embed = a
  return