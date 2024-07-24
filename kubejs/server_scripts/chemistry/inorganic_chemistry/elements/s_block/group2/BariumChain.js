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

  event.recipes.gtceu.mixer('obo4zyv41ku4gm') // remapped from original line 18
    .itemInputs('8x #forge:dusts/impure_barite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_barite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('v518l29uulq6md') // remapped from original line 26
    .inputFluids(safeFluidOf('susy:impure_barite_slurry', 2000))
    .notConsumable(safeFluidOf('susy:methyl_isobutyl_carbinol', 100))
    .notConsumable(safeFluidOf('susy:lauric_acid', 100))
    .outputFluids(safeFluidOf('susy:barite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:granite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('yj0zrz3m7wawxf') // remapped from original line 36
    .inputFluids(safeFluidOf('susy:barite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/barite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.centrifuge('un3m7qnuajtpoz') // remapped from original line 44
    .inputFluids(safeFluidOf('susy:granite_tailing_slurry', 1000))
    .itemOutputs('2x #forge:dusts/granite_tailings')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.mixer('4nyxpgk69s1hcw') // remapped from original line 67
    .itemInputs('4x #forge:dusts/impure_barium_sulfide')
    .inputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    .itemOutputs('2x #forge:dusts/barium_residue')
    .outputFluids(safeFluidOf('susy:impure_barium_sulfide_solution', 1000))
    .EUt(voltAmps[1])
    .duration(100)

  event.recipes.susy.batch_reactor('kxizdrlv1qtzct') // remapped from original line 76
    .itemInputs('2x #forge:dusts/barium_residue')
    .inputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .outputFluids(safeFluidOf('susy:impure_barium_sulfide_solution', 1000))
    .itemOutputs('1x #forge:dusts/silicon_dioxide')
    .EUt(voltAmps[1])
    .duration(100)

  event.recipes.susy.crystallizer('k5zlkgkt9s824l') // remapped from original line 86
    .inputFluids(safeFluidOf('susy:impure_barium_sulfide_solution', 1000))
    .itemOutputs('2x #forge:dusts/barium_sulfide')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(100)

  event.recipes.susy.batch_reactor('ph2m3opx6dv9s4') // remapped from original line 94
    .itemInputs('2x #forge:dusts/barium_sulfide')
    .itemInputs('6x #forge:dusts/soda_ash')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 4000))
    .itemOutputs('5x #forge:dusts/barium_carbonate')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .EUt(voltAmps[1])
    .duration(100)

  event.recipes.susy.batch_reactor('3aeo9hghr6pxe8') // remapped from original line 105
    .itemInputs('2x #forge:dusts/barium_sulfide')
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .itemOutputs('5x #forge:dusts/barium_carbonate')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(100)

  event.recipes.susy.batch_reactor('hbrq5glktm937e') // remapped from original line 116
    .itemInputs('5x #forge:dusts/barium_carbonate')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .outputFluids(safeFluidOf('susy:barium_chloride_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(voltAmps[1])
    .duration(100)

  event.recipes.gtceu.distillery('u9engogjvidsid') // remapped from original line 125
    .inputFluids(safeFluidOf('susy:barium_chloride_solution', 1000))
    .itemOutputs('3x #forge:dusts/barium_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .EUt(voltAmps[1])
    .duration(100)

  event.recipes.susy.reaction_furnace('9sxcgzq6gcbafz') // remapped from original line 133
    .itemInputs('2x #forge:dusts/any_purity_aluminium')
    .itemInputs('6x #forge:dusts/barium_oxide')
    .itemOutputs('3x #forge:dusts/barium')
    .itemOutputs('5x #forge:dusts/alumina')
    .EUt(voltAmps[2])
    .duration(100)

  event.recipes.susy.roaster('pxxgcu6iv59zqq') // remapped from original line 142
    .itemInputs('5x #forge:dusts/witherite')
    .itemOutputs('2x #forge:dusts/barium_oxide')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.susy.roaster('m3i5rvdjt7up5k') // remapped from original line 150
    .itemInputs('5x #forge:dusts/barium_carbonate')
    .itemOutputs('2x #forge:dusts/barium_oxide')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(voltAmps[3])
    .duration(20)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (fuel in rotary_kiln_fuels) {
  //     for (comburent in rotary_kiln_comburents) {
  //         ROTARY_KILN.recipeBuilder()
  //             .inputs(ore('dustBarite'))
  //             .inputs(ore('dustAnyPurityCarbon') * 2)
  //             .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //             .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //             .outputs(metaitem('dustImpureBariumSulfide') * 2)
  //             .fluidOutputs(fluid('carbon_dioxide') * 2025)
  //             .EUt(Globals.voltAmps[1])
  //             .duration(fuel.duration + comburent.duration)
  //             .buildAndRegister()
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.SinteringGlobals.*
  // FLOTATION = recipemap('froth_flotation')
  // ROASTER = recipemap('roaster')
  // BR = recipemap('batch_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // DISTILLERY = recipemap('distillery')
  // MIXER = recipemap('mixer')
  // CLARIFIER = recipemap('clarifier')
  // CENTRIFUGE = recipemap('centrifuge')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // ROTARY_KILN = recipemap('rotary_kiln')
  // CRYSTALLIZER = recipemap('crystallizer')
});