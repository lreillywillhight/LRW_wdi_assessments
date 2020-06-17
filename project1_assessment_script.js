console.log('loading script.js')


//javascript was being fussy, so these will be unused
// var readout = parseInt(document.getElementById('readoutText').innerHTML)
// var readoutNum = parseInt(readout)
// var plusButton = document.getElementById('plusButton')
// var minusButton = document.getElementById('minusButton')
// var entryField = document.getElementById('entryField').value
// var entryNum = parseInt(entryField)


plusButton.addEventListener('click', function (e) {
  document.getElementById('readoutText').innerHTML = parseInt(document.getElementById('readoutText').innerHTML) + parseInt(document.getElementById('entryField').value)
})
 
minusButton.addEventListener('click', function (e) {
  document.getElementById('readoutText').innerHTML = parseInt(document.getElementById('readoutText').innerHTML) - parseInt(document.getElementById('entryField').value)
})
 




console.log('script.js loaded!')