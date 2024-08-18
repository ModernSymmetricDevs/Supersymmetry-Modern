ServerEvents.recipes(event => {

  event.recipes.susy.reaction_furnace('raft6maixuo1jg') // remapped from original line 22
    .itemInputs('1x #forge:dusts/emerald')
    .itemInputs('6x #forge:dusts/soda_ash')
    .itemOutputs('2x #forge:dusts/alkali_fused_beryl')
    .EUt(120)
    .duration(100)

  event.recipes.susy.batch_reactor('izawfjjmogqbnj') // remapped from original line 31
    .itemInputs('2x #forge:dusts/alkali_fused_beryl')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 7100))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 900))
    .itemOutputs('18x #forge:dusts/silicon_dioxide')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .outputFluids(safeFluidOf('susy:dissolved_beryl', 1000))
    .EUt(120)
    .duration(100)

  event.recipes.susy.batch_reactor('mthw591nrvtq7s') // remapped from original line 47
    .itemInputs('7x #forge:dusts/potassium_sulfate')
    .inputFluids(safeFluidOf('susy:dissolved_beryl', 2000))
    .itemOutputs('24x #forge:dusts/potassium_alum')
    .outputFluids(safeFluidOf('susy:impure_beryllium_sulfate_solution', 1500))
    .EUt(120)
    .duration(200)

  event.recipes.susy.batch_reactor('mlzzi6vnl7gd90') // remapped from original line 57
    .itemInputs('5x #forge:dusts/tiny_calcite')
    .inputFluids(safeFluidOf('susy:impure_beryllium_sulfate_solution', 1000))
    .itemOutputs('1x #forge:dusts/tiny_iron_iii_hydroxide')
    .itemOutputs('1x #forge:dusts/tiny_chromium_iii_hydroxide')
    .itemOutputs('8x #forge:dusts/tiny_gypsum')
    .outputFluids(safeFluidOf('susy:beryllium_sulfate_solution', 1000))
    .EUt(120)
    .duration(100)

  event.recipes.susy.batch_reactor('xrbxib6cbbga8z') // remapped from original line 68
    .itemInputs('18x #forge:dusts/sodium_hydroxide')
    .circuit(1)
    .inputFluids(safeFluidOf('susy:beryllium_sulfate_solution', 1000))
    .itemOutputs('9x #forge:dusts/beryllium_hydroxide')
    .outputFluids(safeFluidOf('susy:sodium_sulfate_solution', 8000))
    .EUt(120)
    .duration(100)

  event.recipes.susy.batch_reactor('rdo9mcmabktrnr') // remapped from original line 78
    .itemInputs('18x #forge:dusts/sodium_hydroxide')
    .itemInputs('1x #forge:dusts/tiny_tetrasodium_ethylenediaminetetraacetate')
    .inputFluids(safeFluidOf('susy:beryllium_sulfate_solution', 1000))
    .itemOutputs('12x #forge:dusts/beryllium_hydroxide')
    .outputFluids(safeFluidOf('susy:sodium_sulfate_solution', 8000))
    .EUt(120)
    .duration(100)

  event.recipes.susy.batch_reactor('jkh32jvtxsytwq') // remapped from original line 89
    .inputFluids(safeFluidOf('susy:hexafluorosilicic_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:salt_water', 2000))
    .itemOutputs('9x #forge:dusts/sodium_fluorosilicate')
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .EUt(voltAmps[4])
    .duration(400)

  event.recipes.susy.reaction_furnace('fvfypy98q2x5ru') // remapped from original line 98
    .itemInputs('2x #forge:dusts/emerald')
    .itemInputs('54x #forge:dusts/sodium_fluorosilicate')
    .itemOutputs('23x #forge:dusts/fluoride_fused_beryl')
    .outputFluids(safeFluidOf('susy:silicon_tetrafluoride', 1000))
    .EUt(voltAmps[4])
    .duration(200)

  event.recipes.susy.batch_reactor('5pkyqi3vqvq3ma') // remapped from original line 108
    .itemInputs('4x #forge:dusts/sodium_fluoride')
    .inputFluids(safeFluidOf('susy:silicon_tetrafluoride', 1000))
    .itemOutputs('9x #forge:dusts/sodium_fluorosilicate')
    .EUt(voltAmps[4])
    .duration(100)

  event.recipes.gtceu.centrifuge('1l19tmumhkltnj') // remapped from original line 117
    .itemInputs('23x #forge:dusts/fluoride_fused_beryl')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 6000))
    .itemOutputs('10x #forge:dusts/alumina')
    .itemOutputs('45x #forge:dusts/silicon_dioxide')
    .outputFluids(safeFluidOf('susy:sodium_fluoroberyllate_solution', 5400))
    .EUt(voltAmps[4])
    .duration(300)

  event.recipes.susy.batch_reactor('vynntvi55tcblz') // remapped from original line 127
    .itemInputs('6x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:sodium_fluoroberyllate_solution', 1000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 3000))
    .itemOutputs('5x #forge:dusts/beryllium_hydroxide')
    .outputFluids(safeFluidOf('susy:sodium_fluoride_solution', 4000))
    .EUt(voltAmps[4])
    .duration(80)

  event.recipes.susy.roaster('t5agd0xibwd0bo') // remapped from original line 137
    .itemInputs('5x #forge:dusts/beryllium_hydroxide')
    .itemOutputs('2x #forge:dusts/beryllium_oxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .EUt(voltAmps[4])
    .duration(80)

  event.recipes.susy.reaction_furnace('53xgkn33ojuk4v') // remapped from original line 147
    .itemInputs('1x #forge:dusts/emerald')
    .itemInputs('18x #forge:dusts/any_purity_carbon')
    .inputFluids(safeFluidOf('gtceu:chlorine', 36000))
    .outputFluids(safeFluidOf('susy:chlorinated_beryl', 900))
    .EUt(voltAmps[4])
    .duration(480)

  event.recipes.gtceu.distillation_tower('3guo517txdlflx') // remapped from original line 156
    .inputFluids(safeFluidOf('susy:chlorinated_beryl', 1000))
    .itemOutputs('9x #forge:dusts/beryllium_chloride')
    .outputFluids(safeFluidOf('susy:aluminium_chloride', 2000))
    .outputFluids(safeFluidOf('susy:silicon_tetrachloride', 6000))
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 18000))
    .EUt(voltAmps[4])
    .duration(480)

  event.recipes.gtceu.fluid_solidifier('wwponqdohttlld') // remapped from original line 166
    .inputFluids(safeFluidOf('susy:aluminium_chloride', 1000))
    .itemOutputs('4x #forge:dusts/aluminium_chloride')
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.batch_reactor('nymgs4lmonh0db') // remapped from original line 173
    .itemInputs('4x #forge:dusts/aluminium_chloride')
    .circuit(1)
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 3000))
    .itemOutputs('7x #forge:dusts/aluminium_hydroxide')
    .outputFluids(safeFluidOf('gtceu:salt_water', 3000))
    .EUt(voltAmps[1])
    .duration(480)

  event.recipes.susy.reaction_furnace('g6778hudaovdgq') // remapped from original line 184
    .itemInputs('2x #forge:dusts/beryllium_oxide')
    .itemInputs('1x #forge:dusts/any_purity_carbon')
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('3x #forge:dusts/beryllium_chloride')
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .EUt(voltAmps[4])
    .duration(240)

  event.recipes.gtceu.electrolytic_cell('z3dpergtfxoktl') // remapped from original line 194
    .notConsumable(safeItemId('1x susy:graphite_electrode'))
    .notConsumable('1x #forge:rods/aluminium')
    .notConsumable(safeFluidOf('gtceu:salt', 432))
    .inputFluids(safeFluidOf('susy:beryllium_chloride', 432))
    .outputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('1x #forge:dusts/beryllium')
    .EUt(voltAmps[4])
    .duration(480)

  event.recipes.susy.batch_reactor('r4urxaqtom8kwq') // remapped from original line 206
    .inputFluids(safeFluidOf('susy:hexafluorosilicic_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 6000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .itemOutputs('3x #forge:dusts/silicon_dioxide')
    .itemOutputs('36x #forge:dusts/ammonium_fluoride')
    .EUt(voltAmps[2])
    .duration(100)

  event.recipes.susy.roaster('nqisdcqrl7uno6') // remapped from original line 216
    .circuit(1)
    .itemInputs('12x #forge:dusts/ammonium_fluoride')
    .itemOutputs('8x #forge:dusts/ammonium_bifluoride')
    .outputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .EUt(voltAmps[2])
    .duration(100)

  event.recipes.susy.batch_reactor('pvuh8lkbcmnymz') // remapped from original line 225
    .itemInputs('16x #forge:dusts/ammonium_bifluoride')
    .itemInputs('5x #forge:dusts/beryllium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:ammonium_fluoroberyllate_solution', 1000))
    .EUt(voltAmps[2])
    .duration(100)

  event.recipes.susy.batch_reactor('xqh4tlgysx8uej') // remapped from original line 234
    .itemInputs('1x #forge:dusts/tiny_sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:ammonium_fluoroberyllate_solution', 1000))
    .chancedOutput('1x #forge:dusts/tiny_chromium_iii_hydroxide', 200, 0)
    .chancedOutput('1x #forge:dusts/tiny_iron_iii_hydroxide', 200, 0)
    .outputFluids(safeFluidOf('susy:ammonium_fluoroberyllate_solution', 1000))
    .EUt(voltAmps[2])
    .duration(100)

  event.recipes.susy.roaster('zrxkvzjszcpgpc') // remapped from original line 244
    .inputFluids(safeFluidOf('susy:ammonium_fluoroberyllate_solution', 1000))
    .itemOutputs('13x #forge:dusts/ammonium_fluoroberyllate')
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .EUt(voltAmps[2])
    .duration(100)

  event.recipes.susy.roaster('bfdkoazjfwei7f') // remapped from original line 252
    .itemInputs('13x #forge:dusts/ammonium_fluoroberyllate')
    .itemOutputs('3x #forge:dusts/beryllium_fluoride')
    .outputFluids(safeFluidOf('susy:disassociated_ammonium_fluoride', 2000))
    .EUt(voltAmps[2])
    .duration(100)

  event.recipes.susy.batch_reactor('hco5mnuffepxiz') // remapped from original line 260
    .inputFluids(safeFluidOf('susy:disassociated_ammonium_fluoride', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:ammonium_fluoride_solution', 1000))
    .EUt(voltAmps[2])
    .duration(100)

  event.recipes.gtceu.distillery('gm1ldm6amvrwnq') // remapped from original line 268
    .inputFluids(safeFluidOf('susy:ammonium_fluoride_solution', 1000))
    .itemOutputs('6x #forge:dusts/ammonium_fluoride')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(voltAmps[2])
    .duration(100)

  event.recipes.susy.sintering_oven('epmipd1mi3kxly') // remapped from original line 276
    .itemInputs('7x #forge:dusts/graphite')
    .notConsumable(safeItemId('1x susy:shape.mold.crucible'))
    .inputFluids(safeFluidOf('gtceu:coal_tar', 1000))
    .itemOutputs(safeItemId('1x susy:crucible.graphite'))
    .duration(1440)
    .EUt(voltAmps[2])

  event.recipes.susy.reaction_furnace('bgc4ur8p28o1ni') // remapped from original line 285
    .itemInputs('3x #forge:dusts/beryllium_fluoride')
    .itemInputs('1x #forge:dusts/any_purity_magnesium')
    .notConsumable(safeItemId('1x susy:crucible.graphite'))
    .itemOutputs('1x #forge:dusts/beryllium')
    .itemOutputs('3x #forge:dusts/magnesium_fluoride')
    .EUt(voltAmps[2])
    .duration(100)

  event.recipes.susy.batch_reactor('v5qedemnlznsul') // remapped from original line 295
    .itemInputs('3x #forge:dusts/magnesium_fluoride')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .outputFluids(safeFluidOf('susy:dissolved_magnesium_fluoride', 2000))
    .EUt(voltAmps[2])
    .duration(100)

  event.recipes.gtceu.distillery('hwedhj3sdqigwt') // remapped from original line 303
    .inputFluids(safeFluidOf('susy:dissolved_magnesium_fluoride', 2000))
    .itemOutputs('3x #forge:dusts/magnesium_chloride')
    .outputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 2000))
    .EUt(voltAmps[2])
    .duration(100)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.SinteringGlobals.*
  // BR = recipemap('batch_reactor')
  // ROASTER = recipemap('roaster')
  // CENTRIFUGE = recipemap('centrifuge')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // DISTILLERY = recipemap('distillery')
  // SINTERING_OVEN = recipemap('sintering_oven')
  // AUTOCLAVE = recipemap('autoclave')
  // FLUID_EXTRACTOR = recipemap('extractor')
  // ARC_FURNACE = recipemap('arc_furnace')
  // DT = recipemap('distillation_tower')
  // FLUID_SOLIDIFIER = recipemap('fluid_solidifier')
  //         //Beryllium, 3, Sodium, 2, Sulfur, 4, Oxygen, 16, Water, 8 + Iron/Manganese sulfate impurities
});