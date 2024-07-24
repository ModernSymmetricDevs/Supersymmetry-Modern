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
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/raw_electrum'})
  event.remove({ type: 'gtceu:mixer', input: safeFluidOf('gtceu:nitric_acid') && safeFluidOf('gtceu:hydrochloric_acid')})

  event.recipes.gtceu.mixer('c5pdo5imllgjkx') // remapped from original line 19
    .itemInputs('2x #forge:dusts/raw_electrum')
    .inputFluids(safeFluidOf('gtceu:mercury', 1000))
    .itemOutputs('1x #forge:dusts/silver')
    .outputFluids(safeFluidOf('susy:gold_amalgam', 1000))
    .duration(60)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('gyxlp5gt9fnuof') // remapped from original line 28
    .inputFluids(safeFluidOf('susy:gold_amalgam', 1000))
    .itemOutputs('1x #forge:dusts/gold')
    .outputFluids(safeFluidOf('gtceu:mercury', 1000))
    .duration(360)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('modfmvaxhquwqb') // remapped from original line 37
    .itemInputs('3x #forge:dusts/raw_electrum')
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 4000))
    .itemOutputs('2x #forge:dusts/gold')
    .outputFluids(safeFluidOf('susy:silver_nitrate_solution', 2000))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 2000))
    .duration(360)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('jglb2wtqlr3nf0') // remapped from original line 50
    .inputFluids(safeFluidOf('susy:raw_electrum', 144))
    .inputFluids(safeFluidOf('gtceu:chlorine', 500))
    .itemOutputs('1x #forge:dusts/silver_chloride')
    .outputFluids(safeFluidOf('gtceu:gold', 144))
    .duration(120)
    .EUt(voltAmps[3])

  event.recipes.gtceu.macerator('9p0h99okzbbpx8') // remapped from original line 62
    .itemInputs(safeItemId('11x susy:resource_block:11')1'))
    .itemOutputs('8x #forge:dusts/gold_concentrate')
    .duration(40)
    .EUt(voltAmps[2])

  event.recipes.gtceu.mixer('mkpudn3c40zgoe') // remapped from original line 69
    .itemInputs('20x #forge:dusts/gold_concentrate')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 6000))
    .outputFluids(safeFluidOf('susy:gold_ore_slurry', 6000))
    .duration(160)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('yzhi6vl8pv8xns') // remapped from original line 77
    .itemInputs('24x #forge:dusts/sodium_cyanide')
    .itemInputs('1x #forge:dusts/tiny_quicklime')
    .inputFluids(safeFluidOf('susy:gold_ore_slurry', 6000))
    .inputFluids(safeFluidOf('gtceu:air', 10000))
    .itemOutputs(metaitem('sand.dust') * 16)
    .outputFluids(safeFluidOf('susy:gold_leach_solution', 6000))
    .duration(160)
    .EUt(voltAmps[2])

  event.recipes.susy.roaster('rvrtfcihjvchau') // remapped from original line 88
    .itemInputs('1x #forge:dusts/any_purity_carbon')
    .inputFluids(safeFluidOf('gtceu:nitrogen', 1000))
    .itemOutputs('1x #forge:dusts/activated_carbon')
    .duration(1440)
    .EUt(voltAmps[2])

  event.recipes.gtceu.chemical_bath('hyws3zjprnlyxa') // remapped from original line 96
    .itemInputs('4x #forge:dusts/activated_carbon')
    .inputFluids(safeFluidOf('susy:gold_leach_solution', 6000))
    .itemOutputs('4x #forge:dusts/loaded_carbon')
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 4000))
    .duration(160)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('bv00nuwwbx3yvx') // remapped from original line 105
    .itemInputs('1x #forge:dusts/sodium_cyanide')
    .itemInputs('1x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 9000))
    .outputFluids(safeFluidOf('susy:gold_eluent', 9000))
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.gtceu.chemical_bath('nyievmscxgdg4e') // remapped from original line 114
    .itemInputs('1x #forge:dusts/loaded_carbon')
    .inputFluids(safeFluidOf('susy:gold_eluent', 1000))
    .itemOutputs('1x #forge:dusts/spent_activated_carbon')
    .outputFluids(safeFluidOf('susy:gold_elute_solution', 1000))
    .duration(40)
    .EUt(voltAmps[2])

  event.recipes.gtceu.chemical_bath('tueaqgtnqaxynt') // remapped from original line 123
    .itemInputs('1x #forge:dusts/spent_activated_carbon')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 5))
    .itemOutputs('1x #forge:dusts/washed_activated_carbon')
    .duration(40)
    .EUt(voltAmps[2])

  event.recipes.susy.roaster('dd5fgrebfiwjx2') // remapped from original line 131
    .itemInputs('1x #forge:dusts/washed_activated_carbon')
    .inputFluids(safeFluidOf('gtceu:air', 100))
    .itemOutputs('1x #forge:dusts/activated_carbon')
    .duration(40)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electrolytic_cell('jy6uc8kjwpx9eq') // remapped from original line 139
    .itemInputs('8x #forge:wires/fine_steel')
    .notConsumable('8x #forge:plates/stainless_steel')
    .notConsumable('8x #forge:plates/plastic')
    .inputFluids(safeFluidOf('susy:gold_elute_solution', 1000))
    .itemOutputs('16x #forge:wires/fine_gold_plated_steel')
    .outputFluids(safeFluidOf('gtceu:oxygen', 500))
    .outputFluids(safeFluidOf('susy:mixed_cyanide_solution', 500))
    .duration(40)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillation_tower('rhrr4dg88i9wwl') // remapped from original line 151
    .inputFluids(safeFluidOf('susy:mixed_cyanide_solution', 500))
    .itemOutputs('3x #forge:dusts/sodium_cyanide')
    .outputFluids(safeFluidOf('minecraft:water', 500))
    .outputFluids(safeFluidOf('susy:gtfo_hydrogen_cyanide', 1000))
    .duration(40)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('qrev89yomcf5zm') // remapped from original line 160
    .itemInputs('16x #forge:wires/fine_gold_plated_steel')
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 6000))
    .itemOutputs('1x #forge:dusts/gold')
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 3000))
    .outputFluids(safeFluidOf('susy:iron_iii_nitrate_solution', 3000))
    .duration(40)
    .EUt(voltAmps[2])

  event.recipes.susy.roaster('fznpbaa2qiy7j5') // remapped from original line 170
    .inputFluids(safeFluidOf('susy:iron_iii_nitrate_solution', 6000))
    .itemOutputs('5x #forge:dusts/iron_iii_oxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 6000))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 6000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .duration(80)
    .EUt(voltAmps[2])

  event.recipes.susy.continuous_stirred_tank_reactor('zsttoq56tolbvy') // remapped from original line 181
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 150))
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 50))
    .outputFluids(safeFluidOf('gtceu:aqua_regia', 200))
    .duration(6)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('ozuoswxyhbyg34') // remapped from original line 189
    .itemInputs('3x #forge:dusts/gold')
    .inputFluids(safeFluidOf('gtceu:aqua_regia', 16000))
    .outputFluids(safeFluidOf('susy:chloroauric_acid_solution', 1000))
    .chancedOutput('1000x #forge:dusts/silver_chloride', 1000, 0)
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.susy.roaster('dxf9tkuyo3txwa') // remapped from original line 198
    .inputFluids(safeFluidOf('susy:chloroauric_acid_solution', 1000))
    .itemOutputs('15x #forge:dusts/chloroauric_acid')
    .outputFluids(safeFluidOf('susy:dense_steam', 6500))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 1000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 500))
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('on46vtmg8ozb7o') // remapped from original line 208
    .itemInputs('5x #forge:dusts/chloroauric_acid')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .outputFluids(safeFluidOf('susy:wohlwill_electrolyte', 1000))
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electrolytic_cell('zw3vvlbdvywl5h') // remapped from original line 217
    .itemInputs('1x #forge:plates/gold')
    .inputFluids(safeFluidOf('susy:wohlwill_electrolyte', 250))
    .notConsumable('1x #forge:plates/titanium')
    .notConsumable(safeFluidOf('susy:wohlwill_electrolyte', 1000))
    .itemOutputs('1x #forge:dusts/high_purity_gold')
    .chancedOutput(metaitem('anode_slime.gold'), 600, 0)
    .outputFluids(safeFluidOf('susy:spent_wohlwill_electrolyte', 250))
    .duration(480)
    .EUt(voltAmps[3])

  event.recipes.gtceu.electrolytic_cell('qbm9gsnvd9fwxo') // remapped from original line 229
    .itemInputs('1x #forge:plates/gold')
    .inputFluids(safeFluidOf('susy:wohlwill_electrolyte', 250))
    .notConsumable('1x #forge:plates/high_purity_gold')
    .notConsumable(safeFluidOf('susy:wohlwill_electrolyte', 1000))
    .itemOutputs('1x #forge:dusts/high_purity_gold')
    .chancedOutput(metaitem('anode_slime.gold'), 600, 0)
    .outputFluids(safeFluidOf('susy:spent_wohlwill_electrolyte', 250))
    .duration(560)
    .EUt(voltAmps[3])

  event.recipes.susy.batch_reactor('kivjg4dcon08le') // remapped from original line 241
    .inputFluids(safeFluidOf('susy:spent_wohlwill_electrolyte', 2000))
    .inputFluids(safeFluidOf('gtceu:sulfur_dioxide', 3000))
    .itemOutputs('1x #forge:dusts/gold')
    .outputFluids(safeFluidOf('susy:sulfuric_pgm_solution', 1000))
    .duration(120)
    .EUt(voltAmps[3])

  event.recipes.susy.batch_reactor('tmlv1hrtnm0slw') // remapped from original line 257
    .itemInputs('15x #forge:dusts/calcium_hydroxide')
    .inputFluids(safeFluidOf('susy:sulfuric_pgm_solution', 1000))
    .itemOutputs('18x #forge:dusts/calcium_sulfate')
    .outputFluids(safeFluidOf('susy:pgm_solution', 1000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('j3vffhx237jiwv') // remapped from original line 267
    .itemInputs(metaitem('anode_slime.silver'))
    .inputFluids(safeFluidOf('gtceu:aqua_regia', 16000))
    .outputFluids(safeFluidOf('susy:chloroauric_acid_solution', 1000))
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('olfgdjkpoeb2rx') // remapped from original line 275
    .itemInputs(metaitem('anode_slime.gold'))
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 2000))
    .outputFluids(safeFluidOf('susy:pgm_solution', 1000))
    .outputFluids(safeFluidOf('susy:silver_nitrate_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 1000))
    .duration(240)
    .EUt(voltAmps[2])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // BATCH_REACTOR = recipemap('batch_reactor')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // ROASTER = recipemap('roaster')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // MACERATOR = recipemap('macerator')
  // MIXER = recipemap('mixer')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  //     //ADD MILLER PROCESS FOR OTHER ELECTROREFINING DORES
  //     //Au3+ + 3e- --> Au
  //     //SO2 + 2H2O --> SO4 2- + 4H+ + 2e-
  //     //2 Au3+ + 3SO2 + 6H2O --> 3SO4 2- + 12H+
  //     //in solution containing 2 H+, 8 Cl-, 4 HCl
  //     //added products: 3 SO4 2-, 12 H+
  //     //final solution: 12 HCl, 3 H2SO4, 8 H2O
});