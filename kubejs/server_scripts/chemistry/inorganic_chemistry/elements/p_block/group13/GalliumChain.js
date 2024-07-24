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
  event.remove({ type: 'gtceu:distillery', input: 'susy:circuit.integrated' && safeFluidOf('susy:crude_gallium_trichloride')})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/gallium' && '#forge:dusts/arsenic' && 'susy:circuit.integrated'})

  event.recipes.gtceu.electrolyzer('kb0i0c7c8yjsfe') // remapped from original line 16
    .inputFluids(safeFluidOf('susy:impure_soda_ash_solution', 1000))
    .notConsumable('1x #forge:rods/steel')
    .notConsumable(metaitem('graphite_electrode'))
    .outputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .chancedOutput('500x #forge:dusts/gallium', 500, 0)
    .duration(300)
    .EUt(voltAmps[1])

  event.recipes.gtceu.electrolyzer('g4btqcmhqpu372') // remapped from original line 26
    .inputFluids(safeFluidOf('susy:impure_sodium_hydroxide_solution', 1000))
    .notConsumable('1x #forge:rods/steel')
    .notConsumable(metaitem('graphite_electrode'))
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .chancedOutput('500x #forge:dusts/gallium', 500, 0)
    .duration(300)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('9rqg8wsmjphbob') // remapped from original line 41
    .itemInputs('1x #forge:dusts/gallium')
    .inputFluids(safeFluidOf('gtceu:chlorine', 3500))
    .itemOutputs('3x #forge:dusts/crude_gallium_trichloride')
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillery('m7exsuobvshvs7') // remapped from original line 50
    .inputFluids(safeFluidOf('susy:crude_gallium_trichloride', 432))
    .outputFluids(safeFluidOf('susy:gallium_trichloride', 750))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('sfqcnpe601xntj') // remapped from original line 57
    .inputFluids(safeFluidOf('susy:crude_gallium_trichloride', 432))
    .outputFluids(safeFluidOf('susy:gallium_trichloride', 1000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('qryp4zmso0czex') // remapped from original line 67
    .inputFluids(safeFluidOf('susy:gallium_trichloride', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 3000))
    .itemOutputs('1x #forge:dusts/high_purity_gallium')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 3000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electrolyzer('kdapdrmkawzmvj') // remapped from original line 76
    .notConsumable('1x #forge:rods/iron')
    .notConsumable(metaitem('graphite_electrode'))
    .notConsumable(safeFluidOf('minecraft:water', 1000))
    .itemInputs('3x #forge:dusts/mercury_ii_chloride')
    .outputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .outputFluids(safeFluidOf('gtceu:mercury', 1000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.vacuum_distillation('xqknqgnfvhhbkf') // remapped from original line 88
    .itemInputs('1x #forge:dusts/gallium')
    .itemOutputs('1x #forge:dusts/high_purity_gallium')
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.crystallizer('yi0bnvnvtslhjr') // remapped from original line 98
    .itemInputs('1x #forge:dusts/small_high_purity_arsenic')
    .inputFluids(safeFluidOf('susy:high_purity_gallium', 36))
    .chancedOutput(metaitem('seed_crystal.gallium_arsenide'), 2500, 0)
    .duration(500)
    .EUt(voltAmps[1])

  event.recipes.susy.cvd('eynu8aafto3yab') // remapped from original line 107
    .inputFluids(safeFluidOf('susy:boron_trichloride', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .itemOutputs('2x #forge:dusts/boron_nitride')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 3000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.gtceu.forming_press('bzohuv51udwyus') // remapped from original line 116
    .itemInputs('14x #forge:dusts/boron_nitride')
    .notConsumable(metaitem('shape.mold.crucible'))
    .itemOutputs(metaitem('crucible.boron.nitride'))
    .duration(500)
    .EUt(voltAmps[1])

  event.recipes.susy.crystallizer('w43sf7qfyo3njh') // remapped from original line 125
    .circuit(1)
    .inputFluids(safeFluidOf('susy:high_purity_gallium', 144))
    .inputFluids(safeFluidOf('susy:high_purity_arsenic', 144))
    .notConsumable(safeFluidOf('susy:boron_trioxide', 720))
    .itemInputs(metaitem('seed_crystal.gallium_arsenide'))
    .notConsumable(metaitem('crucible.boron.nitride'))
    .itemOutputs(metaitem('unrefined_boule.gallium_arsenide'))
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.crystallizer('5nyiqadmwbufld') // remapped from original line 137
    .circuit(2)
    .inputFluids(safeFluidOf('susy:high_purity_gallium', 144))
    .inputFluids(safeFluidOf('susy:high_purity_arsenic', 144))
    .notConsumable(safeFluidOf('susy:boron_trioxide', 720))
    .notConsumable(metaitem('seed_crystal.gallium_arsenide'))
    .notConsumable(metaitem('crucible.boron.nitride'))
    .itemOutputs('1x #forge:ingots/gallium_arsenide')
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.zone_refiner('usq6d8jtvjhqbo') // remapped from original line 149
    .itemInputs(metaitem('unrefined_boule.gallium_arsenide'))
    .itemOutputs(metaitem('boule.gallium_arsenide'))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.gtceu.cutter('plysqvr7hgfn86') // remapped from original line 156
    .inputFluids(safeFluidOf('susy:ultrapure_water', 100))
    .itemInputs(metaitem('boule.gallium_arsenide'))
    .itemOutputs(metaitem('wafer.gallium_arsenide') * 16)
    .itemOutputs(metaitem('seed_crystal.gallium_arsenide'))
    .duration(400)
    .EUt(64)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // ELECTROLYZER = recipemap('electrolyzer')
  // BATCH_REACTOR = recipemap('batch_reactor')
  // VACUUM_DT = recipemap('vacuum_distillation')
  // DT = recipemap('distillation_tower')
  // DISTILLERY = recipemap('distillery')
  // CRYSTALLIZER = recipemap('crystallizer')
  // CVD = recipemap('cvd')
  // FORMINGPRESS = recipemap('forming_press')
  // ZONEREFINER = recipemap('zone_refiner')
  // MACERATOR = recipemap('macerator')
  // CUTTER = recipemap('cutter')
});