ServerEvents.recipes(event => {

  event.recipes.susy.ROASTER_RECIPES('valfqtsw1rhrob') // remapped from original line 10
    .itemInputs('2x #forge:dusts/pyrite')
    .itemOutputs('1x #forge:dusts/iron_iii_sulfate')
    .itemOutputs('1x #forge:dusts/sulfur')
    .duration(80)
    .EUt(7)

  event.recipes.susy.ROASTER_RECIPES('lydzcl0sj0dyie') // remapped from original line 18
    .itemInputs('1x #forge:dusts/iron_iii_sulfate')
    .itemOutputs('1x #forge:dusts/banded_iron')
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 3000))
    .duration(160)
    .EUt(7)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // def ROASTER_RECIPES = recipemap('roaster');
});