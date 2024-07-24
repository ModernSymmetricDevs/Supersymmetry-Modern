const voltageTiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"];
const voltageTiersInt = [8, 32, 128, 512, 2048, 8192, 32768, 131072, 524288, 2097152, 8388608, 33554432, 134217728, 536870912, 2147483647];
const voltAmps = [7, 30, 120, 480, 1920, 7680, 30720, 122880, 491520, 1966080, 7864320, 31457280, 125829120, 503316480, 2013265920];

function safeFluidOf(fluidId, amount) {
    if (Fluid.exists(fluidId)) {
        return Fluid.of(fluidId, amount);
    }
    throw new Error(`Fluid ${fluidId} does not exist.`);
}
function safeItemId(itemIdWithQuantifier) {
    const itemId = itemIdWithQuantifier.split(" ")[1];
    if (Item.exists(itemId)) {
        return itemIdWithQuantifier;
    }
    throw new Error(`ItemId ${itemId} does not exist.`);
}

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