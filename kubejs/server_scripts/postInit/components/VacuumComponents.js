ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:assembler', input: 'susy:component.glass.tube' && '#forge:bolts/steel' && '#forge:wires/gt_single_annealed_copper' && safeFluidOf('gtceu:red_alloy')})
  event.remove({ type: 'gtceu:assembler', input: 'susy:component.glass.tube' && '#forge:bolts/steel' && '#forge:wires/gt_single_copper' && safeFluidOf('gtceu:red_alloy')})
  event.remove({ type: 'gtceu:assembler', input: 'susy:component.glass.tube' && '#forge:bolts/steel' && '#forge:wires/gt_single_copper' && 'susy:circuit.integrated'})

  event.recipes.susy.VACUUM_RECIPES('9kzqqr2eb5lqxu') // remapped from original line 37
    .itemInputs(metaitem('component.glass.tube'))
    .itemInputs(metaitem('vacuum_tube_components'))
    .itemInputs('1x #forge:rings/steel')
    .itemOutputs(metaitem('circuit.vacuum_tube'))
    .EUt(7)
    .duration(200)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.recipes.recipeproperties.RecipeProperty;
  // import gregtech.api.recipes.RecipeBuilder;
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // import gregtech.*
  // crafting.remove("gregtech:vacuum_tube")
  // crafting.addShaped("vacuum_tube_components", metaitem('vacuum_tube_components') * 4, [
  //     [null, metaitem('wireFineRedAlloy'), null],
  //     [metaitem('wireGtSingleCopper'), metaitem('ringSteel'), metaitem('wireGtSingleCopper')],
  //     [null, metaitem('boltSteel'), null]
  // ])
  // crafting.addShaped("vacuum_tube_components_annealed", metaitem('vacuum_tube_components') * 6, [
  //     [null, metaitem('wireFineRedAlloy'), null],
  //     [metaitem('wireGtSingleAnnealedCopper'), metaitem('ringSteel'), metaitem('wireGtSingleAnnealedCopper')],
  //     [null, metaitem('boltSteel'), null]
  // ])
  // def ASSEMBLER_RECIPES = recipemap('assembler')
  // def VACUUM_RECIPES = recipemap('vacuum_chamber')
});