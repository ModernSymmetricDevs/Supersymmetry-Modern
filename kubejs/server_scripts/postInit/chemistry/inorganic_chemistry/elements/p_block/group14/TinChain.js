ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('susy:crude_tin')})

  event.recipes.gtceu.mixer('h3oa1piiq86xr3') // remapped from original line 20
    .itemInputs('8x #forge:dusts/impure_cassiterite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_cassiterite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('ntzxsxwdl05liz') // remapped from original line 28
    .inputFluids(safeFluidOf('susy:impure_cassiterite_slurry', 2000))
    .notConsumable('1x #forge:dusts/sodium_fluorosilicate')
    .notConsumable(safeFluidOf('susy:oleic_acid', 144))
    .notConsumable(safeFluidOf('susy:methyl_isobutyl_carbinol', 100))
    .outputFluids(safeFluidOf('susy:cassiterite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:limestone_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('yxxmtnuj9rg9kl') // remapped from original line 39
    .inputFluids(safeFluidOf('susy:cassiterite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/cassiterite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.centrifuge('9qyi1p8vch4gen') // remapped from original line 47
    .inputFluids(safeFluidOf('susy:limestone_tailing_slurry', 1000))
    .itemOutputs('2x #forge:dusts/limestone_tailings')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.electromagnetic_separator('jeyvifjwt8ccqk') // remapped from original line 55
    .itemInputs('1x #forge:dusts/cassiterite')
    .itemOutputs('1x #forge:dusts/concentrate_cassiterite')
    .chancedOutput('2500x #forge:dusts/hematite', 2500, 0)
    .EUt(7)
    .duration(100)

  event.recipes.gtceu.chemical_bath('x4bku0u2j2fgsi') // remapped from original line 63
    .itemInputs('1x #forge:dusts/concentrate_cassiterite')
    .inputFluids(safeFluidOf('susy:ammonia_solution', 120))
    .outputFluids(safeFluidOf('susy:ammonium_tungstate_solution', 60))
    .itemOutputs('1x #forge:dusts/leached_cassiterite_concentrate')
    .EUt(1920)
    .duration(100)

  event.recipes.gtceu.centrifuge('aqqyalkecc119t') // remapped from original line 97
    .inputFluids(safeFluidOf('susy:tin_dross', 100))
    .outputFluids(safeFluidOf('susy:crude_tin', 85))
    .outputFluids(safeFluidOf('gtceu:iron', 15))
    .EUt(30)
    .duration(80)

  event.recipes.gtceu.fluid_solidifier('jsglrofcyeqxtq') // remapped from original line 105
    .notConsumable(metaitem('shape.mold.ingot'))
    .inputFluids(safeFluidOf('susy:crude_tin', 216))
    .itemOutputs('1x #forge:ingots/tin')
    .EUt(7)
    .duration(20)

  event.recipes.gtceu.fluid_solidifier('tezd3nnu1zyadz') // remapped from original line 113
    .notConsumable(metaitem('shape.mold.ingot'))
    .inputFluids(safeFluidOf('susy:decopperized_tin', 180))
    .itemOutputs('1x #forge:ingots/tin')
    .EUt(7)
    .duration(20)

  event.recipes.gtceu.autoclave('v1ofomqdmofkeo') // remapped from original line 121
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .inputFluids(safeFluidOf('susy:hot_hp_oxygen', 1000))
    .itemInputs('1x #forge:dusts/tin')
    .itemOutputs('2x #forge:dusts/purified_tin_ii_oxide')
    .EUt(480)
    .duration(120)

  event.recipes.susy.roaster('gfdozrw52cdy2x') // remapped from original line 130
    .itemInputs('2x #forge:dusts/purified_tin_ii_oxide')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .itemOutputs('1x #forge:dusts/high_purity_tin')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .EUt(120)
    .duration(120)

  event.recipes.gtceu.centrifuge('er87ocxalzllij') // remapped from original line 139
    .itemInputs('1x #forge:dusts/any_purity_sulfur')
    .inputFluids(safeFluidOf('susy:crude_tin', 5760))
    .outputFluids(safeFluidOf('susy:decopperized_tin', 5760))
    .itemOutputs('2x #forge:dusts/copper_monosulfide')
    .EUt(30)
    .duration(300)

  event.recipes.susy.roaster('wgali7rutdnxch') // remapped from original line 148
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .itemInputs('2x #forge:dusts/copper_monosulfide')
    .itemOutputs('1x #forge:dusts/copper')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.crystallizer('glgzeemsnm67wm') // remapped from original line 157
    .inputFluids(safeFluidOf('susy:decopperized_tin', 2880))
    .notConsumable('1x #forge:wires/fine_aluminium')
    .chancedOutput('500x #forge:dusts/antimony', 500, 0)
    .chancedOutput('500x #forge:dusts/bismuth', 500, 0)
    .outputFluids(safeFluidOf('gtceu:tin', 2880))
    .EUt(30)
    .duration(160)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (combustible in combustibles()) {
  //     REACTION_FURNACE.recipeBuilder()
  //             .inputs(ore('dustConcentrateCassiterite'))
  //             .inputs(ore(combustible.name) * combustible.equivalent(2))
  //             .outputs(metaitem(combustible.byproduct))
  //             .fluidOutputs(fluid('crude_tin') * 190)
  //             .fluidOutputs(fluid('tin_dross') * 25)
  //             .fluidOutputs(fluid('carbon_dioxide') * 1000)
  //             .EUt(120)
  //             .duration(160)
  //             .buildAndRegister()
  // 
  //     REACTION_FURNACE.recipeBuilder()
  //             .inputs(ore('dustLeachedCassiteriteConcentrate'))
  //             .inputs(ore(combustible.name) * combustible.equivalent(2))
  //             .outputs(metaitem(combustible.byproduct))
  //             .fluidOutputs(fluid('crude_tin') * 190)
  //             .fluidOutputs(fluid('tin_dross') * 25)
  //             .fluidOutputs(fluid('carbon_dioxide') * 1000)
  //             .EUt(120)
  //             .duration(160)
  //             .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.CarbonGlobals.*
  // AUTOCLAVE = recipemap('autoclave')
  // ROASTER = recipemap('roaster')
  // FLOTATION = recipemap('froth_flotation')
  // EM_SEPARATOR = recipemap('electromagnetic_separator')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // FLUID_SOLIDIFIER = recipemap('fluid_solidifier')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // CENTRIFUGE = recipemap('centrifuge')
  // CRYSTALLIZER = recipemap('crystallizer')
  // MIXER = recipemap('mixer')
  // CLARIFIER = recipemap('clarifier')
});