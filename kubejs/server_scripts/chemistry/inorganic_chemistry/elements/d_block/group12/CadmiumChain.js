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

  event.recipes.susy.batch_reactor('j37hhrpjfuiwbg') // remapped from original line 4
    .itemInputs('1x #forge:dusts/zinc_flue')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemOutputs('1x #forge:dusts/ash')
    .outputFluids(safeFluidOf('susy:impure_cadmium_sulfate_solution', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.susy.batch_reactor('zcfdboo2fblhr6') // remapped from original line 13
    .itemInputs('2x #forge:dusts/salt')
    .inputFluids(safeFluidOf('susy:impure_cadmium_sulfate_solution', 10000))
    .itemOutputs('2x #forge:dusts/thallium_i_chloride')
    .outputFluids(safeFluidOf('susy:cadmium_sulfate_solution', 10000))
    .EUt(30)
    .duration(20)

  event.recipes.susy.batch_reactor('oa9ldvefguxwn7') // remapped from original line 23
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('30x #forge:dusts/copper_cadmium_residue')
    .outputFluids(safeFluidOf('susy:cadmium_sulfate_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .itemOutputs('2x #forge:dusts/copper')
    .EUt(30)
    .duration(160)

  event.recipes.susy.batch_reactor('egfwjpwzlnfwvl') // remapped from original line 34
    .itemInputs('1x #forge:dusts/zinc')
    .inputFluids(safeFluidOf('susy:cadmium_sulfate_solution', 1000))
    .chancedOutput(metaitem('sponge.cadmium'), 9000, 0)
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.batch_reactor('nivdszfaxfa11r') // remapped from original line 44
    .itemInputs(metaitem('sponge.cadmium'))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:air', 4000))
    .outputFluids(safeFluidOf('susy:purified_cadmium_solution', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.ELECTROLYTIC_CELL('scxe2g1cbts9ir') // remapped from original line 53
    .notConsumable('1x #forge:rods/lead')
    .notConsumable('1x #forge:plates/aluminium')
    .inputFluids(safeFluidOf('susy:purified_cadmium_solution', 1000))
    .itemOutputs('1x #forge:dusts/cadmium')
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .EUt(30)
    .duration(160)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // BR = recipemap('batch_reactor')
});