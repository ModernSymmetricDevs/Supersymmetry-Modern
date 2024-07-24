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

  event.recipes.susy.LCR('jiba1ixu6xaqv6') // remapped from original line 8
    .inputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 2000))
    .inputFluids(safeFluidOf('susy:sea_water', 128000))
    .outputFluids(safeFluidOf('susy:impure_semiheavy_water', 128000))
    .outputFluids(safeFluidOf('susy:isotopically_pure_hydrogen_sulfide', 2000))
    .circuit(3)

  event.recipes.susy.LCR('iqog8dedwlzms1') // remapped from original line 16
    .inputFluids(safeFluidOf('susy:impure_semiheavy_water', 128000))
    .inputFluids(safeFluidOf('susy:isotopically_pure_hydrogen_sulfide', 2000))
    .outputFluids(safeFluidOf('susy:impure_semiheavy_hydrogen_sulfide', 2000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 128000))
    .circuit(1)

  event.recipes.susy.LCR('yjbzhdyq0zpkwr') // remapped from original line 24
    .inputFluids(safeFluidOf('susy:impure_semiheavy_hydrogen_sulfide', 2000))
    .inputFluids(safeFluidOf('susy:impure_semiheavy_water', 1000))
    .outputFluids(safeFluidOf('susy:semiheavy_hydrogen_sulfide', 2000))
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .circuit(2)

  event.recipes.susy.LCR('7ighxpl25mslbj') // remapped from original line 32
    .inputFluids(safeFluidOf('susy:impure_semiheavy_hydrogen_sulfide', 2000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:impure_semiheavy_water', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 2000))
    .circuit(1)

  event.recipes.susy.LCR('sahlglbnhaifs6') // remapped from original line 40
    .inputFluids(safeFluidOf('susy:semiheavy_hydrogen_sulfide', 2000))
    .inputFluids(safeFluidOf('susy:semiheavy_water', 1000))
    .outputFluids(safeFluidOf('susy:impure_heavy_hydrogen_sulfide', 2000))
    .outputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .circuit(2)

  event.recipes.susy.LCR('up28qab93150lp') // remapped from original line 48
    .inputFluids(safeFluidOf('susy:semiheavy_hydrogen_sulfide', 2000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:semiheavy_water', 2000))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 2000))
    .circuit(1)

  event.recipes.susy.LCR('lbdpgigc4a78nk') // remapped from original line 56
    .inputFluids(safeFluidOf('susy:impure_heavy_hydrogen_sulfide', 2000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:heavy_water', 1000))
    .outputFluids(safeFluidOf('susy:impure_semiheavy_hydrogen_sulfide', 2000))
    .circuit(1)

  event.recipes.gtceu.ELECTROLYZER('odst6oue49nyuh') // remapped from original line 64
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable('1x #forge:rods/iron')
    .inputFluids(safeFluidOf('susy:heavy_water', 1000))
    .outputFluids(safeFluidOf('gtceu:deuterium', 2000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .EUt(30)
    .duration(1500)

  event.recipes.gtceu.ELECTROLYTIC_CELL('d5ef8578l4tnwx') // remapped from original line 74
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable('1x #forge:rods/iron')
    .notConsumable(safeFluidOf('susy:sodium_hydroxide_solution', 50))
    .inputFluids(safeFluidOf('susy:heavy_water', 1000))
    .outputFluids(safeFluidOf('gtceu:deuterium', 2000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .EUt(30)
    .duration(200)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // def LCR = recipemap('large_chemical_reactor');
  // def ELECTROLYZER = recipemap('electrolyzer');
  // def ELECTROLYTIC_CELL = recipemap('electrolytic_cell');
  // 	
});