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

  event.recipes.gtceu.mixer('5bjemakaqkx9bc') // remapped from original line 8
    .itemInputs('8x #forge:dusts/impure_cinnabar')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_cinnabar_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('pgftcgi5peqpzr') // remapped from original line 16
    .inputFluids(safeFluidOf('susy:impure_cinnabar_slurry', 2000))
    .notConsumable('1x #forge:dusts/potassium_butyl_xanthate')
    .notConsumable('9x #forge:dusts/lead_nitrate')
    .outputFluids(safeFluidOf('susy:pegmatite_tailing_slurry', 1000))
    .outputFluids(safeFluidOf('susy:cinnabar_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('9xyjmvo0r1lpx6') // remapped from original line 26
    .inputFluids(safeFluidOf('susy:cinnabar_slurry', 1000))
    .itemOutputs('16x #forge:dusts/cinnabar')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.roaster('4vcu7sipo4xocl') // remapped from original line 34
    .itemInputs('1x #forge:dusts/cinnabar')
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .outputFluids(safeFluidOf('gtceu:mercury', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .duration(60)
    .EUt(voltAmps[1])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // ROASTER = recipemap('roaster')
  // FLOTATION = recipemap('froth_flotation')
  // MIXER = recipemap('mixer')
  // CLARIFIER = recipemap('clarifier')
});