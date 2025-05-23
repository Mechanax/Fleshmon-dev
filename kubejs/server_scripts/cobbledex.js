ServerEvents.highPriorityData(event => {
    let jsonFolder = global.readJsonFolderFromMod("data", "cobblemon", "spawn_pool_world", (rl => rl.path.contains("tadbulb")))
    console.log(jsonFolder)
})
