ServerEvents.recipes(event => {
    event.remove({ id: 'luphieclutteredmod:small_shelf_recipe' })
    
    event.shaped('luphieclutteredmod:small_shelf', [
          '   ',
          'AAA',
          'B  '
        ], {
          A: 'minecraft:oak_slab',
          B: 'minecraft:stick'
        }
    )
    ['luphieclutteredmod:small_shelf', 'minecraft:oak_slab', 'minecraft:stick']
})