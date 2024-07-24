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

  event.recipes.susy.electrostatic_separator('dhi37dnp5s8bo2') // remapped from original line 8
    .notConsumable(metaitem('item_filter'))
    .inputFluids(safeFluidOf('susy:molybdenite_flue_gas', 2000))
    .chancedOutput('5000x #forge:dusts/rhenium_rich_flue', 5000, 0)
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 2000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('3rdfm4jmn25pjs') // remapped from original line 17
    .itemInputs('1x #forge:dusts/rhenium_rich_flue')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 50))
    .itemOutputs('1x #forge:dusts/ash')
    .outputFluids(safeFluidOf('susy:scrubbed_perrhenate_solution', 50))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.ion_exchange_column('wrmhkokdefsm2h') // remapped from original line 26
    .itemInputs(metaitem('beads.rhenium_ion_exchange'))
    .inputFluids(safeFluidOf('susy:scrubbed_perrhenate_solution', 1000))
    .itemOutputs(metaitem('beads.loaded_rhenium_ion_exchange'))
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(200)
    .EUt(voltAmps[4])

  event.recipes.susy.batch_reactor('4g9qg5siivb2w1') // remapped from original line 35
    .itemInputs(metaitem('beads.loaded_rhenium_ion_exchange'))
    .inputFluids(safeFluidOf('susy:ammonia_solution', 1000))
    .itemOutputs(metaitem('beads.rhenium_ion_exchange'))
    .outputFluids(safeFluidOf('susy:ammonium_perrhenate_solution', 1000))
    .duration(200)
    .EUt(voltAmps[3])

  event.recipes.susy.crystallizer('9opkbja0bghcan') // remapped from original line 44
    .inputFluids(safeFluidOf('susy:ammonium_perrhenate_solution', 1000))
    .itemOutputs('10x #forge:dusts/ammonium_perrhenate')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(200)
    .EUt(voltAmps[3])

  event.recipes.susy.REACTION_FURNACE('dh1c5m97ggztoz') // remapped from original line 52
    .itemInputs('10x #forge:dusts/ammonium_perrhenate')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 7000))
    .itemOutputs('1x #forge:dusts/rhenium')
    .outputFluids(safeFluidOf('susy:dense_steam', 4000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .duration(200)
    .EUt(voltAmps[4])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // ELECTROSTATIC_SEPARATOR = recipemap('electrostatic_separator')
  // BR = recipemap('batch_reactor')
  // ION_EXCHANGE = recipemap('ion_exchange_column')
  // CRYSTALLIZER = recipemap('crystallizer')
  //     
});