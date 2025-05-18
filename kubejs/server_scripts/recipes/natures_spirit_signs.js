ServerEvents.recipes(event => {
    event.remove({ id: /natures_spirit:.*_sign/g })
    event.remove({ id: /natures_spirit:.*_hanging_sign/g })
})


