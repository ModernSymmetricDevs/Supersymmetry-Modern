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

  event.recipes.gtceu.autoclave('mnmhtjuosqpyw9') // remapped from original line 15
    .itemInputs(metaitem('anode_slime.copper'))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 400))
    .inputFluids(safeFluidOf('gtceu:oxygen', 400))
    .itemOutputs(metaitem('anode_slime.decopperized'))
    .outputFluids(safeFluidOf('susy:copper_sulfate_solution', 400))
    .duration(120)
    .EUt(120)

  event.recipes.gtceu.mixer('11rwbldg1yhwyz') // remapped from original line 25
    .itemInputs(metaitem('anode_slime.decopperized') * 5)
    .itemInputs('6x #forge:dusts/soda_ash')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:copper_anode_slime_paste', 1000))
    .duration(600)
    .EUt(30)

  event.recipes.susy.roaster('uyi1kwx9kk1aor') // remapped from original line 34
    .inputFluids(safeFluidOf('susy:copper_anode_slime_paste', 1000))
    .itemOutputs('1x #forge:dusts/selenium_tellurium_concentrate') // 0.75 Na2SeO4, 0.25 Na2TeO4, 2 Ag/Au
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .duration(600)
    .EUt(120)

  event.recipes.gtceu.chemical_bath('t2xsaz5g0iubda') // remapped from original line 42
    .itemInputs('1x #forge:dusts/selenium_tellurium_concentrate')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 750))
    .itemOutputs('1x #forge:dusts/tellurium_residue') // 0.25 Na2TeO4, 2 Ag/Au
    .outputFluids(safeFluidOf('susy:sodium_selenate_solution', 750))
    .duration(600)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('a572iomnwhn8qq') // remapped from original line 51
    .inputFluids(safeFluidOf('susy:sodium_selenate_solution', 50))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 100))
    .outputFluids(safeFluidOf('susy:sodium_selenite_solution', 200))
    .outputFluids(safeFluidOf('gtceu:chlorine', 100))
    .duration(30)
    .EUt(30)

  event.recipes.susy.batch_reactor('kg4vsktekvnwk0') // remapped from original line 60
    .inputFluids(safeFluidOf('susy:sodium_selenite_solution', 4000))
    .inputFluids(safeFluidOf('gtceu:sulfur_dioxide', 2000))
    .itemOutputs('1x #forge:dusts/selenium')
    .outputFluids(safeFluidOf('susy:acidic_wastewater', 3000))
    .duration(6)
    .EUt(30)

  event.recipes.susy.high_temperature_distillation('eunjxyyxg7uigo') // remapped from original line 71
    .itemInputs('1x #forge:dusts/selenium')
    .outputFluids(safeFluidOf('gtceu:selenium', 60))
    .outputFluids(safeFluidOf('susy:high_purity_selenium', 72))
    .duration(500)
    .EUt(240)

  event.recipes.gtceu.fluid_solidifier('m1m7ssdrgnnqoy') // remapped from original line 82
    .inputFluids(safeFluidOf('gtceu:selenium', 144))
    .itemOutputs('1x #forge:dusts/selenium')
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.fluid_solidifier('5smizeusbebz0r') // remapped from original line 89
    .inputFluids(safeFluidOf('susy:high_purity_selenium', 144))
    .itemOutputs('1x #forge:dusts/high_purity_selenium')
    .duration(20)
    .EUt(30)

  event.recipes.susy.reaction_furnace('c9diui5orxtgds') // remapped from original line 96
    .itemInputs('1x #forge:dusts/selenium')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .outputFluids(safeFluidOf('susy:hydrogen_selenide', 1000))
    .duration(100)
    .EUt(240)

  event.recipes.susy.roaster('nwjqnnoywssyeh') // remapped from original line 104
    .inputFluids(safeFluidOf('susy:hydrogen_selenide', 1000))
    .chancedOutput('9900x #forge:dusts/high_purity_selenium', 9900, 0)
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .duration(100)
    .EUt(240)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // AUTOCLAVE = recipemap("autoclave")
  // MIXER = recipemap("mixer")
  // ROASTER = recipemap("roaster")
  // CHEMICAL_BATH = recipemap("chemical_bath")
  // BR = recipemap("batch_reactor")
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // BCR = recipemap("bubble_column_reactor")
  // HT_DISTILLATION_TOWER = recipemap('high_temperature_distillation')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // FLUID_SOLIDIFIER = recipemap('fluid_solidifier')
  //     //.chancedOutput(metaitem('dustSelenium'), 4000, 0)
  //     //.chancedOutput(metaitem('dustHighPuritySelenium'), 5000, 0)
  //     //.chancedOutputLogic(ChancedOutputLogic.XOR)
});