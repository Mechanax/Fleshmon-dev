//priority: 1
var cashes = [
    lesserWoodland,
    lesserVolcanic,
    lesserAquatic,
    adeptWoodland,
    adeptVolcanic,
    adeptAquatic,
    masterWoodland,
    masterVolcanic,
    masterAquatic
];

ItemEvents.rightClicked("kubejs:lesser_cache", event => {
    event.server.runCommandSilent('execute as ${event.player.username} at @s run function kubejs:lesser_cache')
    event.itemstack.shrink(1)
})

ServerEvents.command('kubejs:lesser_cache', event => {
    var r = Math.floor(Math.random() * cashes[1].length);
})