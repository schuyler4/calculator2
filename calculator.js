class Calculator {
  constructor(parent) {
    this.parent = parent
    this.frame = document.createElement('div')
    this.input = document.createElement('input')
    this.inputArray = []
    this.buttons = []
    this.equation = []
  }

  render() {
    this.parent.appendChild(this.frame)
    this.renderInput()
    this.renderButtons()
  }

  renderInput() {
    this.frame.appendChild(this.input)
  }

  renderButtons() {
    const btnAmount = 16
    const btnValues = ['0', '1', '2', '3', '4',
      '5', '6', '7', '8', '9', 'clear', '+', '-', 'x', '%', '=']

    const buttonOnClick = this.buttonOnClick.bind(this)

    for(let btn = 0; btn < btnAmount; btn++) {
      this.buttons.push(document.createElement('button'))
      this.buttons[btn].innerHTML = btnValues[btn]


      this.buttons[btn].addEventListener('click', function() {
        buttonOnClick(this)
      })

      this.frame.appendChild(this.buttons[btn])
    }
  }

  buttonOnClick(button) {
    if(button.innerHTML == '=') {
      this.input.value = this.solve(this.equation)
    }
    else if(button.innerHTML == 'clear') {
      this.input.value = ''
    }
    else {
      this.input.value = this.input.value + button.innerHTML
      this.equation.push(button.innerHTML)
      console.log(this.equation)
    }
  }

  solve(equation) {
    const betterEquation = equation.map(function(x) {
      const parsed = parseInt(x)

      if(isNaN(parsed)) {
        return x
      } else {
        return parsed
      }
    })

    if(betterEquation )

    console.log(betterEquation)
  }
}
