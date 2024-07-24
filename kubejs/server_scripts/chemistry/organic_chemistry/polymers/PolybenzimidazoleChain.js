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

  event.recipes.susy.batch_reactor('hbehmxnm2aaqog') // remapped from original line 12
    .inputFluids(safeFluidOf('gtceu:phenol', 1000))
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .outputFluids(safeFluidOf('susy:sodium_phenoxide_solution', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('qzxfvjf8tgrfn9') // remapped from original line 20
    .inputFluids(safeFluidOf('susy:isophthaloyl_chloride_solution', 50))
    .inputFluids(safeFluidOf('susy:sodium_phenoxide_solution', 100))
    .outputFluids(safeFluidOf('susy:diphenyl_isophthalate_solution', 50))
    .outputFluids(safeFluidOf('gtceu:salt_water', 100))
    .duration(10)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('ns5i8klyrac7g3') // remapped from original line 31
    .inputFluids(safeFluidOf('susy:two_chloronitrobenzene', 288))
    .inputFluids(safeFluidOf('susy:hot_hp_hydrogen', 10000))
    .notConsumable('1x #forge:dusts/palladium_on_carbon')
    .itemOutputs('1x #forge:dusts/two_two_dichlorohydrazobenzene')
    .outputFluids(safeFluidOf('minecraft:water', 4000))
    .duration(300)
    .EUt(120)

  event.recipes.susy.batch_reactor('t3eywqy3boupts') // remapped from original line 41
    .itemInputs('1x #forge:dusts/two_two_dichlorohydrazobenzene')
    .inputFluids(safeFluidOf('gtceu:toluene', 1000))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:dichlorobenzidine_solution', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.fluidized_bed_reactor('i8gju1ablr5ywn') // remapped from original line 52
    .inputFluids(safeFluidOf('susy:dichlorobenzidine_solution', 100))
    .inputFluids(safeFluidOf('susy:hot_compressed_ammonia', 200))
    .notConsumable('1x #forge:dusts/copper')
    .outputFluids(safeFluidOf('susy:diaminobenzidine_solution', 100))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 200))
    .duration(20)
    .EUt(60)

  event.recipes.susy.polymerization_tank('rcqjiyfnikvtbk') // remapped from original line 64
    .notConsumable(safeFluidOf('gtceu:nitrogen', 8000))
    .inputFluids(safeFluidOf('susy:diaminobenzidine_solution', 1000))
    .inputFluids(safeFluidOf('susy:diphenyl_isophthalate_solution', 1000))
    .itemOutputs('2x #forge:dusts/pbi_foam')
    .outputFluids(safeFluidOf('susy:pbi_waste', 4000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(200)
    .EUt(240)

  event.recipes.susy.ROASTER('hwtrz8mcku0vrd') // remapped from original line 75
    .itemInputs('1x #forge:dusts/pbi_foam')
    .itemOutputs('1x #forge:dusts/pbi_prepolymer')
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.MIXER('r4pmygwdjfrpvn') // remapped from original line 82
    .itemInputs('2x #forge:dusts/lithium_chloride')
    .inputFluids(safeFluidOf('susy:dimethylacetamide', 1000))
    .itemInputs('1x #forge:dusts/pbi_prepolymer')
    .outputFluids(safeFluidOf('susy:pbi_solution', 1000))
    .duration(100)
    .EUt(120)

  event.recipes.gtceu.CHEMICAL_BATH('s0b5caca49fnhg') // remapped from original line 91
    .inputFluids(safeFluidOf('susy:hot_hp_nitrogen', 160))
    .inputFluids(safeFluidOf('susy:pbi_solution', 1000))
    .notConsumable(metaitem('spinneret'))
    .itemOutputs('8x #forge:fibers/polybenzimidazole')
    .outputFluids(safeFluidOf('susy:spent_pbi_solution', 1000))
    .duration(100)
    .EUt(480)

  event.recipes.gtceu.DISTILLERY('bgwlj9ybotxvk1') // remapped from original line 101
    .inputFluids(safeFluidOf('susy:spent_pbi_solution', 1000))
    .itemOutputs('2x #forge:dusts/lithium_chloride')
    .outputFluids(safeFluidOf('susy:dimethylacetamide', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('ompnhnx4lozjgk') // remapped from original line 109
    .inputFluids(safeFluidOf('susy:pbi_waste', 4000))
    .outputFluids(safeFluidOf('gtceu:toluene', 1000))
    .outputFluids(safeFluidOf('gtceu:phenol', 2000))
    .outputFluids(safeFluidOf('susy:dichloroethane', 1000))
    .duration(300)
    .EUt(240)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // BR = recipemap('batch_reactor')
  // POLYMERIZATION = recipemap('polymerization_tank')
  // FLUIDIZEDBR = recipemap('fluidized_bed_reactor')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // SIFTER = recipemap('sifter')
  // CENTRIFUGE = recipemap('centrifuge')
});