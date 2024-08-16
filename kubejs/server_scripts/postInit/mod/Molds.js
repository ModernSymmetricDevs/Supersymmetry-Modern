ServerEvents.recipes(event => {

  event.recipes.susy.FORMINGPRESS('fgt22f2i0asby2') // remapped from original line 10
    .itemInputs(metaitem('shape.empty'))
    .notConsumable(metaitem('shape.mold.rod'))
    .itemOutputs(metaitem('shape.mold.rod'))
    .duration(120)
    .EUt(22)

  event.recipes.susy.FORMINGPRESS('ovpc0ikvsogwbp') // remapped from original line 25
    .itemInputs(metaitem('shape.empty'))
    .notConsumable(metaitem('shape.mold.crucible'))
    .itemOutputs(metaitem('shape.mold.crucible'))
    .duration(120)
    .EUt(22)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def FORMINGPRESS = recipemap('forming_press')
  // crafting.addShaped("mold_rod", metaitem('shape.mold.rod'), [
  //     [metaitem('shape.empty'), item('gregtech:hammer'), null],
  //     [null, null, null],
  //     [null, null, null]
  // ])
  // crafting.addShaped("mold_crucible", metaitem('shape.mold.crucible'), [
  //     [metaitem('shape.empty'), null, null],
  //     [null, null, null],
  //     [null, null, item('gregtech:hammer')]
  // ])
});