ItemEvents.rightClicked(event => {
    if (event.item == 'cobgyms:gym_key') {
        event.cancel()
    }
})

BlockEvents.rightClicked(event => {
    switch (event.block) {
        case 'cobgyms:gym_entrance':
        case 'cobgyms:gym_entrance_woodland':
        case 'cobgyms:gym_entrance_volcanic':
        case 'cobgyms:gym_entrance_aquatic':
        {
            event.cancel()
        }
    }
})