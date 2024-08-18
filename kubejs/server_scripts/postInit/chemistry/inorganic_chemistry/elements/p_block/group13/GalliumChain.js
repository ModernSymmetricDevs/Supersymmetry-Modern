ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:distillery', input: 'susy:circuit.integrated' && safeFluidOf('susy:crude_gallium_trichloride')})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/gallium' && '#forge:dusts/arsenic' && 'susy:circuit.integrated'})

  event.recipes.gtceu.electrolyzer('rjkjueuk8fxdq3') // remapped from original line 16
    .inputFluids(safeFluidOf('susy:impure_soda_ash_solution', 1000))
    .notConsumable('1x #forge:rods/steel')
    .notConsumable(safeItemId('1x susy:graphite_electrode'))
    .outputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .chancedOutput('1x #forge:dusts/gallium', 500, 0)
    .duration(300)
    .EUt(voltAmps[1])

  event.recipes.gtceu.electrolyzer('5vqirctvzp7uqs') // remapped from original line 26
    .inputFluids(safeFluidOf('susy:impure_sodium_hydroxide_solution', 1000))
    .notConsumable('1x #forge:rods/steel')
    .notConsumable(safeItemId('1x susy:graphite_electrode'))
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .chancedOutput('1x #forge:dusts/gallium', 500, 0)
    .duration(300)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('vpe2fcxdgjjkze') // remapped from original line 41
    .itemInputs('1x #forge:dusts/gallium')
    .inputFluids(safeFluidOf('gtceu:chlorine', 3500))
    .itemOutputs('3x #forge:dusts/crude_gallium_trichloride')
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillery('c7yrrv4rd6e3b0') // remapped from original line 50
    .inputFluids(safeFluidOf('susy:crude_gallium_trichloride', 432))
    .outputFluids(safeFluidOf('susy:gallium_trichloride', 750))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('8stg1gaoxzgsl5') // remapped from original line 57
    .inputFluids(safeFluidOf('susy:crude_gallium_trichloride', 432))
    .outputFluids(safeFluidOf('susy:gallium_trichloride', 1000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('w4dgufqd00alem') // remapped from original line 67
    .inputFluids(safeFluidOf('susy:gallium_trichloride', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 3000))
    .itemOutputs('1x #forge:dusts/high_purity_gallium')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 3000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electrolyzer('codw0bsiq7islx') // remapped from original line 76
    .notConsumable('1x #forge:rods/iron')
    .notConsumable(safeItemId('1x susy:graphite_electrode'))
    .notConsumable(safeFluidOf('minecraft:water', 1000))
    .itemInputs('3x #forge:dusts/mercury_ii_chloride')
    .outputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .outputFluids(safeFluidOf('gtceu:mercury', 1000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.vacuum_distillation('bhmxwgcork4eao') // remapped from original line 88
    .itemInputs('1x #forge:dusts/gallium')
    .itemOutputs('1x #forge:dusts/high_purity_gallium')
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.crystallizer('yy8r76kvrighir') // remapped from original line 98
    .itemInputs('1x #forge:dusts/small_high_purity_arsenic')
    .inputFluids(safeFluidOf('susy:high_purity_gallium', 36))
    .chancedOutput(safeItemId('1x susy:seed_crystal.gallium_arsenide'), 2500, 0)
    .duration(500)
    .EUt(voltAmps[1])

  event.recipes.susy.cvd('ouz9x72pg9pncx') // remapped from original line 107
    .inputFluids(safeFluidOf('susy:boron_trichloride', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .itemOutputs('2x #forge:dusts/boron_nitride')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 3000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.gtceu.forming_press('iqhve4uvaq8nfe') // remapped from original line 116
    .itemInputs('14x #forge:dusts/boron_nitride')
    .notConsumable(safeItemId('1x susy:shape.mold.crucible'))
    .itemOutputs(safeItemId('1x susy:crucible.boron.nitride'))
    .duration(500)
    .EUt(voltAmps[1])

  event.recipes.susy.crystallizer('cessqkipv5mnud') // remapped from original line 125
    .circuit(1)
    .inputFluids(safeFluidOf('susy:high_purity_gallium', 144))
    .inputFluids(safeFluidOf('susy:high_purity_arsenic', 144))
    .notConsumable(safeFluidOf('susy:boron_trioxide', 720))
    .itemInputs(safeItemId('1x susy:seed_crystal.gallium_arsenide'))
    .notConsumable(safeItemId('1x susy:crucible.boron.nitride'))
    .itemOutputs(safeItemId('1x susy:unrefined_boule.gallium_arsenide'))
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.crystallizer('2nvedx7fasbvnq') // remapped from original line 137
    .circuit(2)
    .inputFluids(safeFluidOf('susy:high_purity_gallium', 144))
    .inputFluids(safeFluidOf('susy:high_purity_arsenic', 144))
    .notConsumable(safeFluidOf('susy:boron_trioxide', 720))
    .notConsumable(safeItemId('1x susy:seed_crystal.gallium_arsenide'))
    .notConsumable(safeItemId('1x susy:crucible.boron.nitride'))
    .itemOutputs('1x #forge:ingots/gallium_arsenide')
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.zone_refiner('cjctlkdmneiplx') // remapped from original line 149
    .itemInputs(safeItemId('1x susy:unrefined_boule.gallium_arsenide'))
    .itemOutputs(safeItemId('1x susy:boule.gallium_arsenide'))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.gtceu.cutter('ayxpk0alj2jcjg') // remapped from original line 156
    .inputFluids(safeFluidOf('susy:ultrapure_water', 100))
    .itemInputs(safeItemId('1x susy:boule.gallium_arsenide'))
    .itemOutputs(safeItemId('16x susy:wafer.gallium_arsenide'))
    .itemOutputs(safeItemId('1x susy:seed_crystal.gallium_arsenide'))
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