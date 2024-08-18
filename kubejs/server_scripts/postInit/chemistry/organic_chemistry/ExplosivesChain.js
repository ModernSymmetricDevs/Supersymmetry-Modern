ServerEvents.recipes(event => {

  event.recipes.susy.weapons_factory('hfiswext7jxxci') // remapped from original line 7
    .itemInputs(safeItemId('1x minecraft:paper'))
    .itemInputs(safeItemId('1x minecraft:string'))
    .inputFluids(safeFluidOf('gtceu:glyceryl_trinitrate', 100))
    .itemOutputs(safeItemId('4x susy:dynamite'))
    .EUt(30)
    .duration(60)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // def WEAPONS_FACTORY = recipemap('weapons_factory');
});