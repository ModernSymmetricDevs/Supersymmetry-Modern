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

  event.recipes.susy.fluidized_bed_reactor('cky5oqo23unfem') // remapped from original line 14
    .inputFluids(safeFluidOf('gtceu:chloromethane', 2000))
    .notConsumable('1x #forge:dusts/cuprous_oxide')
    .itemInputs('1x #forge:dusts/silicon')
    .outputFluids(safeFluidOf('susy:organosilicon_mixture', 2000))
    .duration(160)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('yqefsmsknwjjtx') // remapped from original line 23
    .inputFluids(safeFluidOf('susy:organosilicon_mixture', 1000))
    .outputFluids(safeFluidOf('gtceu:dimethyldichlorosilane', 800))
    .outputFluids(safeFluidOf('susy:methyltrichlorosilane', 100))
    .outputFluids(safeFluidOf('gtceu:methyldichlorosilane', 50))
    .outputFluids(safeFluidOf('susy:chlorotrimethylsilane', 50))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.susy.continuous_stirred_tank_reactor('gygfhhgmse8xi0') // remapped from original line 38
    .inputFluids(safeFluidOf('gtceu:dimethyldichlorosilane', 50))
    .inputFluids(safeFluidOf('minecraft:water', 125))
    .outputFluids(safeFluidOf('susy:impure_polydimethylsiloxane_mixture', 75))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 50))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.phase_separator('hcnxyaohj1chop') // remapped from original line 47
    .inputFluids(safeFluidOf('susy:impure_polydimethylsiloxane_mixture', 1500))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 500))
    .outputFluids(safeFluidOf('susy:raw_polydimethylsiloxane_mixture', 1000))
    .duration(200)

  event.recipes.gtceu.MIXER('boilmanhtldhlu') // remapped from original line 54
    .inputFluids(safeFluidOf('susy:raw_polydimethylsiloxane_mixture', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 500))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 500))
    .outputFluids(safeFluidOf('gtceu:polydimethylsiloxane', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.polymerization_tank('2gok6psr5ac16q') // remapped from original line 63
    .inputFluids(safeFluidOf('gtceu:polydimethylsiloxane', 1000))
    .inputFluids(safeFluidOf('susy:di_tert_butyl_peroxide', 50))
    .itemInputs('1x #forge:dusts/silicon_dioxide')
    .outputFluids(safeFluidOf('gtceu:silicone_rubber', 144))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.polymerization_tank('nx6hxnyzofn8kk') // remapped from original line 72
    .inputFluids(safeFluidOf('gtceu:polydimethylsiloxane', 1000))
    .inputFluids(safeFluidOf('susy:di_tert_butyl_peroxide', 50))
    .itemInputs('1x #forge:dusts/carbon')
    .outputFluids(safeFluidOf('gtceu:silicone_rubber', 144))
    .duration(100)
    .EUt(voltAmps[3])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // FLUIDIZED_BED_REACTOR = recipemap('fluidized_bed_reactor')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // CENTRIFUGE = recipemap('centrifuge')
  // ROASTER = recipemap('roaster')
  // PHASE_SEPARATOR = recipemap('phase_separator')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // POLYMERIZATION = recipemap('polymerization_tank')
});