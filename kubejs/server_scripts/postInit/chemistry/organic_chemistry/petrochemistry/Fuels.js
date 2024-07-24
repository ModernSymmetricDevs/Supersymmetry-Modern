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
  event.remove({ type: 'gtceu:mixer', input: safeFluidOf('gtceu:bio_diesel') && safeFluidOf('gtceu:tetranitromethane')})
  event.remove({ type: 'gtceu:mixer', input: safeFluidOf('gtceu:diesel') && safeFluidOf('gtceu:tetranitromethane')})

  event.recipes.susy.fixed_bed_reactor('kywtrqtbo3vd7y') // remapped from original line 52
    .inputFluids(safeFluidOf('gtceu:butane', 50))
    .notConsumable('1x #forge:dusts/aluminium_chloride')
    .outputFluids(safeFluidOf('susy:isobutane', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('x5j3plopw6emsp') // remapped from original line 60
    .inputFluids(safeFluidOf('susy:isobutane', 50))
    .notConsumable('1x #forge:dusts/chromium_trioxide')
    .outputFluids(safeFluidOf('susy:isobutylene', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('x2dys3uwlrwzt9') // remapped from original line 68
    .inputFluids(safeFluidOf('gtceu:methanol', 50))
    .inputFluids(safeFluidOf('susy:isobutylene', 50))
    .outputFluids(safeFluidOf('susy:methyl_tert_butyl_ether', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('qjakocp5le0ije') // remapped from original line 80
    .inputFluids(safeFluidOf('susy:isobutylene', 50))
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:tert_butyl_alcohol', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('dqniwp0npntfiw') // remapped from original line 91
    .inputFluids(safeFluidOf('susy:isobutylene', 100))
    .inputFluids(safeFluidOf('susy:cresol', 50))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:butylated_hydroxytoluene', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('g4ew8r0ep0sd0n') // remapped from original line 102
    .inputFluids(safeFluidOf('susy:isobutylene', 50))
    .inputFluids(safeFluidOf('susy:xylenol', 50))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:dimethyl_tert_butylphenol', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.batch_reactor('i84nzmndhoameo') // remapped from original line 113
    .itemInputs('1x #forge:dusts/any_purity_aluminium')
    .inputFluids(safeFluidOf('gtceu:phenol', 3000))
    .itemOutputs('1x #forge:dusts/aluminium_phenolate')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 3000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('r3ajk3n43knmdw') // remapped from original line 122
    .notConsumable('1x #forge:dusts/aluminium_phenolate')
    .inputFluids(safeFluidOf('susy:isobutylene', 100))
    .inputFluids(safeFluidOf('gtceu:phenol', 50))
    .outputFluids(safeFluidOf('susy:di_tert_butylphenol', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.batch_reactor('kvwsyiewd73htn') // remapped from original line 133
    .itemInputs('16x #forge:dusts/para_phenylenediamine')
    .itemInputs('14x #forge:dusts/sodium_cyanoborohydride')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .inputFluids(safeFluidOf('gtceu:acetone', 2000))
    .outputFluids(safeFluidOf('susy:diisopropyl_para_phenylenediamine_solution', 2000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.distillery('nb68vx0lzhq5bm') // remapped from original line 143
    .inputFluids(safeFluidOf('susy:diisopropyl_para_phenylenediamine_solution', 1000))
    .itemOutputs('36x #forge:dusts/diisopropyl_para_phenylenediamine')
    .outputFluids(safeFluidOf('susy:wastewater', 2000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('czhqfmzyuyxhxw') // remapped from original line 153
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .inputFluids(safeFluidOf('susy:diethylene_glycol', 50))
    .inputFluids(safeFluidOf('gtceu:methanol', 100))
    .outputFluids(safeFluidOf('susy:diglyme', 50))
    .outputFluids(safeFluidOf('susy:very_diluted_sulfuric_acid', 150))
    .duration(5)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('omnmbg6zjisdnz') // remapped from original line 164
    .circuit(2)
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .inputFluids(safeFluidOf('susy:diethylene_glycol', 50))
    .inputFluids(safeFluidOf('gtceu:methanol', 50))
    .outputFluids(safeFluidOf('susy:methyl_carbitol', 50))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 100))
    .duration(5)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('nie2jzvxhuidfe') // remapped from original line 179
    .inputFluids(safeFluidOf('susy:isobutylene', 50))
    .inputFluids(safeFluidOf('susy:isobutane', 50))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:isooctane', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.batch_reactor('e93msu6ijyyjpw') // remapped from original line 190
    .inputFluids(safeFluidOf('susy:iron_pentacarbonyl', 1000))
    .inputFluids(safeFluidOf('susy:cyclopentadiene', 2000))
    .itemOutputs('11x #forge:dusts/ferrocene')
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 5000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .duration(300)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('imfbrs8lgyo9pn') // remapped from original line 202
    .inputFluids(safeFluidOf('susy:sodium_cyclopentadienide_solution', 50))
    .inputFluids(safeFluidOf('gtceu:chloromethane', 50))
    .outputFluids(safeFluidOf('susy:methylcyclopentadiene_solution', 100))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .duration(5)
    .EUt(120)

  event.recipes.gtceu.DT('13r0xxuxrkjh0f') // remapped from original line 211
    .inputFluids(safeFluidOf('susy:methylcyclopentadiene_solution', 2000))
    .itemOutputs('2x #forge:dusts/salt')
    .outputFluids(safeFluidOf('susy:methylcyclopentadiene', 1000))
    .outputFluids(safeFluidOf('susy:tetrahydrofuran', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.batch_reactor('8ygxcglj0gf3qs') // remapped from original line 220
    .itemInputs('3x #forge:dusts/manganese_ii_chloride')
    .inputFluids(safeFluidOf('gtceu:sodium', 288))
    .inputFluids(safeFluidOf('susy:methylcyclopentadiene', 2000))
    .inputFluids(safeFluidOf('susy:diglyme', 1000))
    .outputFluids(safeFluidOf('susy:bismethylcyclopentadienylmanganese_solution', 2000))
    .duration(100)
    .EUt(120)

  event.recipes.gtceu.DT('kavmosjzdyla7n') // remapped from original line 230
    .inputFluids(safeFluidOf('susy:bismethylcyclopentadienylmanganese_solution', 1000))
    .itemOutputs('4x #forge:dusts/salt')
    .outputFluids(safeFluidOf('susy:diglyme', 1000))
    .outputFluids(safeFluidOf('susy:bismethylcyclopentadienylmanganese', 1000))
    .duration(100)
    .EUt(120)

  event.recipes.susy.batch_reactor('v17r3lh9f7fph5') // remapped from original line 239
    .notConsumable('1x #forge:springs/cupronickel')
    .inputFluids(safeFluidOf('susy:hot_hp_carbon_monoxide', 3000))
    .inputFluids(safeFluidOf('susy:bismethylcyclopentadienylmanganese', 1000))
    .outputFluids(safeFluidOf('susy:methylcyclopentadienylmanganese_tricarbonyl', 1000))
    .outputFluids(safeFluidOf('susy:methylcyclopentadiene', 1000))
    .duration(100)
    .EUt(120)

  event.recipes.gtceu.alloy_smelter('tfw712zkuvwlfg') // remapped from original line 251
    .itemInputs('1x #forge:dusts/any_purity_sodium')
    .itemInputs('1x #forge:dusts/any_purity_lead')
    .itemOutputs('2x #forge:ingots/sodium_lead_alloy')
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.alloy_smelter('mbdgufbnwywjdo') // remapped from original line 259
    .itemInputs('1x #forge:dusts/any_purity_sodium')
    .itemInputs('1x #forge:ingots/lead')
    .itemOutputs('2x #forge:ingots/sodium_lead_alloy')
    .duration(300)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('uz7xhek3wmafcp') // remapped from original line 267
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .outputFluids(safeFluidOf('susy:chloroethane', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.batch_reactor('ikjwrcdmzuywpd') // remapped from original line 275
    .inputFluids(safeFluidOf('susy:chloroethane', 4000))
    .itemInputs('8x #forge:dusts/sodium_lead_alloy')
    .outputFluids(safeFluidOf('susy:tetraethyllead_sludge', 2000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.DT('a3whqfjxbwkivf') // remapped from original line 283
    .inputFluids(safeFluidOf('susy:tetraethyllead_sludge', 2000))
    .itemOutputs('8x #forge:dusts/salt')
    .outputFluids(safeFluidOf('gtceu:lead', 432))
    .outputFluids(safeFluidOf('susy:tetraethyllead', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('vyag1d9vbv6q64') // remapped from original line 294
    .inputFluids(safeFluidOf('susy:two_ethylhexanol', 50))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 100))
    .outputFluids(safeFluidOf('susy:diluted_two_ethylhexyl_nitrate', 150))
    .duration(5)
    .EUt(120)

  event.recipes.gtceu.DT('faz9gbuogqyufj') // remapped from original line 302
    .inputFluids(safeFluidOf('susy:diluted_two_ethylhexyl_nitrate', 3000))
    .outputFluids(safeFluidOf('susy:two_ethylhexyl_nitrate', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('ove6jgpfi5zpgz') // remapped from original line 313
    .inputFluids(safeFluidOf('susy:propylene_oxide', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:propanolamine_mix', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('gdo1bkohdsg5xh') // remapped from original line 321
    .notConsumable('1x #forge:catalysts/bed_alumina')
    .inputFluids(safeFluidOf('susy:propanolamine_mix', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:one_two_diaminopropane_solution', 100))
    .duration(5)
    .EUt(120)

  event.recipes.susy.batch_reactor('xwbvhjluznjwaz') // remapped from original line 330
    .itemInputs('9x #forge:dusts/potassium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:phenol', 1000))
    .inputFluids(safeFluidOf('gtceu:chloroform', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:salicylaldehyde', 1000))
    .outputFluids(safeFluidOf('susy:potassium_chloride_solution', 3000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.batch_reactor('wdet7c1n61gwfj') // remapped from original line 341
    .inputFluids(safeFluidOf('susy:one_two_diaminopropane_solution', 2000))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .inputFluids(safeFluidOf('susy:salicylaldehyde', 2000))
    .itemOutputs('1x #forge:dusts/salicylidene_one_two_propanediamine')
    .outputFluids(safeFluidOf('gtceu:diluted_hydrochloric_acid', 2000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.polymerization_tank('qwvdbpzqivnkd7') // remapped from original line 355
    .circuit(3)
    .inputFluids(safeFluidOf('gtceu:ethylene', 1000))
    .inputFluids(safeFluidOf('susy:isobutylene', 1000))
    .inputFluids(safeFluidOf('susy:vinyl_acetate_suspension', 1000))
    .itemInputs('1x #forge:dusts/tiny_potassium_persulfate')
    .outputFluids(safeFluidOf('susy:ethylene_isobutylene_vinyl_acetate_suspension', 2000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.PHASE_SEPARATOR('utkojpiwr106qg') // remapped from original line 366
    .inputFluids(safeFluidOf('susy:ethylene_isobutylene_vinyl_acetate_suspension', 2000))
    .itemOutputs('3x #forge:dusts/ethylene_isobutylene_vinyl_acetate')
    .outputFluids(safeFluidOf('gtceu:methanol', 1000))
    .duration(50)

  event.recipes.susy.fixed_bed_reactor('o74scbpkbgdnrx') // remapped from original line 375
    .notConsumable('1x #forge:catalysts/bed_alumina')
    .inputFluids(safeFluidOf('susy:n_hexadecanol', 100))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:dihexadecylamine', 50))
    .outputFluids(safeFluidOf('minecraft:water', 100))
    .duration(5)
    .EUt(120)

  event.recipes.susy.batch_reactor('61snhptlngkyo5') // remapped from original line 385
    .itemInputs('13x #forge:dusts/phthalic_anhydride')
    .inputFluids(safeFluidOf('susy:dihexadecylamine', 2000))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 50))
    .itemOutputs('1x #forge:dusts/dihexadecylamine_phthalate_amide')
    .duration(200)
    .EUt(120)

  event.recipes.susy.blender('f0wblsmzf45f1f') // remapped from original line 598
    .inputFluids(safeFluidOf('gtceu:gasoline', 1000))
    .inputFluids(safeFluidOf('susy:oxygenates', 100))
    .inputFluids(safeFluidOf('susy:antiknock', 100))
    .outputFluids(safeFluidOf('susy:midgrade_gasoline', 1000))
    .duration(10)
    .EUt(120)

  event.recipes.susy.blender('mfyqtjht5lymqq') // remapped from original line 607
    .inputFluids(safeFluidOf('susy:midgrade_gasoline', 1000))
    .inputFluids(safeFluidOf('susy:methyl_carbitol', 100))
    .inputFluids(safeFluidOf('susy:corrosion_inhibitor', 100))
    .outputFluids(safeFluidOf('susy:premium_gasoline', 1000))
    .duration(10)
    .EUt(120)

  event.recipes.susy.blender('zmzkqbimnfaeub') // remapped from original line 616
    .inputFluids(safeFluidOf('susy:premium_gasoline', 1000))
    .inputFluids(safeFluidOf('susy:antioxidants', 100))
    .inputFluids(safeFluidOf('susy:metal_deactivator', 100))
    .outputFluids(safeFluidOf('susy:supreme_gasoline', 1000))
    .duration(10)
    .EUt(120)

  event.recipes.susy.blender('zkgyl10zqudv6f') // remapped from original line 627
    .inputFluids(safeFluidOf('gtceu:diesel', 1000))
    .inputFluids(safeFluidOf('susy:ignition_improver', 100))
    .inputFluids(safeFluidOf('susy:cold_flow_improver', 100))
    .outputFluids(safeFluidOf('susy:midgrade_diesel', 1000))
    .duration(10)
    .EUt(120)

  event.recipes.susy.blender('oivkhqaekba1ic') // remapped from original line 636
    .inputFluids(safeFluidOf('susy:midgrade_diesel', 1000))
    .inputFluids(safeFluidOf('susy:antistatic_additive', 100))
    .inputFluids(safeFluidOf('susy:lubricity_additive', 100))
    .outputFluids(safeFluidOf('susy:premium_diesel', 1000))
    .duration(10)
    .EUt(120)

  event.recipes.susy.blender('dhaes7ugjrsstf') // remapped from original line 645
    .inputFluids(safeFluidOf('susy:premium_diesel', 1000))
    .inputFluids(safeFluidOf('susy:antioxidants', 100))
    .inputFluids(safeFluidOf('susy:antifoaming_additive', 100))
    .outputFluids(safeFluidOf('susy:supreme_diesel', 1000))
    .duration(10)
    .EUt(120)

  event.recipes.susy.blender('vduwemiwquslht') // remapped from original line 656
    .inputFluids(safeFluidOf('susy:kerosene', 1000))
    .inputFluids(safeFluidOf('susy:methyl_carbitol', 100))
    .inputFluids(safeFluidOf('susy:antistatic_additive', 100))
    .outputFluids(safeFluidOf('susy:midgrade_kerosene', 1000))
    .duration(10)
    .EUt(120)

  event.recipes.susy.blender('v9gxijfmbhacnl') // remapped from original line 665
    .inputFluids(safeFluidOf('susy:midgrade_kerosene', 1000))
    .inputFluids(safeFluidOf('susy:lubricity_additive', 100))
    .inputFluids(safeFluidOf('susy:antioxidants', 100))
    .outputFluids(safeFluidOf('susy:premium_kerosene', 1000))
    .duration(10)
    .EUt(120)

  event.recipes.susy.blender('k2xybilgavtbxz') // remapped from original line 674
    .inputFluids(safeFluidOf('susy:premium_kerosene', 1000))
    .inputFluids(safeFluidOf('susy:corrosion_inhibitor', 100))
    .inputFluids(safeFluidOf('susy:metal_deactivator', 100))
    .outputFluids(safeFluidOf('susy:supreme_kerosene', 1000))
    .duration(10)
    .EUt(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (inertGas in Globals.inertGases) {
  //     REACTION_FURNACE.recipeBuilder()
  //         .notConsumable(ore('dustAluminiumSilicate'))
  //         .notConsumable(fluid(inertGas.name) * inertGas.amount_required)
  //         .fluidInputs(fluid('linoleic_acid') * 2000)
  //         .fluidOutputs(fluid('corrosion_inhibitor') * 2000)
  //         .duration(200 * inertGas.duration)
  //         .EUt(120)
  //         .buildAndRegister()
  // 
  //     REACTION_FURNACE.recipeBuilder()
  //         .notConsumable(ore('dustAluminiumSilicate'))
  //         .notConsumable(fluid(inertGas.name) * inertGas.amount_required)
  //         .fluidInputs(fluid('oleic_acid') * 2000)
  //         .fluidOutputs(fluid('corrosion_inhibitor') * 2000)
  //         .duration(200 * inertGas.duration)
  //         .EUt(120)
  //         .buildAndRegister()
  // }

  //     for (int i = 0; i < materialList.size() - 1; i++) {
  //         def material1 = materialList[i]
  //         for (int j = i + 1; j < materialList.size(); j++) {
  //             def material2 = materialList[j]
  // 
  //             // Check if the pair is already in the list
  //             def combinationExists = pairs.any { it.contains(material1) && it.contains(material2) }
  // 
  //             if (!combinationExists) {
  //                 pairs << [material1, material2]
  //             }
  //         }
  //     }

  // for (major_solvent in major_solvents) {
  //     for (minor_solvent in minor_solvents) {
  //         BLENDER.recipeBuilder()
  //             .inputs(metaitem('dustSmallSodiumDodecylSulfate'))
  //             .fluidInputs(fluid('two_butoxyethanol') * 250)
  //             .fluidInputs(fluid(major_solvent) * 1500)
  //             .fluidInputs(fluid(minor_solvent) * 250)
  //             .fluidOutputs(fluid('lubricity_additive') * 2000)
  //             .duration(200)
  //             .EUt(Globals.voltAmps[2])
  //             .buildAndRegister()
  //     
  //         BLENDER.recipeBuilder()
  //             .inputs(ore('dustSmallDinonylnaphthaleneSulfonicAcid'))
  //             .fluidInputs(fluid(major_solvent) * 1500)
  //             .fluidInputs(fluid(minor_solvent) * 500)
  //             .fluidOutputs(fluid('antistatic_additive') * 2000)
  //             .duration(200)
  //             .EUt(Globals.voltAmps[2])
  //             .buildAndRegister()
  // 
  //         BLENDER.recipeBuilder()
  //             .inputs(ore('dustSmallSalicylideneOneTwoPropanediamine'))
  //             .fluidInputs(fluid(major_solvent) * 1500)
  //             .fluidInputs(fluid(minor_solvent) * 500)
  //             .fluidOutputs(fluid('metal_deactivator') * 2000)
  //             .duration(200)
  //             .EUt(Globals.voltAmps[2])
  //             .buildAndRegister()
  // 
  //         BLENDER.recipeBuilder()
  //             .fluidInputs(fluid('two_ethylhexyl_nitrate') * 250)
  //             .fluidInputs(fluid(major_solvent) * 1500)
  //             .fluidInputs(fluid(minor_solvent) * 250)
  //             .fluidOutputs(fluid('ignition_improver') * 2000)
  //             .duration(200)
  //             .EUt(Globals.voltAmps[2])
  //             .buildAndRegister()
  // 
  //         BLENDER.recipeBuilder()
  //             .circuitMeta(1)
  //             .inputs(ore('dustSmallEthyleneIsobutyleneVinylAcetate'))
  //             .fluidInputs(fluid(major_solvent) * 1500)
  //             .fluidInputs(fluid(minor_solvent) * 500)
  //             .fluidOutputs(fluid('cold_flow_improver') * 2000)
  //             .duration(200)
  //             .EUt(Globals.voltAmps[2])
  //             .buildAndRegister()
  // 
  //         BLENDER.recipeBuilder()
  //             .fluidInputs(fluid('polydimethylsiloxane') * 250)
  //             .fluidInputs(fluid(major_solvent) * 1500)
  //             .fluidInputs(fluid(minor_solvent) * 250)
  //             .fluidOutputs(fluid('antifoaming_additive') * 2000)
  //             .duration(200)
  //             .EUt(Globals.voltAmps[2])
  //             .buildAndRegister()
  // 
  //         BLENDER.recipeBuilder()
  //             .inputs(ore('dustSmallEthyleneIsobutyleneVinylAcetate'))
  //             .inputs(ore('dustSmallDihexadecylaminePhthalateAmide'))
  //             .fluidInputs(fluid(major_solvent) * 6000)
  //             .fluidInputs(fluid(minor_solvent) * 2000)
  //             .fluidOutputs(fluid('cold_flow_improver') * 8000)
  //             .duration(200)
  //             .EUt(Globals.voltAmps[2])
  //             .buildAndRegister()
  // 
  //         AntiknockMap.each { key, val ->
  //             BLENDER.recipeBuilder()
  //                 .fluidInputs(fluid(key) * val)
  //                 .fluidInputs(fluid(major_solvent) * 1500)
  //                 .fluidInputs(fluid(minor_solvent) * (500 - val))
  //                 .fluidOutputs(fluid('antiknock') * 1000)
  //                 .duration(200)
  //                 .EUt(120)
  //                 .buildAndRegister()
  //         }
  // 
  //         BLENDER.recipeBuilder()
  //             .inputs(ore('dustFerrocene'))
  //             .fluidInputs(fluid(major_solvent) * 1500)
  //             .fluidInputs(fluid(minor_solvent) * 500)
  //             .fluidOutputs(fluid('antiknock') * 1000)
  //             .duration(200)
  //             .EUt(120)
  //             .buildAndRegister()
  // 
  // 
  //         def antioxidantPairs = getUniquePairs(AntioxidantMap)
  // 
  //         for (pair in antioxidantPairs) {
  //             BLENDER.recipeBuilder()
  //                 .fluidInputs(fluid(pair[0].getKey()) * pair[0].getValue())
  //                 .fluidInputs(fluid(pair[1].getKey()) * pair[1].getValue())
  //                 .fluidInputs(fluid(major_solvent) * 1400)
  //                 .fluidInputs(fluid(minor_solvent) * 200)
  //                 .fluidOutputs(fluid('antioxidants') * 2000)
  //                 .duration(200)
  //                 .EUt(120)
  //                 .buildAndRegister()
  //         }
  //         
  //         for (antioxidant in AntioxidantMap) {
  //             BLENDER.recipeBuilder()
  //                     .inputs(ore('dustDiisopropylParaPhenylenediamine') * 4)
  //                     .fluidInputs(fluid(antioxidant.key) * 200)
  //                     .fluidInputs(fluid(major_solvent) * 3400)
  //                     .fluidInputs(fluid(minor_solvent) * 400)
  //                     .fluidOutputs(fluid('antioxidants') * 4000)
  //                     .duration(200)
  //                     .EUt(120)
  //                     .buildAndRegister()
  //         }
  //     }
  // }

  // for (pair in oxygenatePairs) {
  //     BLENDER.recipeBuilder()
  //         .fluidInputs(fluid(pair[0].getKey()) * pair[0].getValue())
  //         .fluidInputs(fluid(pair[1].getKey()) * pair[1].getValue())
  //         .fluidOutputs(fluid('oxygenates') * 2000)
  //         .duration(200)
  //         .EUt(120)
  //         .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // TBR = recipemap('trickle_bed_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // BR = recipemap('batch_reactor')
  // POLYMERIZATION = recipemap('polymerization_tank')
  // FLUIDIZEDBR = recipemap('fluidized_bed_reactor')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // DISTILLERY = recipemap('distillery')
  // ROASTER = recipemap('roaster')
  // CRYSTALLIZER = recipemap('crystallizer')
  // MIXER = recipemap('mixer')
  // DRYER = recipemap('dryer')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // CENTRIFUGE = recipemap('centrifuge')
  // PYROLYSE = recipemap('pyrolyse_oven')
  // LCR = recipemap('large_chemical_reactor')
  // EBF = recipemap('electric_blast_furnace')
  // VULCANIZER = recipemap('vulcanizing_press')
  // ALLOY_SMELTER = recipemap('alloy_smelter')
  // ARC_FURNACE = recipemap('arc_furnace')
  // VACUUM_DT = recipemap('vacuum_distillation')
  // AUTOCLAVE = recipemap('autoclave')
  // COMPRESSOR = recipemap('compressor')
  // ASSEMBLER = recipemap('assembler')
  // ELECTROLYZER = recipemap('electrolyzer')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // ELECTROMAGNETIC_SEPARATOR = recipemap('electromagnetic_separator')
  // PSA = recipemap('pressure_swing_adsorption')
  // SINTERING_OVEN = recipemap('sintering_oven')
  // BLENDER = recipemap('blender')
  // def major_solvents = [
  //     'xylene',
  //     'naphtha',
  //     'toluene'
  // ]
  // def minor_solvents = [
  //     'naphthalene',
  //     'isopropyl_alcohol',
  //     'ethylbenzene'
  // ]
  //     // 2,6-Di-tert-butylphenol
  //     // 2,4,6-tri-tert-butylphenol (BHT)
  //     // 2,4-Dimethyl-6-tert-butylphenol
  //     // 2,6-Di-tert-butylphenol
  //     // N-substituted p-Phenylenediamine
  //     // Isooctane
  //     // Ferrocene
  //     // Methylcyclopentadienylmanganese tricarbonyl
  //     
  //     // Tetraethyl Lead
  //     // EVA-isobutylene terpolymer for cold flow additives
  //     // Wax antisetlling agent (N,N-dihexadecyl phthalic acid amide)
  // def OxygenateMap = [
  //     'methanol': 1000,
  //     'ethanol': 1000,
  //     'n_propanol': 750,
  //     'isopropyl_alcohol': 750,
  //     'n_butanol': 500,
  //     'isobutyl_alcohol': 500,
  //     'tert_butyl_alcohol': 250,
  //     'methyl_tert_butyl_ether': 125
  // ]
  // def AntioxidantMap = [
  //     'butylated_hydroxytoluene': 200,
  //     'dimethyl_tert_butylphenol': 200,
  //     'di_tert_butylphenol': 200
  // ]
  // def AntiknockMap = [
  //     'isooctane': 250,
  //     'tetraethyllead': 100,
  //     'methylcyclopentadienylmanganese_tricarbonyl': 50
  // ]
  // def getUniquePairs(Map materialsMap) {
  //     def pairs = []
  //     // Convert map entries to a list for easier iteration
  //     def materialList = materialsMap.entrySet().toList()
  //     return pairs
  // }
  // def oxygenatePairs = getUniquePairs(OxygenateMap)
  // log.infoMC("Registered oxygenate pairs")
});