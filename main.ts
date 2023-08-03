input.onPinPressed(TouchPin.P0, function () {
    if (_try == 1) {
        _try = 0
        if (Key == 2) {
            game.addScore(1)
        } else {
            game.removeLife(1)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (_try == 1) {
        _try = 0
        if (Key == 1) {
            game.addScore(1)
        } else {
            game.removeLife(1)
        }
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (_try == 1) {
        _try = 0
        if (Key == 4) {
            game.addScore(1)
        } else {
            game.removeLife(1)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (_try == 1) {
        _try = 0
        if (Key == 1) {
            game.addScore(1)
        } else {
            game.removeLife(1)
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (_try == 1) {
        _try = 0
        if (Key == 3) {
            game.addScore(1)
        } else {
            game.removeLife(1)
        }
    }
})
let states: string[] = []
let Key = 0
let _try = 0
game.setLife(3)
game.setScore(0)
basic.forever(function () {
    states = [
    "A",
    "B",
    "0",
    "1",
    "2"
    ]
    if (!(game.isGameOver())) {
        _try = 1
        Key = randint(0, 4)
        basic.showString("" + (states[Key]))
        basic.pause(2000)
    }
})
