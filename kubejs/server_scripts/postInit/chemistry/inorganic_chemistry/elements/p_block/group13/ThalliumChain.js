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

  event.recipes.susy.batch_reactor('bskjtbhgnop9bg') // remapped from original line 5
    .itemInputs('4x #forge:dusts/thallium_i_chloride')
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .outputFluids(safeFluidOf('susy:acidic_thallium_sulfate_solution', 1000) HCl 
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.distillation_tower('jhhjrrbmiy8dmg') // remapped from original line 13
    .inputFluids(safeFluidOf('susy:acidic_thallium_sulfate_solution', 1000))
    .outputFluids(safeFluidOf('susy:thallium_sulfate_solution', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.electrolytic_cell('4woiojukqtadsa') // remapped from original line 21
    .notConsumable('1x #forge:rods/platinum')
    .notConsumable(metaitem('graphite_electrode'))
    .inputFluids(safeFluidOf('susy:thallium_sulfate_solution', 1000))
    .itemOutputs('1x #forge:dusts/thallium')
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .EUt(30)
    .duration(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // BR = recipemap('batch_reactor')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
});