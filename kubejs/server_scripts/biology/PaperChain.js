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

  event.recipes.gtceu.autoclave('jum4jujahl7ssu') // remapped from original line 10
    .itemInputs('1x #forge:dusts/wood')
    .inputFluids(safeFluidOf('susy:white_liquor', 1000))
    .itemOutputs('1x #forge:dusts/raw_cellulose')
    .outputFluids(safeFluidOf('susy:black_liquor', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.autoclave('gdqnl4aqiyydls') // remapped from original line 19
    .itemInputs(metaitem('stem.cotton') * 5)
    .inputFluids(safeFluidOf('susy:white_liquor', 1000))
    .itemOutputs('1x #forge:dusts/raw_cellulose')
    .outputFluids(safeFluidOf('susy:black_liquor', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.chemical_bath('vyx17nrnxttxo4') // remapped from original line 28
    .itemInputs('1x #forge:dusts/raw_cellulose')
    .inputFluids(safeFluidOf('minecraft:water', 250))
    .itemOutputs('1x #forge:dusts/cellulose')
    .outputFluids(safeFluidOf('susy:black_liquor', 250))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.chemical_bath('dbdieqenryih1m') // remapped from original line 37
    .itemInputs('1x #forge:dusts/cellulose')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs(safeItemId('8x minecraft:paper'))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.chemical_bath('vwpu4lwunqd0ur') // remapped from original line 45
    .itemInputs('1x #forge:dusts/cellulose')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .itemOutputs(safeItemId('8x minecraft:paper'))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('bbj1srwlrxmvdj') // remapped from original line 53
    .inputFluids(safeFluidOf('susy:black_liquor', 1250))
    .outputFluids(safeFluidOf('susy:concentrated_black_liquor', 1000))
    .outputFluids(safeFluidOf('gtceu:resin', 250))
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('hfdpqgpht6gpxq') // remapped from original line 61
    .itemInputs('2x #forge:dusts/carbon')
    .inputFluids(safeFluidOf('susy:concentrated_black_liquor', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .outputFluids(safeFluidOf('susy:green_liquor', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('blmh38e38ciqa3') // remapped from original line 70
    .itemInputs('2x #forge:dusts/quicklime')
    .inputFluids(safeFluidOf('susy:green_liquor', 1000))
    .itemOutputs('5x #forge:dusts/limestone')
    .outputFluids(safeFluidOf('susy:white_liquor', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.mixer('vvrq6dpkmviopl') // remapped from original line 79
    .itemInputs('3x #forge:dusts/sodium_sulfide')
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:white_liquor', 1000))
    .duration(200)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // AUTOCLAVE = recipemap('autoclave')
  // ROASTER = recipemap('roaster')
  // BR = recipemap('batch_reactor')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // DT = recipemap('distillation_tower')
  // MIXER = recipemap('mixer')
});