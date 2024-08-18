ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:chemical_bath', input: '#forge:wires/fine_borosilicate_glass' && safeFluidOf('gtceu:epoxy')})
  event.remove({ type: 'gtceu:chemical_bath', input: 'susy:carbon.fibers' && safeFluidOf('gtceu:epoxy')})

  event.recipes.susy.ion_exchange_column('hanoxgzewonve7') // remapped from original line 47
    .inputFluids(safeFluidOf('gtceu:phenol', 2000))
    .inputFluids(safeFluidOf('gtceu:acetone', 1000))
    .notConsumable(safeItemId('1x susy:beads.ag_fifty_w_x_eight'))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('1x #forge:dusts/bisphenol_a')
    .EUt(480)
    .duration(100)

  event.recipes.gtceu.extractor('v7oo2zedrck3mx') // remapped from original line 57
    .itemInputs('1x #forge:dusts/bisphenol_a')
    .outputFluids(safeFluidOf('gtceu:bisphenol_a', 1000))
    .EUt(30)
    .duration(100)

  event.recipes.susy.continuous_stirred_tank_reactor('ld5tbkzukhrua6') // remapped from original line 66
    .inputFluids(safeFluidOf('gtceu:glycerol', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 100))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 10))
    .outputFluids(safeFluidOf('susy:chlorinated_glycerol', 160))
    .duration(5)
    .EUt(30)

  event.recipes.susy.batch_reactor('swxwjit1avfznt') // remapped from original line 75
    .inputFluids(safeFluidOf('susy:chlorinated_glycerol', 3200))
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .outputFluids(safeFluidOf('susy:epichlorohydrin_solution', 4200))
    .duration(120)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('vuxsuy9pwmxztz') // remapped from original line 83
    .inputFluids(safeFluidOf('susy:epichlorohydrin_solution', 4200))
    .outputFluids(safeFluidOf('gtceu:acetic_acid', 200))
    .outputFluids(safeFluidOf('gtceu:epichlorohydrin', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .itemOutputs('2x #forge:dusts/salt')
    .duration(120)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('3qdq6x03buiikk') // remapped from original line 93
    .inputFluids(safeFluidOf('gtceu:allyl_chloride', 50))
    .inputFluids(safeFluidOf('gtceu:hypochlorous_acid', 50))
    .outputFluids(safeFluidOf('susy:allyl_alcohol_mix', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.batch_reactor('1zbjw9lbqwgnts') // remapped from original line 101
    .inputFluids(safeFluidOf('susy:allyl_alcohol_mix', 1000))
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .outputFluids(safeFluidOf('susy:diluted_epichlorohydrin', 2000))
    .duration(120)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('8pzkn8avtz8yci') // remapped from original line 109
    .inputFluids(safeFluidOf('susy:diluted_epichlorohydrin', 2000))
    .outputFluids(safeFluidOf('gtceu:epichlorohydrin', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('2x #forge:dusts/salt')
    .duration(160)
    .EUt(30)

  event.recipes.susy.vacuum_chamber('48udpxb0uejkzk') // remapped from original line 146
    .itemInputs('7x #forge:dusts/wet_epoxy')
    .notConsumable('1x #forge:springs/nichrome')
    .itemOutputs('7x #forge:dusts/epoxy')
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('chy6reo3ecgvy2') // remapped from original line 157
    .itemInputs('7x #forge:dusts/aluminium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 3000))
    .outputFluids(safeFluidOf('susy:aluminium_chloride_solution', 3000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('r2kmhbb4ay5ot7') // remapped from original line 165
    .itemInputs('9x #forge:dusts/nickel_chloride')
    .itemInputs('4x #forge:dusts/aluminium_chloride')
    .inputFluids(safeFluidOf('susy:demineralized_water', 4000))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 8000))
    .itemOutputs('1x #forge:dusts/nickel_hydrotalcite')
    .outputFluids(safeFluidOf('gtceu:salt_water', 8000))
    .duration(100)
    .EUt(480)

  event.recipes.susy.batch_reactor('synrbszstgzwpk') // remapped from original line 176
    .itemInputs('1x #forge:dusts/nickel_hydrotalcite')
    .inputFluids(safeFluidOf('susy:sodium_tungstate_solution', 100))
    .itemOutputs('1x #forge:dusts/bisphenol_bromination_catalyst')
    .outputFluids(safeFluidOf('susy:wastewater', 100))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('dszfg4jflcdqfc') // remapped from original line 187
    .itemInputs('1x #forge:dusts/bisphenol_a')
    .notConsumable('1x #forge:dusts/bisphenol_bromination_catalyst')
    .inputFluids(safeFluidOf('susy:dichloroethane', 6000))
    .inputFluids(safeFluidOf('susy:hydrogen_peroxide_solution', 2000))
    .inputFluids(safeFluidOf('gtceu:bromine', 4000))
    .outputFluids(safeFluidOf('susy:impure_brominated_bisphenol_emulsion', 10000))
    .duration(160)
    .EUt(1920)

  event.recipes.susy.phase_separator('gjjg6yywgu4kwy') // remapped from original line 198
    .inputFluids(safeFluidOf('susy:impure_brominated_bisphenol_emulsion', 10000))
    .outputFluids(safeFluidOf('susy:impure_brominated_bisphenol_solution', 6000))
    .outputFluids(safeFluidOf('minecraft:water', 4000))
    .duration(160)

  event.recipes.gtceu.MIXER('tq23lnzowcpwht') // remapped from original line 205
    .inputFluids(safeFluidOf('minecraft:water', 6500))
    .inputFluids(safeFluidOf('susy:sodium_sulfite_solution', 500))
    .outputFluids(safeFluidOf('susy:diluted_sodium_sulfite_solution', 7000))
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.CENTRIFUGE('kkssqrw4e4ym4z') // remapped from original line 213
    .inputFluids(safeFluidOf('susy:impure_brominated_bisphenol_solution', 6000))
    .inputFluids(safeFluidOf('susy:diluted_sodium_sulfite_solution', 7000))
    .outputFluids(safeFluidOf('susy:tetrabromobisphenol_a_solution', 6000))
    .outputFluids(safeFluidOf('minecraft:water', 7000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.ROASTER('97xzbbm6clnnvt') // remapped from original line 222
    .inputFluids(safeFluidOf('susy:tetrabromobisphenol_a_solution', 6000))
    .itemOutputs('1x #forge:dusts/tetrabromobisphenol_a')
    .outputFluids(safeFluidOf('susy:dichloroethane', 6000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('thloyovhj996f3') // remapped from original line 232
    .itemInputs('4x #forge:dusts/calcium_cyanamide')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .itemOutputs('5x #forge:dusts/calcite')
    .itemOutputs('5x #forge:dusts/cyanamide')
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('e4f11r2k7j08at') // remapped from original line 242
    .itemInputs('10x #forge:dusts/cyanamide')
    .notConsumable(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .itemOutputs('10x #forge:dusts/dicyandiamide')
    .duration(200)
    .EUt(30)

  // Contains GTFO resources
  //event.recipes.gtceu.large_chemical_reactor('d7k3nfqtijkmcb') // remapped from original line 251
    //.inputFluids(safeFluidOf('susy:gtfo_glyoxal', 1000))
    //.inputFluids(safeFluidOf('gtceu:ammonia', 2000))
    //.inputFluids(safeFluidOf('susy:gtfo_acetaldehyde', 1000))
    //.itemOutputs('12x #forge:dusts/two_methylimidazole')
    //.duration(200)
    //.EUt(30)

  event.recipes.gtceu.MIXER('zarerjlioa2ele') // remapped from original line 260
    .itemInputs('1x #forge:dusts/two_methylimidazole')
    .itemInputs('2x #forge:dusts/dicyandiamide')
    .itemInputs('1x #forge:dusts/phthalic_anhydride')
    .itemOutputs('1x #forge:dusts/epoxy_curing_mixture')
    .duration(20)
    .EUt(30)

  event.recipes.susy.polymerization_tank('ahs7no5mstd1bi') // remapped from original line 269
    .itemInputs('4x #forge:dusts/tetrabromobisphenol_a')
    .inputFluids(safeFluidOf('gtceu:epichlorohydrin', 4800))
    .itemInputs('1x #forge:dusts/epoxy_curing_mixture')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 4000))
    .itemOutputs('8x #forge:dusts/wet_flame_retardant_epoxy')
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 8000))
    .duration(100)
    .EUt(1920)

  event.recipes.susy.vacuum_chamber('fvnhfaamqwprz8') // remapped from original line 280
    .itemInputs('7x #forge:dusts/wet_flame_retardant_epoxy')
    .notConsumable('1x #forge:springs/nichrome')
    .itemOutputs('7x #forge:dusts/flame_retardant_epoxy')
    .duration(25)
    .EUt(30)

  event.recipes.gtceu.MIXER('989lc5f0razhyd') // remapped from original line 291
    .itemInputs('3x #forge:dusts/silicon_dioxide')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 10))
    .itemOutputs('3x #forge:dusts/acid_washed_silicon_dioxide')
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.MIXER('qes1udmcrzf5wp') // remapped from original line 299
    .itemInputs('18x #forge:dusts/acid_washed_silicon_dioxide')
    .itemInputs('5x #forge:dusts/alumina')
    .itemInputs('5x #forge:dusts/boron_trioxide')
    .itemInputs('4x #forge:dusts/quicklime')
    .itemOutputs('10x #forge:dusts/e_glass')
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.electric_blast_furnace('cyhrxmduckuxoj') // remapped from original line 309
    .itemInputs('1x #forge:dusts/e_glass')
    .outputFluids(safeFluidOf('gtceu:e_glass', 144))
    .blastFurnaceTemp(1000)
    .EUt(120)
    .duration(10)

  event.recipes.gtceu.CENTRIFUGE('mcptmecemxiilo') // remapped from original line 317
    .notConsumable('1x #forge:rods/steel')
    .itemInputs('1x #forge:fibers/kevlar')
    .inputFluids(safeFluidOf('gtceu:e_glass', 144))
    .itemOutputs(safeItemId('1x susy:glass_fibers'))
    .EUt(120)
    .duration(10)

  event.recipes.gtceu.chemical_bath('0zrphijekxvjmr') // remapped from original line 326
    .itemInputs(safeItemId('1x susy:glass_fibers'))
    .inputFluids(safeFluidOf('susy:flame_retardant_epoxy', 144))
    .itemOutputs(safeItemId('1x susy:epoxy_lamina'))
    .EUt(120)
    .duration(10)

  event.recipes.susy.DRYER('pogfs3adfch8mu') // remapped from original line 334
    .itemInputs(safeItemId('1x susy:epoxy_lamina'))
    .itemOutputs('1x #forge:plates/reinforced_epoxy_resin')
    .EUt(120)
    .duration(100)

  event.recipes.susy.polymerization_tank('inrp8bmufijfpu') // remapped from original line 344
    .inputFluids(safeFluidOf('gtceu:epoxy', 1008))
    .inputFluids(safeFluidOf('susy:formaldehyde', 3000))
    .itemOutputs('7x #forge:dusts/bisphenol_a_novolac_epoxy')
    .duration(100)
    .EUt(1920)

  event.recipes.susy.continuous_stirred_tank_reactor('f0mua3eehq7lcv') // remapped from original line 353
    .inputFluids(safeFluidOf('gtceu:propene', 100))
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('susy:propylene_chlorohydrin', 100))
    .duration(5)
    .EUt(30)

  event.recipes.susy.batch_reactor('mknrpp8zd2of3e') // remapped from original line 362
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .inputFluids(safeFluidOf('susy:propylene_chlorohydrin', 2000))
    .outputFluids(safeFluidOf('susy:propylene_oxide_solution', 2000))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('4jacsodntxduja') // remapped from original line 370
    .inputFluids(safeFluidOf('susy:propylene_oxide_solution', 2000))
    .itemOutputs('3x #forge:dusts/calcium_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('susy:propylene_oxide', 2000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('nytdhes2qw20jn') // remapped from original line 379
    .inputFluids(safeFluidOf('susy:propylene_oxide', 50))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .outputFluids(safeFluidOf('susy:propylene_carbonate', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.batch_reactor('zfltj8oyektmvu') // remapped from original line 389
    .inputFluids(safeFluidOf('gtceu:antimony_trifluoride', 576))
    .inputFluids(safeFluidOf('gtceu:fluorine', 2000))
    .outputFluids(safeFluidOf('susy:antimony_pentafluoride', 1000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('ornvevn145dvxc') // remapped from original line 397
    .itemInputs('2x #forge:dusts/sodium_fluoride')
    .inputFluids(safeFluidOf('susy:antimony_pentafluoride', 1000))
    .itemOutputs('8x #forge:dusts/sodium_hexafluoroantimonate')
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('cewaoawordkruk') // remapped from original line 405
    .itemInputs('2x #forge:dusts/sulfur')
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .outputFluids(safeFluidOf('susy:disulfur_dichloride', 1000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('op6iaqglpumpqd') // remapped from original line 413
    .inputFluids(safeFluidOf('gtceu:benzene', 2000))
    .inputFluids(safeFluidOf('susy:disulfur_dichloride', 1000))
    .itemOutputs('1x #forge:dusts/sulfur')
    .itemOutputs('1x #forge:dusts/diphenyl_sulfide')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('sjlpuhaqvui7fm') // remapped from original line 423
    .notConsumable('1x #forge:dusts/aluminium_chloride')
    .inputFluids(safeFluidOf('gtceu:benzene', 2000))
    .inputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .itemOutputs('1x #forge:dusts/diphenyl_sulfoxide')
    .duration(80)
    .EUt(30)

  event.recipes.susy.batch_reactor('oxmwhbdnxkjrv1') // remapped from original line 432
    .itemInputs('1x #forge:dusts/tiny_potassium_persulfate')
    .inputFluids(safeFluidOf('gtceu:methane', 1000))
    .inputFluids(safeFluidOf('susy:oleum', 11000))
    .outputFluids(safeFluidOf('susy:methanesulfonic_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 10000))
    .duration(100)
    .EUt(480)

  event.recipes.gtceu.MIXER('7r3houtle4i5kz') // remapped from original line 442
    .itemInputs('1x #forge:dusts/phosphorus_pentoxide')
    .inputFluids(safeFluidOf('susy:methanesulfonic_acid', 4000))
    .outputFluids(safeFluidOf('susy:sulfonium_preparation_mixture', 4000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('oqmcmqyayfhhke') // remapped from original line 450
    .itemInputs('1x #forge:dusts/diphenyl_sulfoxide')
    .itemInputs('1x #forge:dusts/diphenyl_sulfide')
    .itemInputs('8x #forge:dusts/sodium_hexafluoroantimonate')
    .notConsumable(safeFluidOf('susy:sulfonium_preparation_mixture', 28000))
    .itemOutputs('52x #forge:dusts/triarylsulfonium_hexafluoroantimonate')
    .duration(100)
    .EUt(480)

  event.recipes.gtceu.large_chemical_reactor('nvxdk0ptslt2t3') // remapped from original line 492
    .itemInputs('1x #forge:dusts/triarylsulfonium_hexafluoroantimonate')
    .itemInputs('7x #forge:dusts/bisphenol_a_novolac_epoxy')
    .inputFluids(safeFluidOf('susy:propylene_carbonate', 200))
    .inputFluids(safeFluidOf('susy:gamma_butyrolactone', 4800))
    .outputFluids(safeFluidOf('susy:su_eight', 5000))
    .duration(670)
    .EUt(1920)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (curingAgent in curingAgents) {
  //     if (curingAgent.liquid) {
  //         POLYMERIZATION.recipeBuilder()
  //         .inputs(ore('dustBisphenolA'))
  //         .fluidInputs(fluid('epichlorohydrin') * 1200) //excess epichlorohydrin to control degree of polymerization
  //         .fluidInputs(fluid(curingAgent.name) * curingAgent.amount_required)
  //         .fluidInputs(fluid('sodium_hydroxide_solution') * 1000)
  //         .outputs(metaitem('dustWetEpoxy') * 2)
  //         .fluidOutputs(fluid('diluted_saltwater') * 2000)
  //         .duration((int) (100 * curingAgent.duration))
  //         .EUt(480)
  //         .buildAndRegister()
  //     } else {
  //         POLYMERIZATION.recipeBuilder()
  //         .inputs(ore('dustBisphenolA') * 4)
  //         .fluidInputs(fluid('epichlorohydrin') * 4800)
  //         .inputs(ore(curingAgent.name) * curingAgent.amount_required)
  //         .fluidInputs(fluid('sodium_hydroxide_solution') * 4000)
  //         .outputs(metaitem('dustWetEpoxy') * 8)
  //         .fluidOutputs(fluid('diluted_saltwater') * 8000)
  //         .duration((int) (100 * curingAgent.duration))
  //         .EUt(480)
  //         .buildAndRegister()
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // ION_EXCHANGE = recipemap('ion_exchange_column')
  // FLUID_EXTRACTOR = recipemap('extractor')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // BR = recipemap('batch_reactor')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // LCR = recipemap('large_chemical_reactor')
  // VACUUM_CHAMBER = recipemap('vacuum_chamber')
  // PHASE_SEPARATOR = recipemap('phase_separator')
  // POLYMERIZATION = recipemap('polymerization_tank')
  // EBF = recipemap('electric_blast_furnace')
  // FLUID_SOLIDIFER = recipemap('fluid_solidifier')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // class CuringAgent {
  //     String name
  //     boolean liquid
  //     int amount_required
  //     double duration
  //     CuringAgent(name, liquid, amount_required, duration) {
  //         this.name = name
  //         this.liquid = liquid
  //         this.amount_required = amount_required
  //         this.duration = duration
  //     }
  // }
  // curingAgents = [
  //     new CuringAgent('diethylenetriamine', true, 100, 1),
  //     new CuringAgent('triethylenetetramine', true, 50, 1),
  //     new CuringAgent('aminoethylpiperazine', true, 50, 1),
  //     new CuringAgent('dustDicyandiamide', false, 2, 2),
  //     new CuringAgent('dustPhthalicAnhydride', false, 1, 2),
  //     new CuringAgent('dustEpoxyCuringMixture', false, 1, 0.25)
  // ]
  // Bisphenol-A Novolac Epoxy
  //     Average Molar Mass: "430" g/mol (not real)
  //     Percent Weight: 50%
  // Gamma-Butyrolactone
  //     Molar Mass: 86.090 g/mol
  //     Percent Weight: 45%
  // Propylene Carbonate
  //     Molar Mass: 102.089 g/mol
  //     Percent Weight: 2.5%
  // Triarylsulfonium Hexafluoroantimonate
  //     Molar Mass: 607.29 g/mol
  //     Percent Weight: 2.5%
  // Assume 100g of material.
  //     50g Novolac
  //     45g Gamma Butyrolactone
  //     2.5g Propylene Carbonate
  //     2.5g Triarylsulfonium Hexafluoroantimonate
  //     116 mmol Bisphenol-A Novolac Epoxy
  //     523 mmol Gamma-Butyrolactone
  //     24.5 mmol Propylene Carbonate
  //     4.12 mmol Triarylsulfonium Hexafluoroantimonate
  // Total: 667.62 mmol.
  //     17.4% Bisphenol-A Novolac Epoxy
  //     78.3% Gamma-Butyrolactone
  //     3.67% Propylene Carbonate
  //     0.617% Triarylsulfonium Hexafluoroantimonate
  // */
});