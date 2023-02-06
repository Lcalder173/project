let projectile: Sprite = null
let chicken = sprites.create(img`
    . . . . . . 7 . . . . . . . . 
    . . . . 7 4 4 4 7 . . . . . . 
    . . . 7 7 4 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 c . . . . . . 
    . . . 5 7 7 7 b 7 . . . . . . 
    . . . 1 4 5 d d 7 . . . . . . 
    . . . 4 4 1 1 d 7 7 . . . . . 
    . . . 4 4 1 1 1 7 7 7 . . . . 
    . . . 4 4 1 1 d 7 7 7 . . . . 
    . . . 7 5 7 7 7 7 7 d . . . . 
    . . . 7 5 5 7 7 7 7 1 . . . . 
    . . . 7 5 5 7 7 7 7 . . . . . 
    . . . . 7 5 7 7 . . . . . . . 
    . . . 4 4 4 . 4 4 . . . . . . 
    . . . . . . 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let origonalChicken = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . 3 1 . . . . . . . 
    . . . . . 1 2 1 . . . . . . . 
    . . . . . 1 1 1 . . . . . . . 
    . . . . . 4 1 d . . . . . . . 
    . . . . . 4 1 1 1 . . . . . . 
    . . . . . 3 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 . . . . . . 
    . . . . . . 1 1 . . . . . . . 
    . . . . . 4 4 b . . . . . . . 
    . . . . . . 6 4 6 . . . . . . 
    . . . . . . 6 4 . . . . . . . 
    . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    c . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(0, 20)
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 2 2 2 2 2 2 c 2 . . . 
        . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
        . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
        . 2 c 2 e e e e e e e b c 4 2 2 
        . 2 2 e b b e b b b e e b 4 2 2 
        . 2 e b b b e b b b b e 2 2 2 2 
        . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
        . e e e e e e f e e e f e 2 d d 
        . e e e e e e f e e f e e e 2 d 
        . e e e e e e f f f e e e e e e 
        . e f f f f e e e e f f f e e e 
        . . f f f f f e e f f f f f e . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
})
