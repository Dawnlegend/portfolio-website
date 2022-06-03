console.log('Hello! Welcome to My Portfolio Site!')

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    console.log('1')
    x.className += ' responsive'
  } else {
    console.log('2')
    x.className = 'navtoggle'
  }
}
