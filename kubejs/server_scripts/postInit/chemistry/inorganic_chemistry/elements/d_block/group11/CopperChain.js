ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/tetrahedrite' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/chalcopyrite' && '#forge:dusts/silicon_dioxide' && safeFluidOf('gtceu:oxygen')})

  event.recipes.gtceu.mixer('lginy5g3jq8obx') // remapped from original line 23
    .itemInputs('8x #forge:dusts/impure_malachite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_malachite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('xnygn5phs2ebjd') // remapped from original line 31
    .inputFluids(safeFluidOf('susy:impure_malachite_slurry', 2000))
    .notConsumable('1x #forge:dusts/quicklime')
    .notConsumable('1x #forge:dusts/potassium_octyl_hydroxamate')
    .notConsumable(safeFluidOf('susy:methyl_isobutyl_carbinol', 100))
    .outputFluids(safeFluidOf('susy:malachite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:granite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('vkifiu1oaonsm7') // remapped from original line 42
    .inputFluids(safeFluidOf('susy:malachite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/malachite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.susy.batch_reactor('6qpjx3cfwhgglv') // remapped from original line 50
    .itemInputs('1x #forge:dusts/malachite')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .outputFluids(safeFluidOf('susy:malachite_leach', 3000))
    .EUt(30)
    .duration(100)

  event.recipes.susy.continuous_stirred_tank_reactor('kqhzwqgwqy6khn') // remapped from original line 59
    .inputFluids(safeFluidOf('susy:malachite_leach', 150))
    .inputFluids(safeFluidOf('susy:hydrogen_peroxide_solution', 5))
    .outputFluids(safeFluidOf('susy:oxidized_malachite_leach', 150))
    .EUt(30)
    .duration(5)

  event.recipes.susy.batch_reactor('zuvf2ykhq2swyq') // remapped from original line 67
    .inputFluids(safeFluidOf('susy:oxidized_malachite_leach', 3000))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 300))
    .chancedOutput('7x #forge:dusts/iron_iii_hydroxide', 1000, 0)
    .outputFluids(safeFluidOf('susy:diluted_copper_sulfate_solution', 3300))
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.distillery('9yctvvjes4yfsi') // remapped from original line 76
    .inputFluids(safeFluidOf('susy:diluted_copper_sulfate_solution', 3300))
    .itemOutputs('12x #forge:dusts/copper_sulfate')
    .outputFluids(safeFluidOf('minecraft:water', 3300))
    .circuit(1)
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.distillation_tower('bpviqv7jpnuvgl') // remapped from original line 85
    .inputFluids(safeFluidOf('susy:diluted_copper_sulfate_solution', 3300))
    .outputFluids(safeFluidOf('susy:copper_sulfate_solution', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 1300))
    .disableDistilleryRecipes(true)
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.distillery('ktgm7cntdgfwro') // remapped from original line 94
    .inputFluids(safeFluidOf('susy:malachite_leach', 3000))
    .itemOutputs('8x #forge:dusts/copper_sulfate')
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 1000))
    .EUt(30)
    .duration(100)

  event.recipes.susy.clarifier('3mfslxh5nzkwks') // remapped from original line 159
    .inputFluids(safeFluidOf('susy:copper_concentrate_slurry', 1000))
    .itemOutputs('16x #forge:dusts/copper_concentrate')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.susy.clarifier('7dznvvks92kfxz') // remapped from original line 167
    .inputFluids(safeFluidOf('susy:pyrite_slurry', 1000))
    .itemOutputs('2x #forge:dusts/pyrite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.susy./*REVERBERATORY_FURNACE('tbx286uq3wce6w') // remapped from original line 175
    .itemInputs('1x #forge:dusts/copper_concentrate')
    .chancedOutput('1x #forge:dusts/copper_matte', 9000, 0)
    .duration(80)

  event.recipes.gtceu.electric_blast_furnace('hfunkrzvokw5u0') // remapped from original line 181
    .itemInputs('1x #forge:dusts/copper_concentrate')
    .notConsumable(safeItemId('2x gregtech:fluid_pipe_tiny'))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .inputFluids(safeFluidOf('gtceu:natural_gas', 50))
    .itemOutputs('1x #forge:dusts/copper_matte')
    .outputFluids(safeFluidOf('susy:copper_matte_flue_gas', 500))
    .blastFurnaceTemp(1200)
    .EUt(480)
    .duration(10)

  event.recipes.gtceu.sifter('gkt6smihpdhtio') // remapped from original line 193
    .itemInputs('5x #forge:dusts/calcite')
    .inputFluids(safeFluidOf('susy:copper_matte_flue_gas', 3000))
    .itemOutputs('5x #forge:dusts/calcium_sulfite')
    .outputFluids(safeFluidOf('susy:desulfurized_flue_gas', 2000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.reaction_furnace('jwdb9ryo7qwqv4') // remapped from original line 202
    .itemInputs('1x #forge:dusts/copper_matte')
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .itemOutputs('1x #forge:dusts/copper_matte_flue')
    .itemOutputs('1x #forge:ingots/blister_copper')
    .EUt(480)
    .duration(10)

  event.recipes.gtceu.sifter('xwewkub4lmiftp') // remapped from original line 212
    .itemInputs('1x #forge:dusts/copper_matte_flue')
    .chancedOutput('1x #forge:dusts/arsenic_trioxide', 1000, 0)
    .chancedOutput('1x #forge:dusts/antimony_trioxide', 1000, 0)
    .chancedOutput('1x #forge:dusts/bismuth_iii_oxide', 1000, 0)
    .chancedOutput('1x #forge:dusts/tin_iv_oxide', 1000, 0)
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.electrolytic_cell('egdsdjui4rcwvz') // remapped from original line 222
    .itemInputs('4x #forge:plates/blister_copper')
    .notConsumable('4x #forge:plates/stainless_steel')
    .notConsumable(safeFluidOf('susy:copper_sulfate_solution', 1000))
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 320))
    .itemOutputs('4x #forge:dusts/copper')
    .chancedOutput(safeItemId('1x susy:anode_slime.copper'), 1000, 0)
    .outputFluids(safeFluidOf('susy:nickel_sulfate_solution', 160))
    .EUt(480)
    .duration(40)

  event.recipes.gtceu.sifter('9lqx5bi2cjguvm') // remapped from original line 234
    .inputFluids(safeFluidOf('susy:copper_matte_flue_gas', 1000))
    .notConsumable(safeItemId('1x susy:item_filter'))
    .itemOutputs('1x #forge:dusts/copper_matte_flue')
    .outputFluids(safeFluidOf('susy:flue_gas', 1000))
    .EUt(480)
    .duration(10)

  event.recipes.gtceu.centrifuge('flrnx0dehrfbbv') // remapped from original line 243
    .itemInputs('1x #forge:dusts/copper_matte_flue')
    .chancedOutput('2x #forge:dusts/zinc_oxide', 2000, 0)
    .chancedOutput('2x #forge:dusts/massicot', 2000, 0)
    .chancedOutput('2x #forge:dusts/cassiterite', 2000, 0)
    .EUt(480)
    .duration(10)

  event.recipes.gtceu.electrolytic_cell('769brqiapsiifi') // remapped from original line 252
    .itemInputs('6x #forge:dusts/copper_sulfate')
    .notConsumable('1x #forge:rods/copper')
    .notConsumable(safeItemId('1x susy:graphite_electrode'))
    .inputFluids(safeFluidOf('minecraft:water', 2000))
    .itemOutputs('1x #forge:dusts/copper')
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.susy.ROASTER('4e0nrdpx2kpgzy') // remapped from original line 264
    .itemInputs('3x #forge:dusts/copper_i_sulfide')
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .itemOutputs('2x #forge:dusts/copper')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .EUt(voltAmps[2])
    .duration(80)

  event.recipes.susy.ROASTER('si1tg6n9wemfpa') // remapped from original line 273
    .itemInputs('2x #forge:dusts/copper_ii_sulfide')
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .itemOutputs('1x #forge:dusts/copper')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .EUt(voltAmps[2])
    .duration(80)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (copperOre in copperOres) {
  //     MIXER.recipeBuilder()
  //         .inputs(ore('dustImpure' + copperOre.name) * 8)
  //         .fluidInputs(fluid('distilled_water') * ((copperOre.amount_produced * 1000) + 1000))
  //         .fluidOutputs(fluid('impure_' + copperOre.name.toLowerCase() + '_slurry') * ((copperOre.amount_produced * 1000) + 1000))
  //         .EUt(Globals.voltAmps[3])
  //         .duration(80)
  //         .buildAndRegister()
  // 
  //     if (copperOre.produces_iron) {
  //         FLOTATION.recipeBuilder()
  //         .fluidInputs(fluid('impure_' + copperOre.name.toLowerCase() + '_slurry') * ((copperOre.amount_produced * 1000) + 1000))
  //         .notConsumable(metaitem('dustQuicklime'))
  //         .notConsumable(metaitem('dustSodiumEthylXanthate'))
  //         .notConsumable(fluid('sodium_cyanide_solution') * 100)
  //         .notConsumable(fluid('methyl_isobutyl_carbinol') * 100)
  //         .fluidOutputs(fluid('copper_concentrate_slurry') * (copperOre.amount_produced * 1000))
  //         .fluidOutputs(fluid('pyrite_slurry') * 1000)
  //         .EUt(Globals.voltAmps[3])
  //         .duration(80)
  //         .buildAndRegister()
  // 
  //     } else {
  //         FLOTATION.recipeBuilder()
  //         .fluidInputs(fluid('impure_' + copperOre.name.toLowerCase() + '_slurry') * ((copperOre.amount_produced * 1000) + 1000))
  //         .notConsumable(metaitem('dustQuicklime'))
  //         .notConsumable(metaitem('dustSodiumEthylXanthate'))
  //         .notConsumable(fluid('sodium_cyanide_solution') * 100)
  //         .notConsumable(fluid('methyl_isobutyl_carbinol') * 100)
  //         .fluidOutputs(fluid('copper_concentrate_slurry') * (copperOre.amount_produced * 1000))
  //         .fluidOutputs(fluid('granite_tailing_slurry') * 1000)
  //         .EUt(Globals.voltAmps[3])
  //         .duration(80)
  //         .buildAndRegister()
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // EBF = recipemap('electric_blast_furnace')
  // FLOTATION = recipemap('froth_flotation')
  // MIXER = recipemap('mixer')
  // CLARIFIER = recipemap('clarifier')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // BR = recipemap('batch_reactor')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // DISTILLERY = recipemap('distillery')
  // SIFTER = recipemap('sifter')
  // CENTRIFUGE = recipemap('centrifuge')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // class CopperOre {
  //     String name
  //     int amount_produced
  //     boolean produces_iron
  //     CopperOre(name, amount_produced, produces_iron) {
  //         this.name = name
  //         this.amount_produced = amount_produced
  //         this.produces_iron = produces_iron
  //     }
  // }
  // def copperOres = [
  //     new CopperOre('Chalcopyrite', 1, true),
  //     new CopperOre('Bornite', 5, true),
  //     new CopperOre('Chalcocite', 2, false)
  // ]
});