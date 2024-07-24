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

  event.recipes.susy.bubble_column_reactor('sswlbtzy9zmvom') // remapped from original line 8
    .inputFluids(safeFluidOf('susy:phosgene', 50))
    .inputFluids(safeFluidOf('susy:dichloromethane', 50))
    .outputFluids(safeFluidOf('susy:phosgene_solution', 100))
    .EUt(480)
    .duration(3)

  event.recipes.susy.continuous_stirred_tank_reactor('pyoyh6q588wzoo') // remapped from original line 16
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 100))
    .inputFluids(safeFluidOf('gtceu:bisphenol_a', 50))
    .outputFluids(safeFluidOf('susy:sodium_bisphenolate_solution', 100))
    .EUt(480)
    .duration(3)

  event.recipes.susy.continuous_stirred_tank_reactor('do6io1h1hei6oj') // remapped from original line 24
    .inputFluids(safeFluidOf('susy:phosgene_solution', 100))
    .inputFluids(safeFluidOf('susy:sodium_bisphenolate_solution', 100))
    .outputFluids(safeFluidOf('susy:oligomeric_bisphenol_solution', 50))
    .outputFluids(safeFluidOf('gtceu:salt_water', 100))
    .EUt(480)
    .duration(3)

  event.recipes.susy.polymerization_tank('ucaerfwjbbscw4') // remapped from original line 33
    .inputFluids(safeFluidOf('susy:oligomeric_bisphenol_solution', 4000))
    .inputFluids(safeFluidOf('susy:triethylamine', 1000))
    .itemOutputs('8x #forge:dusts/polycarbonate')
    .outputFluids(safeFluidOf('susy:triethylamine_solution', 5000))
    .EUt(480)
    .duration(60)

  event.recipes.gtceu.distillation_tower('gfw7lwcyfolcwl') // remapped from original line 42
    .inputFluids(safeFluidOf('susy:triethylamine_solution', 5000))
    .outputFluids(safeFluidOf('susy:triethylamine', 1000))
    .outputFluids(safeFluidOf('susy:dichloromethane', 4000))
    .EUt(480)
    .duration(60)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // BCR = recipemap('bubble_column_reactor')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // POLYMERIZATION = recipemap('polymerization_tank')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
});