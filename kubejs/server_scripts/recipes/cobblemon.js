ServerEvents.recipes(event => { 
    event.remove({ output: 'cobblemon:pc' })
    event.remove({ output: 'cobblemon:healing_machine' })

    event.replaceInput(
        { input: 'cobblemon:pc' },
        'cobblemon:pc',
        'cobblemon:monitor'
    )
})