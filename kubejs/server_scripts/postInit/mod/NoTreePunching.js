ServerEvents.recipes(event => {
  event.remove({ type: 'minecraft:furnace', input: 'notreepunching:pottery'})

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for(int i = 1; i < 35; i++){
  //     crafting.remove("notreepunching:saw_planks_" + i.toString());
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  //     crafting.remove("notreepunching:saw_log_sticks");
});