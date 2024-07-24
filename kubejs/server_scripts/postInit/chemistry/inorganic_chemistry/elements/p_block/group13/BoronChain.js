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

  event.recipes.susy.roaster('9ufozxsw8bfcld') // remapped from original line 15
    .itemInputs('4x #forge:dusts/borax')
    .itemOutputs('13x #forge:dusts/sodium_tetraborate')
    .outputFluids(safeFluidOf('susy:dense_steam', 10000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('vjrg1kyewxlylp') // remapped from original line 24
    .itemInputs('13x #forge:dusts/sodium_tetraborate')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .itemOutputs('1x #forge:dusts/tiny_clay')
    .outputFluids(safeFluidOf('susy:borate_liquor', 2000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('umhnu4mbuc1onu') // remapped from original line 34
    .inputFluids(safeFluidOf('susy:borate_liquor', 2000))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .itemOutputs('28x #forge:dusts/boric_acid')
    .outputFluids(safeFluidOf('gtceu:salt_water', 2000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('imnfjgiguw50sy') // remapped from original line 44
    .itemInputs('14x #forge:dusts/boric_acid')
    .itemOutputs('5x #forge:dusts/boron_trioxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('szypjsviprrphl') // remapped from original line 53
    .itemInputs('5x #forge:dusts/boron_trioxide')
    .itemInputs('3x #forge:dusts/any_purity_magnesium')
    .itemOutputs('2x #forge:dusts/amorphous_boron')
    .itemOutputs('6x #forge:dusts/magnesia')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.macerator('iod3lop5qvul1n') // remapped from original line 62
    .itemInputs('2x #forge:dusts/amorphous_boron')
    .itemOutputs('1x #forge:dusts/boron')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.electrolytic_cell('m7kmohx676psr5') // remapped from original line 70
    .itemInputs('2x #forge:dusts/magnesia')
    .notConsumable('1x #forge:rods/tantalum')
    .notConsumable(metaitem('graphite_electrode'))
    .notConsumable(safeFluidOf('gtceu:rock_salt', 288))
    .notConsumable(safeFluidOf('gtceu:magnesium_chloride', 864))
    .duration(100)
    .itemOutputs('1x #forge:dusts/magnesium')
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .EUt(voltAmps[1])

  event.recipes.gtceu.electrolytic_cell('rqe2q9ugm2f70u') // remapped from original line 82
    .itemInputs('2x #forge:dusts/magnesia')
    .notConsumable('1x #forge:rods/steel')
    .notConsumable(metaitem('graphite_electrode'))
    .notConsumable(safeFluidOf('gtceu:rock_salt', 288))
    .notConsumable(safeFluidOf('gtceu:magnesium_chloride', 864))
    .duration(400)
    .itemOutputs('1x #forge:dusts/magnesium')
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('qhzekpe4zl9gyo') // remapped from original line 95
    .itemInputs('7x #forge:dusts/boric_acid')
    .inputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 4000))
    .outputFluids(safeFluidOf('susy:tetrafluoroboric_acid', 1000))
    .duration(600)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('peg7kajtv1m2wc') // remapped from original line 103
    .itemInputs('6x #forge:dusts/potassium_carbonate')
    .inputFluids(safeFluidOf('susy:tetrafluoroboric_acid', 1000))
    .outputFluids(safeFluidOf('susy:potassium_tetrafluoroborate_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillery('afm5h3awqzcjwb') // remapped from original line 112
    .inputFluids(safeFluidOf('susy:potassium_tetrafluoroborate_solution', 1000))
    .itemOutputs('12x #forge:dusts/potassium_tetrafluoroborate')
    .outputFluids(safeFluidOf('minecraft:water', 7000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.arc_furnace('7dxzs8envjgfqx') // remapped from original line 121
    .itemInputs('10x #forge:dusts/boron_trioxide')
    .itemInputs('7x #forge:dusts/any_purity_carbon')
    .itemOutputs('5x #forge:dusts/boron_carbide')
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 6000))
    .duration(300)
    .EUt(voltAmps[1])

  event.recipes.gtceu.forming_press('p1ytfiunwomacj') // remapped from original line 142
    .itemInputs('1x #forge:dusts/boron_carbide')
    .notConsumable(metaitem('shape.mold.rod'))
    .itemOutputs('1x #forge:rods/boron_carbide')
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.gtceu.electrolytic_cell('rgcm3eksjzbanb') // remapped from original line 151
    .itemInputs('5x #forge:dusts/boron_trioxide')
    .notConsumable(metaitem('graphite_electrode'))
    .notConsumable('1x #forge:rods/boron_carbide')
    .notConsumable(safeFluidOf('susy:sodium_fluoride', 1872)))
    .notConsumable(safeFluidOf('susy:potassium_tetrafluoroborate', 864)))
    .itemOutputs('2x #forge:dusts/electrolytic_boron')
    .outputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .duration(120)
    .EUt(120)

  event.recipes.gtceu.macerator('6lw0vsp8wl3fyu') // remapped from original line 163
    .itemInputs('4x #forge:dusts/electrolytic_boron')
    .itemOutputs('3x #forge:dusts/boron')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.fluidized_bed_reactor('qknpevwfxd7qwr') // remapped from original line 171
    .itemInputs('1x #forge:dusts/amorphous_boron')
    .inputFluids(safeFluidOf('gtceu:chlorine', 4040))
    .chancedOutput('3x #forge:dusts/magnesium_chloride', 600, 0)
    .outputFluids(safeFluidOf('susy:boron_trichloride', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.fluidized_bed_reactor('rlazpc1pd6ir9s') // remapped from original line 180
    .itemInputs('1x #forge:dusts/electrolytic_boron')
    .inputFluids(safeFluidOf('gtceu:chlorine', 3040))
    .chancedOutput('3x #forge:dusts/magnesium_chloride', 600, 0)
    .outputFluids(safeFluidOf('susy:boron_trichloride', 1000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('ws6i2pugmnoofa') // remapped from original line 189
    .inputFluids(safeFluidOf('susy:boron_trichloride', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 3000))
    .itemOutputs('1x #forge:dusts/high_purity_boron')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 3000))
    .duration(100)
    .EUt(voltAmps[1])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (blanket in sintering_blankets) {
  //     SINTERING_RECIPES.recipeBuilder()
  //         .inputs(ore('dustBoronCarbide'))
  // 		.notConsumable(metaitem('shape.mold.rod'))
  //         .fluidInputs(fluid(blanket.name) * blanket.amountRequired)
  //         .outputs(metaitem('stickBoronCarbide'))
  //         .duration(blanket.duration)
  //         .EUt(Globals.voltAmps[2])
  //        	.buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.SinteringGlobals.*
  // BATCH_REACTOR = recipemap('batch_reactor')
  // ROASTER = recipemap('roaster')
  // MACERATOR = recipemap('macerator')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // DISTILLERY = recipemap('distillery')
  // ARC_FURNACE = recipemap('arc_furnace')
  // EXTRUDER = recipemap('extruder')
  // FLUIDIZEDBR = recipemap('fluidized_bed_reactor')
  // FORMINGPRESS = recipemap('forming_press')
  // def SINTERING_RECIPES = recipemap("sintering_oven")
});