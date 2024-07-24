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

  event.recipes.susy.ROASTER('duhkfjtcpcezt0') // remapped from original line 14
    .itemInputs('1x #forge:dusts/acanthite')
    .itemInputs('1x #forge:dusts/tiny_calcite')
    .inputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .chancedOutput('3x #forge:dusts/silver_oxide', 7500, 0)
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .duration(60)
    .EUt(voltAmps[1])

  event.recipes.susy.ROASTER('zhnoxmihoych1o') // remapped from original line 24
    .itemInputs('1x #forge:dusts/acanthite')
    .itemInputs('1x #forge:dusts/tiny_calcite')
    .inputFluids(safeFluidOf('gtceu:air', 4500))
    .chancedOutput('3x #forge:dusts/silver_oxide', 7500, 0)
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .duration(60)
    .EUt(voltAmps[1])

  event.recipes.susy.ROASTER('wf20sbbdbuemoe') // remapped from original line 34
    .itemInputs('3x #forge:dusts/silver_sulfide')
    .inputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .itemOutputs('3x #forge:dusts/silver_oxide')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .duration(60)
    .EUt(voltAmps[1])

  event.recipes.susy.ROASTER('nzpmkoafe06nce') // remapped from original line 43
    .itemInputs('3x #forge:dusts/silver_sulfide')
    .inputFluids(safeFluidOf('gtceu:air', 4500))
    .itemOutputs('3x #forge:dusts/silver_oxide')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .duration(60)
    .EUt(voltAmps[1])

  event.recipes.susy.ROASTER('zbgqnqa4brfijo') // remapped from original line 52
    .itemInputs('3x #forge:dusts/silver_oxide')
    .itemOutputs('2x #forge:dusts/silver')
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('jcsetuvz08at3i') // remapped from original line 62
    .itemInputs('1x #forge:dusts/acanthite')
    .itemInputs('12x #forge:dusts/sodium_cyanide')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 8000))
    .outputFluids(safeFluidOf('susy:sulfidic_silver_cyanide_solution', 8000))
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.susy.continuous_stirred_tank_reactor('mymm7ffmahjewr') // remapped from original line 71
    .inputFluids(safeFluidOf('susy:sulfidic_silver_cyanide_solution', 400))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 200))
    .outputFluids(safeFluidOf('susy:silver_cyanide_solution', 400))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 100))
    .duration(12)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electrolytic_cell('wotw8jncnph140') // remapped from original line 80
    .inputFluids(safeFluidOf('susy:silver_cyanide_solution', 8000))
    .notConsumable('1x #forge:rods/silver')
    .notConsumable(metaitem('graphite_electrode'))
    .itemOutputs('2x #forge:dusts/silver')
    .outputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .outputFluids(safeFluidOf('susy:sodium_cyanide_solution', 8000))
    .duration(480)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('8skvbrg6uuxeqj') // remapped from original line 92
    .itemInputs('1x #forge:dusts/pyrargyrite')
    .itemInputs('18x #forge:dusts/sodium_cyanide')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 12000)) 
    .outputFluids(safeFluidOf('susy:sulfidic_pyrargyrite_cyanide_leach_solution', 12000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('zs4zce9sspueoz') // remapped from original line 101
    .inputFluids(safeFluidOf('susy:sulfidic_pyrargyrite_cyanide_leach_solution', 12000))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 3000))
    .chancedOutput('5x #forge:dusts/antimony_iii_sulfide', 5000, 0)
    .outputFluids(safeFluidOf('susy:pyrargyrite_cyanide_leach_solution', 12000))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1500))
    .duration(120)  
    .EUt(voltAmps[2])

  event.recipes.gtceu.electrolytic_cell('wndqydojyhoc45') // remapped from original line 111
    .inputFluids(safeFluidOf('susy:pyrargyrite_cyanide_leach_solution', 12000))
    .notConsumable('1x #forge:rods/silver')
    .notConsumable(metaitem('graphite_electrode'))
    .itemOutputs('3x #forge:dusts/silver')
    .outputFluids(safeFluidOf('gtceu:chlorine', 6000))
    .outputFluids(safeFluidOf('susy:sodium_cyanide_solution', 12000))
    .duration(480)  
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('107ty2s2zgzdcp') // remapped from original line 123
    .itemInputs('1x #forge:dusts/stephanite')
    .itemInputs('15x #forge:dusts/sodium_cyanide')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 10000))
    .outputFluids(safeFluidOf('susy:sulfidic_stephanite_cyanide_leach_solution', 10000))
    .chancedOutput('5000x #forge:dusts/stephanite', 5000, 0)
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('4plevrd0fextud') // remapped from original line 133
    .inputFluids(safeFluidOf('susy:sulfidic_stephanite_cyanide_leach_solution', 10000))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 2500))
    .chancedOutput('5x #forge:dusts/antimony_iii_sulfide', 2500, 0)
    .outputFluids(safeFluidOf('susy:stephanite_cyanide_leach_solution', 10000))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1250))
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electrolytic_cell('kyuywknpc4heg9') // remapped from original line 143
    .inputFluids(safeFluidOf('susy:stephanite_cyanide_leach_solution', 20000))
    .notConsumable('1x #forge:rods/silver')
    .notConsumable(metaitem('graphite_electrode'))
    .itemOutputs('5x #forge:dusts/silver')
    .outputFluids(safeFluidOf('gtceu:chlorine', 5000))
    .outputFluids(safeFluidOf('susy:sodium_cyanide_solution', 20000))
    .duration(480)  
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('knavnepekhwtki') // remapped from original line 156
    .itemInputs('7x #forge:dusts/pyrargyrite')
    .itemInputs('42x #forge:dusts/sodium_thiosulfate')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 5000))
    .outputFluids(safeFluidOf('susy:pyrargyrite_thiosulfate_leach_solution', 1000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('njympzrq2trdei') // remapped from original line 165
    .itemInputs('9x #forge:dusts/sodium_sulfide')
    .inputFluids(safeFluidOf('susy:pyrargyrite_thiosulfate_leach_solution', 2000))
    .itemOutputs('9x #forge:dusts/silver_sulfide')
    .outputFluids(safeFluidOf('susy:thiosulfate_thioantimonite_solution', 2000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('b9etsy6ay3earv') // remapped from original line 174
    .inputFluids(safeFluidOf('susy:thiosulfate_thioantimonite_solution', 1000))
    .inputFluids(safeFluidOf('susy:iron_iii_chloride_solution', 1000))
    .itemOutputs('5x #forge:dusts/iron_thioantimonite')
    .outputFluids(safeFluidOf('susy:sodium_thiosulfate_solution', 6000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('whyw6owsqdwh04') // remapped from original line 183
    .itemInputs('10x #forge:dusts/iron_thioantimonite')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 6000))
    .itemOutputs('5x #forge:dusts/antimony_iii_sulfide')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 3000))
    .outputFluids(safeFluidOf('susy:diluted_iron_iii_chloride_solution', 2000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillery('am3cfdmnzt9bwx') // remapped from original line 193
    .inputFluids(safeFluidOf('susy:diluted_iron_iii_chloride_solution', 3000))
    .itemOutputs('4x #forge:dusts/iron_iii_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('nfd4mdihc2wejg') // remapped from original line 202
    .itemInputs('7x #forge:dusts/proustite')
    .itemInputs('42x #forge:dusts/sodium_thiosulfate')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 5000))
    .outputFluids(safeFluidOf('susy:proustite_thiosulfate_leach_solution', 1000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('gfvkiz73mjsyzg') // remapped from original line 211
    .itemInputs('9x #forge:dusts/sodium_sulfide')
    .inputFluids(safeFluidOf('susy:proustite_thiosulfate_leach_solution', 2000))
    .itemOutputs('9x #forge:dusts/silver_sulfide')
    .outputFluids(safeFluidOf('susy:thiosulfate_thioarsenite_solution', 2000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('3vxzjvu9ng3ma2') // remapped from original line 220
    .inputFluids(safeFluidOf('susy:thiosulfate_thioarsenite_solution', 1000))
    .inputFluids(safeFluidOf('susy:iron_iii_chloride_solution', 1000))
    .itemOutputs('5x #forge:dusts/iron_thioarsenite')
    .outputFluids(safeFluidOf('susy:sodium_thiosulfate_solution', 6000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('yqfvndz9njsznt') // remapped from original line 229
    .itemInputs('10x #forge:dusts/iron_thioarsenite')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 6000))
    .itemOutputs('5x #forge:dusts/arsenic_iii_sulfide')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 3000))
    .outputFluids(safeFluidOf('susy:diluted_iron_iii_chloride_solution', 2000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('79l6jqs7shgqtm') // remapped from original line 240
    .itemInputs('4x #forge:dusts/silver_chloride')
    .itemInputs('1x #forge:dusts/any_purity_zinc')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 10))
    .itemOutputs('2x #forge:dusts/silver')
    .outputFluids(safeFluidOf('susy:zinc_chloride_solution', 1000))
    .duration(360)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillery('knbrxuwiyjgcmu') // remapped from original line 251
    .inputFluids(safeFluidOf('susy:zinc_chloride_solution', 1000))
    .itemOutputs('3x #forge:dusts/zinc_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.electrolyzer('gvhfbzlyrijw1u') // remapped from original line 260
    .notConsumable('1x #forge:rods/silver')
    .notConsumable(metaitem('graphite_electrode'))
    .inputFluids(safeFluidOf('susy:silver_nitrate_solution', 2000))
    .itemOutputs('2x #forge:dusts/silver')
    .outputFluids(safeFluidOf('gtceu:nitric_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('qm9v5ylzzgsmo6') // remapped from original line 272
    .itemInputs('3x #forge:dusts/silver') 
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 4000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:silver_nitrate_solution', 2750))
    .outputFluids(safeFluidOf('gtceu:nitric_oxide', 1000))
    .duration(360)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electrolytic_cell('flgcpiowiabxel') // remapped from original line 282
    .itemInputs('1x #forge:plates/silver')
    .inputFluids(safeFluidOf('susy:silver_nitrate_solution', 250))
    .notConsumable('1x #forge:plates/stainless_steel')
    .notConsumable(safeFluidOf('susy:silver_nitrate_solution', 1000))
    .itemOutputs('1x #forge:dusts/high_purity_silver')
    .chancedOutput(metaitem('anode_slime.silver'), 400, 0)
    .outputFluids(safeFluidOf('susy:spent_moebius_electrolyte', 250))
    .duration(480)
    .EUt(voltAmps[2])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import gregtech.api.GregTechAPI;
  // import gregtech.api.unification.material.Material;
  // import static gregtech.api.unification.material.Materials.*;
  // import globals.Globals
  // ELECTROLYZER = recipemap('electrolyzer')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // BATCH_REACTOR = recipemap('batch_reactor')
  // DISTILLERY = recipemap('distillery')
});