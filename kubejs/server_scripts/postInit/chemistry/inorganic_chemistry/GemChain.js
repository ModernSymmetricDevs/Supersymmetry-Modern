ServerEvents.recipes(event => {

  event.recipes.susy.cvd('dr6kotpa0xl6bf') // remapped from original line 16
    .notConsumable(metaitem('wafer.silicon'))
    .inputFluids(safeFluidOf('gtceu:methane', 100))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 9900))
    .chancedOutput(metaitem('raw_diamond'), 1000, 0)
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.cutter('apcvkddmltl7pw') // remapped from original line 25
    .itemInputs(metaitem('raw_diamond'))
    .chancedOutput(safeItemId('8000x minecraft:diamond'), 8000, 0)
    .chancedOutput('500x #forge:gems/exquisite_diamond', 500, 0)
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.fluid_solidifier('qf6q9un8e2gh1c') // remapped from original line 33
    .inputFluids(safeFluidOf('susy:alumina', 36))
    .notConsumable(metaitem('shape.mold.ball'))
    .chancedOutput(metaitem('seed_crystal.alumina'), 1000, 1000)
    .duration(200)
    .EUt(120)

  event.recipes.susy.crystallizer('uulalys0x1szpq') // remapped from original line 41
    .itemInputs(metaitem('seed_crystal.alumina'))
    .itemInputs('1x #forge:dusts/chromium_iii_oxide')
    .inputFluids(safeFluidOf('susy:alumina', 4608))
    .itemOutputs(metaitem('boule.ruby'))
    .duration(400)
    .EUt(120)

  event.recipes.gtceu.cutter('qvs1x6pivfgxfn') // remapped from original line 50
    .itemInputs(metaitem('boule.ruby'))
    .itemOutputs(metaitem('seed_crystal.alumina'))
    .itemOutputs('4x #forge:gems/exquisite_ruby')
    .duration(400)
    .EUt(120)

  event.recipes.susy.crystallizer('cwvhr9e3na5u09') // remapped from original line 58
    .itemInputs(metaitem('seed_crystal.alumina'))
    .itemInputs('1x #forge:dusts/tiny_iron_ii_oxide')
    .itemInputs('1x #forge:dusts/tiny_rutile')
    .inputFluids(safeFluidOf('susy:alumina', 4608))
    .itemOutputs(metaitem('boule.sapphire'))
    .duration(400)
    .EUt(120)

  event.recipes.gtceu.cutter('7u2xuwlv2pt6sw') // remapped from original line 68
    .itemInputs(metaitem('boule.sapphire'))
    .itemOutputs(metaitem('seed_crystal.alumina'))
    .itemOutputs('4x #forge:gems/exquisite_sapphire')
    .duration(400)
    .EUt(120)

  event.recipes.gtceu.forge_hammer('zvny2a7mzxu3it') // remapped from original line 76
    .itemInputs(safeItemId('1x minecraft:emerald'))
    .itemOutputs(metaitem('seed_crystal.emerald') * 9)
    .duration(100)
    .EUt(120)

  event.recipes.susy.crystallizer('jbsttokgzp5bnd') // remapped from original line 83
    .itemInputs(metaitem('seed_crystal.emerald'))
    .itemInputs('18x #forge:dusts/silicon_dioxide')
    .inputFluids(safeFluidOf('susy:alumina', 720))
    .inputFluids(safeFluidOf('susy:beryllium_oxide', 432))
    .itemOutputs(metaitem('boule.emerald'))
    .duration(400)
    .EUt(120)

  event.recipes.gtceu.cutter('f3r8ggvrr8nmlq') // remapped from original line 93
    .itemInputs(metaitem('boule.emerald'))
    .itemOutputs(metaitem('seed_crystal.emerald'))
    .itemOutputs('6x #forge:gems/exquisite_emerald')
    .duration(400)
    .EUt(120)

  event.recipes.gtceu.autoclave('vhkdvhm3bvm6nu') // remapped from original line 101
    .itemInputs('5x #forge:dusts/barium_carbonate')
    .itemInputs('3x #forge:dusts/rutile')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('1x #forge:gems/exquisite_barium_titanate')
    .duration(200)
    .EUt(120)

  event.recipes.susy.roaster('ufqicaacqv1dnt') // remapped from original line 112
    .itemInputs('2x #forge:dusts/gallium')
    .inputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .itemOutputs('5x #forge:dusts/gallium_trioxide')
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('qiy8yfvkaigd5x') // remapped from original line 120
    .inputFluids(safeFluidOf('gtceu:phosphoric_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .itemOutputs('12x #forge:dusts/ammonium_dihydrogen_phosphate')
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('cjhw2rrjfoccmu') // remapped from original line 128
    .itemInputs('5x #forge:dusts/gallium_trioxide')
    .itemInputs('24x #forge:dusts/ammonium_dihydrogen_phosphate')
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .itemOutputs('12x #forge:dusts/gallium_phosphate')
    .duration(200)
    .EUt(120)

  event.recipes.susy.tube_furnace('k6tditbpubhmtq') // remapped from original line 140
    .itemInputs('7x #forge:dusts/niobium_oxide')
    .itemInputs('32x #forge:dusts/lithium_oxide')
    .chancedOutput(metaitem('seed_crystal.lithium_niobate'), 5000, 1000)
    .duration(200)
    .EUt(voltAmps[4])

  event.recipes.susy.crystallizer('dtiz4tvfoykmhc') // remapped from original line 148
    .itemInputs(metaitem('seed_crystal.lithium_niobate'))
    .itemInputs('14x #forge:dusts/niobium_oxide')
    .inputFluids(safeFluidOf('susy:lithium_oxide', 864))
    .itemOutputs(metaitem('boule.lithium_niobate'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.crystallizer('wzzzjhakcdgyp5') // remapped from original line 157
    .itemInputs(metaitem('seed_crystal.lithium_niobate'))
    .itemInputs('20x #forge:dusts/lithium_niobate')
    .itemOutputs(metaitem('boule.lithium_niobate'))
    .duration(400)
    .EUt(120)

  event.recipes.gtceu.cutter('xaecrjnvpup66u') // remapped from original line 165
    .itemInputs(metaitem('boule.lithium_niobate'))
    .itemOutputs(metaitem('seed_crystal.lithium_niobate'))
    .itemOutputs('5x #forge:gems/exquisite_lithium_niobate')
    .duration(400)
    .EUt(120)

  event.recipes.susy.roaster('psswktapkjzicr') // remapped from original line 175
    .itemInputs('1x #forge:dusts/lead_oxide')
    .outputFluids(safeFluidOf('susy:lead_oxide', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.reaction_furnace('vmy99g2zmfe6qd') // remapped from original line 182
    .notConsumable(safeFluidOf('susy:lead_oxide', 1000))
    .itemInputs('4x #forge:dusts/lead_oxide')
    .itemInputs('3x #forge:dusts/titanium_dioxide')
    .itemInputs('3x #forge:dusts/zirconium_dioxide')
    .itemOutputs('10x #forge:dusts/lead_zirconate_titanate')
    .duration(200)
    .EUt(voltAmps[3])

  event.recipes.gtceu.forming_press('lvfb1gfasd1tm1') // remapped from original line 192
    .itemInputs('10x #forge:dusts/lead_zirconate_titanate')
    .notConsumable(metaitem('shape.mold.ball'))
    .itemOutputs('1x #forge:gems/lead_zirconate_titanate')
    .duration(500)
    .EUt(voltAmps[1])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // CVD = recipemap('cvd')
  // CUTTER = recipemap('cutter')
  // CRYSTALLIZER = recipemap('crystallizer')
  // SOLIDIFIER = recipemap('fluid_solidifier')
  // CUTTER = recipemap('cutter')
  // FORGE_HAMMER = recipemap('forge_hammer')
  // AUTOCLAVE = recipemap('autoclave')
  // BR = recipemap('batch_reactor')
  // ROASTER = recipemap('roaster')
  // TUBE_FURNACE = recipemap('tube_furnace')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // FORMING_PRESS = recipemap("forming_press")
});