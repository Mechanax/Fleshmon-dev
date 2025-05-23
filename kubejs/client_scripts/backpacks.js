ItemEvents.tooltip(event => {
    event.addAdvanced(/travelersbackpack:.*/g, (item, advanced, text) => {
        if (!event.shift) {
            text.add(0, Text.of('THESE ARE BEING REMOVED NEXT UPDATE.').bold(true).red())
            text.add(1, Text.of('Hold Shift to see more info').gray())
        } else {
            text.add(1, Text.red('Go and try to trade these in with the diglett'))
            text.add(2, Text.red('at the pokemart at spawn. If the trade doesn\'t work:'))
            text.add(3, Text.red('Please contact a mod in the discord to do the swap'))
        }
    })
})