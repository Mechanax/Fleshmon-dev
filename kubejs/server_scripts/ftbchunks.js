ServerEvents.tags('block', event => {
    event.add('ftbchunks:interact_whitelist', '#lootr:containers')
    event.add('ftbchunks:interact_whitelist', '#lootballs:loot_balls_blocks')
    event.add('ftbchunks:interact_whitelist', 'myloot:loot_chest')
    event.add('ftbchunks:interact_whitelist', 'myloot:loot_shulker_box')
    event.add('ftbchunks:interact_whitelist', 'myloot:loot_barrel')
    event.add('ftbchunks:interact_whitelist', 'another_furniture:service_bell')
})

ServerEvents.tags('entity_type', event => {
    event.add('ftbchunks:entity_interact_whitelist', 'cobblemon:pokemon')
    event.add('ftbchunks:entity_interact_whitelist', 'easy_npc:villager')
    event.add('ftbchunks:entity_interact_whitelist', 'villager')
    event.add('ftbchunks:entity_interact_whitelist', 'wandering_trader')
    event.add('ftbchunks:entity_interact_whitelist', 'easy_npc:humanoid')
    event.add('ftbchunks:entity_interact_whitelist', 'easy_npc:humanoid_slim')
})