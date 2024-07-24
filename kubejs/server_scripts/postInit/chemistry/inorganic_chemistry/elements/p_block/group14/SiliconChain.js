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
  event.remove({ type: 'gtceu:compressor', input: '#forge:dusts/silicon_carbide'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/silicon' && '#forge:dusts/phosphorus' && '#forge:dusts/small_gallium_arsenide' && safeFluidOf('gtceu:nitrogen')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:blocks/silicon' && '#forge:ingots/naquadah' && '#forge:dusts/gallium_arsenide' && safeFluidOf('gtceu:argon')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:blocks/silicon' && '#forge:ingots/neutronium' && '#forge:dusts/gallium_arsenide' && safeFluidOf('gtceu:xenon')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:boule.silicon' && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:boule.silicon' && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:boule.silicon' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/silicon_dioxide' && '#forge:dusts/carbon'})

  event.recipes.gtceu.ARC_FURNACE('70llz2xvvtgwy2') // remapped from original line 100
    .itemInputs('2x #forge:dusts/silicon_carbide')
    .itemOutputs('1x #forge:dusts/silicon')
    .itemOutputs('1x #forge:dusts/graphite')
    .EUt(60)
    .duration(270)

  event.recipes.susy.ROASTER('ovxcxkgtkdu5o8') // remapped from original line 108
    .itemInputs('1x #forge:dusts/silicon')
    .inputFluids(safeFluidOf('gtceu:chlorine', 4000))
    .outputFluids(safeFluidOf('susy:silicon_tetrachloride', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.DISTILLERY('vtnntuvmiibpke') // remapped from original line 116
    .inputFluids(safeFluidOf('susy:silicon_tetrachloride', 1000))
    .outputFluids(safeFluidOf('susy:purified_silicon_tetrachloride', 1000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.ROASTER('w8wco1zewacwvm') // remapped from original line 123
    .inputFluids(safeFluidOf('susy:purified_silicon_tetrachloride', 1000))
    .itemInputs('2x #forge:dusts/any_purity_zinc')
    .itemOutputs('1x #forge:dusts/high_purity_silicon')
    .outputFluids(safeFluidOf('susy:zinc_chloride', 864))
    .duration(100)
    .EUt(30)

  event.recipes.susy.ROASTER('rixewby7i7emnq') // remapped from original line 132
    .itemInputs('1x #forge:dusts/silicon')
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 3000))
    .outputFluids(safeFluidOf('susy:trichlorosilane', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.DISTILLERY('f4vzms2ujxgg3e') // remapped from original line 141
    .inputFluids(safeFluidOf('susy:trichlorosilane', 1000))
    .outputFluids(safeFluidOf('susy:purified_trichlorosilane', 1000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.ROASTER('yudhvdxrrvhylc') // remapped from original line 148
    .inputFluids(safeFluidOf('susy:purified_trichlorosilane', 1000))
    .itemInputs('1x #forge:dusts/any_purity_zinc')
    .itemOutputs('1x #forge:dusts/high_purity_silicon')
    .outputFluids(safeFluidOf('susy:zinc_chloride', 432))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.VACUUMCHAMBER('uzfvr8bz0lr0uh') // remapped from original line 158
    .inputFluids(safeFluidOf('gtceu:silicon_dioxide', 1008))
    .notConsumable(metaitem('shape.mold.crucible'))
    .itemOutputs(metaitem('crucible.quartz'))
    .duration(1440)
    .EUt(30)

  event.recipes.susy.CRYSTALLIZER('ibjwzev3ybnyk9') // remapped from original line 166
    .circuit(1)
    .inputFluids(safeFluidOf('susy:high_purity_silicon', 4608))
    .itemInputs(metaitem('seed_crystal.silicon'))
    .notConsumable(metaitem('crucible.quartz'))
    .itemOutputs(metaitem('unrefined_boule.silicon'))
    .duration(9000)
    .EUt(120)

  event.recipes.susy.CRYSTALLIZER('iipj3buquq0vrs') // remapped from original line 176
    .circuit(2)
    .inputFluids(safeFluidOf('susy:high_purity_silicon', 4608))
    .notConsumable(safeFluidOf('gtceu:argon', 8000))
    .itemInputs(metaitem('seed_crystal.silicon'))
    .notConsumable(metaitem('crucible.quartz'))
    .itemOutputs(metaitem('unrefined_boule.silicon'))
    .duration(6750)
    .EUt(120)

  event.recipes.susy.ZONEREFINER('dsele0gu1idhem') // remapped from original line 187
    .itemInputs(metaitem('unrefined_boule.silicon'))
    .itemOutputs(metaitem('boule.silicon'))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.gtceu.CUTTER('whed8terycagk8') // remapped from original line 194
    .itemInputs(metaitem('boule.silicon'))
    .inputFluids(safeFluidOf('susy:ultrapure_water', 500))
    .itemOutputs(metaitem('wafer.raw.silicon') * 14)
    .chancedOutput(metaitem('wafer.raw.silicon') * 2, 5000, 0)
    .itemOutputs(metaitem('seed_crystal.silicon'))
    .duration(4500)
    .EUt(64)

  event.recipes.gtceu.MIXER('vtrnedkxmcnndq') // remapped from original line 204
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 500))
    .inputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 500))
    .outputFluids(safeFluidOf('susy:wafer_treatment_acid', 1000))
    .duration(600)
    .EUt(64)

  event.recipes.gtceu.MIXER('a741jcicffdsgq') // remapped from original line 213
    .circuit(2)
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 450))
    .inputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 450))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 100))
    .outputFluids(safeFluidOf('susy:wafer_treatment_acid', 1000))
    .duration(200)
    .EUt(64)

  event.recipes.gtceu.CHEMICAL_BATH('lr47b4xwpsu4zk') // remapped from original line 223
    .itemInputs(metaitem('wafer.raw.silicon'))
    .inputFluids(safeFluidOf('susy:wafer_treatment_acid', 50))
    .itemOutputs(metaitem('wafer.treated.silicon'))
    .outputFluids(safeFluidOf('susy:acidic_wastewater', 50))
    .duration(225)
    .EUt(64)

  event.recipes.gtceu.MIXER('qtkj1woxd2yitv') // remapped from original line 232
    .itemInputs('1x #forge:dusts/sodium_hydroxide')
    .itemInputs('3x #forge:dusts/silicon_dioxide')
    .inputFluids(safeFluidOf('susy:ultrapure_water', 1000))
    .outputFluids(safeFluidOf('susy:silicon_dioxide_slurry', 1000))
    .duration(200)
    .EUt(64)

  event.recipes.susy.POLISHING_MACHINE('kbmgudulpa9h75') // remapped from original line 241
    .itemInputs(metaitem('wafer.treated.silicon'))
    .inputFluids(safeFluidOf('susy:silicon_dioxide_slurry', 50))
    .itemOutputs(metaitem('wafer.silicon'))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.AUTOCLAVE('jzzcftwzns6viy') // remapped from original line 249
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .itemInputs('1x #forge:dusts/high_purity_silicon')
    .chancedOutput(metaitem('seed_crystal.silicon'), 1000, 500)
    .duration(1200)
    .EUt(30)

  event.recipes.susy.ROASTER('th6bus1cp36pcd') // remapped from original line 257
    .inputFluids(safeFluidOf('susy:silicon_tetrachloride', 3000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 4000))
    .itemInputs('1x #forge:dusts/silicon')
    .outputFluids(safeFluidOf('susy:trichlorosilane', 4000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.FBR('2og2bc3yl5naxv') // remapped from original line 266
    .inputFluids(safeFluidOf('susy:trichlorosilane', 2000))
    .notConsumable('1x #forge:catalysts/bed_aluminium_chloride')
    .outputFluids(safeFluidOf('susy:disproportionated_trichlorosilane', 2000))
    .duration(100)
    .EUt(120)

  event.recipes.gtceu.DT('vi7kaqnqsptys4') // remapped from original line 274
    .inputFluids(safeFluidOf('susy:disproportionated_trichlorosilane', 2000))
    .outputFluids(safeFluidOf('gtceu:dichlorosilane', 1000))
    .outputFluids(safeFluidOf('susy:silicon_tetrachloride', 1000))
    .duration(100)
    .EUt(120)

  event.recipes.susy.FBR('kjqpwxzipgpbqv') // remapped from original line 282
    .inputFluids(safeFluidOf('gtceu:dichlorosilane', 2000))
    .notConsumable('1x #forge:catalysts/bed_aluminium_chloride')
    .outputFluids(safeFluidOf('susy:disproportionated_dichlorosilane', 2000))
    .duration(100)
    .EUt(120)

  event.recipes.gtceu.DT('dogcfopaxltwm3') // remapped from original line 290
    .inputFluids(safeFluidOf('susy:disproportionated_dichlorosilane', 2000))
    .outputFluids(safeFluidOf('susy:trichlorosilane', 1000))
    .outputFluids(safeFluidOf('gtceu:chlorosilane', 1000))
    .duration(100)
    .EUt(120)

  event.recipes.susy.FBR('ubnkjcwexkggge') // remapped from original line 298
    .inputFluids(safeFluidOf('gtceu:chlorosilane', 2000))
    .notConsumable('1x #forge:catalysts/bed_aluminium_chloride')
    .outputFluids(safeFluidOf('susy:disproportionated_chlorosilane', 2000))
    .duration(100)
    .EUt(120)

  event.recipes.gtceu.DT('6dsv4b5chg2gvq') // remapped from original line 306
    .inputFluids(safeFluidOf('susy:disproportionated_chlorosilane', 2000))
    .outputFluids(safeFluidOf('gtceu:dichlorosilane', 1000))
    .outputFluids(safeFluidOf('gtceu:silane', 1000))
    .duration(100)
    .EUt(120)

  event.recipes.susy.CSTR('ep54gffxvdvmes') // remapped from original line 344
    .inputFluids(safeFluidOf('susy:silicon_tetrachloride', 50))
    .inputFluids(safeFluidOf('gtceu:ethanol', 200))
    .outputFluids(safeFluidOf('susy:tetraethyl_orthosilicate', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 200))
    .duration(5)
    .EUt(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (carbon in dusts()) {
  //     ARC_FURNACE.recipeBuilder()
  //             .inputs(ore('dustSiliconDioxide') * 3)
  //             .inputs(ore(carbon.name) * carbon.equivalent(2))
  //             .notConsumable(fluid('air') * 1000)
  //             .outputs(metaitem('dustSilicon'))
  //             .circuitMeta(1)
  //             .fluidOutputs(fluid('carbon_monoxide') * 2000)
  //             .EUt(30)
  //             .duration(300)
  //             .buildAndRegister()
  // 
  //     ARC_FURNACE.recipeBuilder()
  //             .inputs(ore('dustQuartzite') * 3)
  //             .inputs(ore(carbon.name) * carbon.equivalent(2))
  //             .notConsumable(fluid('air') * 1000)
  //             .outputs(metaitem('dustSilicon'))
  //             .fluidOutputs(fluid('carbon_monoxide') * 2000)
  //             .EUt(30)
  //             .duration(300)
  //             .buildAndRegister()
  // 
  //     ARC_FURNACE.recipeBuilder()
  //             .inputs(ore('dustCertusQuartz') * 3)
  //             .inputs(ore(carbon.name) * carbon.equivalent(2))
  //             .notConsumable(fluid('air') * 1000)
  //             .outputs(metaitem('dustSilicon'))
  //             .fluidOutputs(fluid('carbon_monoxide') * 2000)
  //             .EUt(30)
  //             .duration(300)
  //             .buildAndRegister()
  // 
  //     ARC_FURNACE.recipeBuilder()
  //             .inputs(ore('dustNetherQuartz') * 3)
  //             .inputs(ore(carbon.name) * carbon.equivalent(2))
  //             .notConsumable(fluid('air') * 1000)
  //             .outputs(metaitem('dustSilicon'))
  //             .fluidOutputs(fluid('carbon_monoxide') * 2000)
  //             .EUt(30)
  //             .duration(300)
  //             .buildAndRegister()
  // 
  //     ARC_FURNACE.recipeBuilder()
  //             .inputs(ore('dustSiliconDioxide') * 3)
  //             .inputs(ore(carbon.name) * carbon.equivalent(3))
  //             .circuitMeta(2)
  //             .outputs(metaitem('dustSiliconCarbide') * 2)
  //             .fluidOutputs(fluid('carbon_monoxide') * 2000)
  //             .EUt(60)
  //             .duration(300)
  //             .buildAndRegister()
  // }

  // for (fuel in sintering_fuels) {
  //     if (fuel.isPlasma) {
  //         SINTERING_RECIPES.recipeBuilder()
  //                 .notConsumable(metaitem('shape.mold.plate'))
  //                 .inputs(ore('dustSiliconCarbide'))
  //                 .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                 .outputs(metaitem('plateSiliconCarbide'))
  //                 .fluidOutputs(fluid(fuel.byproduct) * fuel.byproductAmount)
  //                 .duration(fuel.duration)
  //                 .EUt(Globals.voltAmps[3])
  //                 .buildAndRegister()
  // 
  //     } else {
  //         for (comburent in sintering_comburents) {
  //             SINTERING_RECIPES.recipeBuilder()
  //                     .notConsumable(metaitem('shape.mold.plate'))
  //                     .inputs(ore('dustSiliconCarbide'))
  //                     .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                     .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //                     .outputs(metaitem('plateSiliconCarbide'))
  //                     .fluidOutputs(fluid(fuel.byproduct) * fuel.byproductAmount)
  //                     .duration(fuel.duration + comburent.duration)
  //                     .EUt(Globals.voltAmps[1])
  //                     .buildAndRegister()
  //         }
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.SinteringGlobals.*
  // import static globals.CarbonGlobals.*
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // def ROASTER = recipemap('roaster');
  // def DISTILLERY = recipemap('distillery');
  // def DT = recipemap('distillation_tower');
  // def MIXER = recipemap('mixer');
  // def ELECTROLYZER = recipemap('electrolyzer');
  // def CRYSTALLIZER = recipemap('crystallizer');
  // def CUTTER = recipemap('cutter');
  // def AUTOCLAVE = recipemap('autoclave');
  // def ZONEREFINER = recipemap('zone_refiner');
  // def VACUUMCHAMBER = recipemap('vacuum_chamber')
  // def FBR = recipemap('fixed_bed_reactor')
  // def SINTERING_RECIPES = recipemap("sintering_oven")
  // def EBF = recipemap('electric_blast_furnace')
  // def CHEMICAL_BATH = recipemap('chemical_bath')
  // def POLISHING_MACHINE = recipemap('polishing_machine')
  // def CSTR = recipemap('continuous_stirred_tank_reactor')
});