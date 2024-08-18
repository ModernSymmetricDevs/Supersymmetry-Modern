ServerEvents.recipes(event => {

  event.recipes.gtceu.forming_press('2kmja8tdbagxwd') // remapped from original line 10
    .itemInputs(safeItemId('1x susy:shape.empty'))
    .notConsumable(safeItemId('1x susy:shape.mold.rod'))
    .itemOutputs(safeItemId('1x susy:shape.mold.rod'))
    .duration(120)
    .EUt(22)

  event.recipes.gtceu.forming_press('aclblysvurppoe') // remapped from original line 25
    .itemInputs(safeItemId('1x susy:shape.empty'))
    .notConsumable(safeItemId('1x susy:shape.mold.crucible'))
    .itemOutputs(safeItemId('1x susy:shape.mold.crucible'))
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