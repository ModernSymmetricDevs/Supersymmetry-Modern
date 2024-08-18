ServerEvents.recipes(event => {

  event.recipes.susy.gravity_separator('fyehdt1ssumhzg') // remapped from original line 22
    .itemInputs('1x #forge:dusts/pyrochlore')
    .itemOutputs('1x #forge:dusts/sifted_pyrochlore')
    .chancedOutput('1x #forge:dusts/limestone_tailings', 2500, 0)
    .chancedOutput('1x #forge:dusts/calcite', 2500, 0)
    .EUt(voltAmps[1])
    .duration(40)

  event.recipes.gtceu.electromagnetic_separator('9rq37w9bsfeneb') // remapped from original line 31
    .itemInputs('1x #forge:dusts/sifted_pyrochlore')
    .itemOutputs('1x #forge:dusts/concentrate_pyrochlore')
    .chancedOutput('1x #forge:dusts/limestone_tailings', 2500, 0)
    .chancedOutput('1x #forge:dusts/calcite', 2500, 0)
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.mixer('fditbfnxrkgmnw') // remapped from original line 40
    .itemInputs('8x #forge:dusts/concentrate_pyrochlore')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_pyrochlore_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('etqqjb0dvk5qfi') // remapped from original line 48
    .notConsumable('1x #forge:dusts/oxalic_acid')
    .inputFluids(safeFluidOf('susy:impure_pyrochlore_slurry', 2000))
    .notConsumable(safeFluidOf('susy:hexafluorosilicic_acid', 100))
    .notConsumable(safeFluidOf('susy:one_amidoethyl_two_alkyl_two_imidazoline', 100))
    .notConsumable(safeFluidOf('susy:methyl_isobutyl_carbinol', 100))
    .outputFluids(safeFluidOf('susy:pyrochlore_slurry', 1000))
    .outputFluids(safeFluidOf('susy:limestone_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('shvp6th0dcg62o') // remapped from original line 60
    .inputFluids(safeFluidOf('susy:pyrochlore_slurry', 1000))
    .itemOutputs('16x #forge:dusts/flotated_pyrochlore')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('plwnttylno216j') // remapped from original line 68
    .itemInputs('16x #forge:dusts/flotated_pyrochlore')
    .itemInputs('1x #forge:dusts/quicklime')
    .itemOutputs('16x #forge:dusts/roasted_pyrochlore')
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.chemical_bath('xtjmegqpnnjhhq') // remapped from original line 76
    .itemInputs('16x #forge:dusts/roasted_pyrochlore')
    .inputFluids(safeFluidOf('susy:hot_sulfuric_acid', 1000))
    .itemOutputs('16x #forge:dusts/digested_pyrochlore')
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.reaction_furnace('1zfappdaqaectu') // remapped from original line 85
    .itemInputs('15x #forge:dusts/iron_iii_oxide')
    .itemInputs('7x #forge:dusts/digested_pyrochlore')
    .itemInputs('42x #forge:dusts/any_purity_aluminium')
    .inputFluids(safeFluidOf('susy:sodium_nitrate', 720))
    .itemOutputs('20x #forge:dusts/ferroniobium_tantalum')
    .itemOutputs('105x #forge:dusts/alumina')
    .itemOutputs('14x #forge:dusts/calcium')
    .outputFluids(safeFluidOf('susy:sodium_nitrite', 576))
    .duration(800)
    .EUt(voltAmps[4])

  event.recipes.gtceu.fluid_solidifier('bwnfyygv0e6cbm') // remapped from original line 98
    .inputFluids(safeFluidOf('susy:sodium_nitrite', 144))
    .itemOutputs('1x #forge:dusts/sodium_nitrite')
    .duration(40)
    .EUt(voltAmps[1])

  event.recipes.susy.reaction_furnace('qjdk9winq4e15x') // remapped from original line 105
    .itemInputs('10x #forge:dusts/ferroniobium_tantalum')
    .inputFluids(safeFluidOf('gtceu:chlorine', 54000))
    .notConsumable(safeFluidOf('gtceu:salt', 1440))
    .notConsumable(safeFluidOf('gtceu:iron_iii_chloride', 1440))
    .outputFluids(safeFluidOf('gtceu:iron_iii_chloride', 1296))
    .outputFluids(safeFluidOf('susy:impure_niobium_pentachloride', 7000))
    .duration(400)
    .EUt(voltAmps[4])

  event.recipes.gtceu.DISTILLATION_TOWER('mpmkzabqzoxqqz') // remapped from original line 116
    .inputFluids(safeFluidOf('susy:impure_niobium_pentachloride', 7000))
    .outputFluids(safeFluidOf('susy:tantalum_pentachloride', 500))
    .outputFluids(safeFluidOf('susy:niobium_pentachloride', 6500))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.gtceu.fluid_solidifier('ybi7gnfky0fdsi') // remapped from original line 124
    .inputFluids(safeFluidOf('susy:niobium_pentachloride', 1000))
    .itemOutputs('6x #forge:dusts/niobium_pentachloride')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('vyiw0t90xqtnqk') // remapped from original line 131
    .itemInputs('12x #forge:dusts/niobium_pentachloride')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 17000))
    .itemOutputs('9x #forge:dusts/niobium_oxide_dihydrate')
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 10000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.gravity_separator('zqskmsiasi8bqg') // remapped from original line 143
    .itemInputs('1x #forge:dusts/columbite')
    .itemOutputs('1x #forge:dusts/sifted_columbite')
    .chancedOutput('1x #forge:dusts/pegmatite_tailings', 2500, 0)
    .chancedOutput('1x #forge:dusts/nether_quartz', 2500, 0)
    .EUt(voltAmps[1])
    .duration(40)

  event.recipes.gtceu.electromagnetic_separator('e7itsyk5x7cswn') // remapped from original line 152
    .itemInputs('1x #forge:dusts/sifted_columbite')
    .itemOutputs('1x #forge:dusts/concentrate_columbite')
    .chancedOutput('1x #forge:dusts/pegmatite_tailings', 2500, 0)
    .chancedOutput('1x #forge:dusts/nether_quartz', 2500, 0)
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.mixer('lm1wxreswkhgyr') // remapped from original line 161
    .itemInputs('8x #forge:dusts/concentrate_columbite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_columbite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('cuy3jw5dt50mvc') // remapped from original line 169
    .notConsumable('1x #forge:dusts/sodium_fluorosilicate')
    .inputFluids(safeFluidOf('susy:impure_columbite_slurry', 2000))
    .notConsumable(safeFluidOf('susy:one_amidoethyl_two_alkyl_two_imidazoline', 100))
    .notConsumable(safeFluidOf('susy:methyl_isobutyl_carbinol', 100))
    .notConsumable(safeFluidOf('gtceu:hydrochloric_acid', 100))
    .outputFluids(safeFluidOf('susy:columbite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:pegmatite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('we41s4fi4mltzt') // remapped from original line 181
    .inputFluids(safeFluidOf('susy:columbite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/flotated_columbite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.autoclave('gd3dvoqqz4xzqg') // remapped from original line 189
    .itemInputs('1x #forge:dusts/flotated_columbite')
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 14000))
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .outputFluids(safeFluidOf('susy:impure_fluoroniobic_acid_solution', 1000))
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('ljcfwogpodhzyt') // remapped from original line 198
    .inputFluids(safeFluidOf('susy:impure_fluoroniobic_acid_solution', 1000))
    .inputFluids(safeFluidOf('susy:methyl_isobutyl_ketone', 6000))
    .outputFluids(safeFluidOf('susy:niobium_rich_extract', 6000))
    .outputFluids(safeFluidOf('susy:metal_sulfate_waste', 1000))
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('8stbcquffw5rvh') // remapped from original line 207
    .inputFluids(safeFluidOf('susy:niobium_rich_extract', 500))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 500))
    .outputFluids(safeFluidOf('susy:scrubbed_niobium_rich_extract', 500))
    .duration(5)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('317chyw5niw4p0') // remapped from original line 215
    .inputFluids(safeFluidOf('susy:scrubbed_niobium_rich_extract', 500))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 500))
    .outputFluids(safeFluidOf('susy:diluted_tantalum_extract', 500))
    .outputFluids(safeFluidOf('susy:fluoroniobic_acid_solution', 500))
    .duration(5)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('s8b0gy1ryq3viy') // remapped from original line 224
    .inputFluids(safeFluidOf('susy:fluoroniobic_acid_solution', 6000))
    .inputFluids(safeFluidOf('susy:methyl_isobutyl_ketone', 1500))
    .outputFluids(safeFluidOf('susy:purified_fluoroniobic_acid_solution', 6000))
    .outputFluids(safeFluidOf('susy:niobium_rich_extract', 1500))
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.susy.batch_reactor('fpn49upomyx8dg') // remapped from original line 233
    .inputFluids(safeFluidOf('susy:purified_fluoroniobic_acid_solution', 6000)) 
    .inputFluids(safeFluidOf('susy:ammonia_solution', 9450))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 4725))
    .chancedOutput('9x #forge:dusts/niobium_oxide_dihydrate', 6750, 0)
    .outputFluids(safeFluidOf('susy:ammonium_fluoride_solution', 9450))
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.susy.roaster('bl5jsomarvhw82') // remapped from original line 243
    .circuit(2)
    .itemInputs('6x #forge:dusts/ammonium_fluoride')
    .outputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.roaster('phkt5bte4swnyf') // remapped from original line 252
    .itemInputs('9x #forge:dusts/niobium_oxide_dihydrate')
    .itemOutputs('7x #forge:dusts/niobium_oxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.susy.advanced_arc_furnace('i9njcmq7y2urde') // remapped from original line 260
    .itemInputs('21x #forge:dusts/niobium_oxide')
    .itemInputs('10x #forge:dusts/any_purity_aluminium')
    .itemOutputs('25x #forge:dusts/alumina')
    .outputFluids(safeFluidOf('gtceu:niobium', 864))
    .duration(240)
    .EUt(voltAmps[4])

  event.recipes.gtceu.centrifuge('wp6jdw22a9yeqy') // remapped from original line 270
    .inputFluids(safeFluidOf('susy:diluted_niobium_extract', 9000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:methyl_isobutyl_ketone', 9000))
    .outputFluids(safeFluidOf('susy:purified_fluoroniobic_acid_solution', 1000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.roaster('laeb98pomwawvk') // remapped from original line 279
    .inputFluids(safeFluidOf('susy:metal_sulfate_waste', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .chancedOutput('6x #forge:dusts/iron_sulfate', 5000, 0)
    .chancedOutput('6x #forge:dusts/manganese_ii_sulfate', 5000, 0)
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.gtceu.mixer('qulqrbinyi1fzy') // remapped from original line 288
    .itemInputs('6x #forge:dusts/manganese_ii_sulfate')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:manganese_ii_sulfate_solution', 1000))
    .duration(160)
    .EUt(voltAmps[1])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // FF = recipemap('froth_flotation')
  // GRAVITY_SEPARATOR = recipemap('gravity_separator')
  // ELECTROMAGNETIC_SEPARATOR = recipemap('electromagnetic_separator')
  // ROASTER = recipemap('roaster')
  // AUTOCLAVE = recipemap('autoclave')
  // CENTRIFUGE = recipemap('centrifuge')
  // ADVANCED_ARC_FURNACE = recipemap('advanced_arc_furnace')
  // FLUID_SOLIDIFIER = recipemap('fluid_solidifier')
  // BR = recipemap('batch_reactor')
  // MIXER = recipemap('mixer')
  // CLARIFIER = recipemap('clarifier')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // REACTION_FURNACE = recipemap('reaction_furnace')
});