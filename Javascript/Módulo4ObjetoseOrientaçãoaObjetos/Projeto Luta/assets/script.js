let char = new Knight('lio')
let monster = new LitterMonster()

const stage = new Stage(
    char, 
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)

stage.start()

