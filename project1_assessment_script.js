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
  if (parseInt(document.getElementById('readoutText').innerHTML) < 0) {
    document.getElementById('readoutText').innerHTML = document.getElementById('readoutText').innerHTML.fontcolor('red')
  }
  else {
    document.getElementById('readoutText').innerHTML = document.getElementById('readoutText').innerHTML.fontcolor('black')
  }
})

minusButton.addEventListener('click', function (e) {
  document.getElementById('readoutText').innerHTML = parseInt(document.getElementById('readoutText').innerHTML) - parseInt(document.getElementById('entryField').value)
  if (parseInt(document.getElementById('readoutText').innerHTML) < 0) {
    document.getElementById('readoutText').innerHTML = document.getElementById('readoutText').innerHTML.fontcolor('red')
  }
  else {
    document.getElementById('readoutText').innerHTML = document.getElementById('readoutText').innerHTML.fontcolor('black')
  }
})





console.log('script.js loaded!')