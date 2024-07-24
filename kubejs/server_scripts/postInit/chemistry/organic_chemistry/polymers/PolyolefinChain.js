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
  event.remove({ type: 'gtceu:compressor', input: '#forge:dusts/ultra_high_molecular_weight_polyethylene'})
  event.remove({ type: 'gtceu:fluid_solidifier', input: 'susy:shape.mold.plate' && safeFluidOf('susy:ultra_high_molecular_weight_polyethylene')})
  event.remove({ type: 'gtceu:extractor', input: '#forge:plates/ultra_high_molecular_weight_polyethylene'})

  event.recipes.susy.polymerization_tank('zy0ihuejuehhoz') // remapped from original line 8
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:ethylene', 2000))
    .itemOutputs('1x #forge:dusts/plastic')
    .EUt(30)
    .duration(300)

  event.recipes.susy.polymerization_tank('aetmn4e6up6jpu') // remapped from original line 16
    .circuit(2)
    .notConsumable('1x #forge:dusts/philips_catalyst')
    .inputFluids(safeFluidOf('gtceu:ethylene', 1500))
    .itemOutputs('1x #forge:dusts/plastic')
    .EUt(30)
    .duration(150)

  event.recipes.susy.polymerization_tank('vmkkiuwrrzijud') // remapped from original line 25
    .circuit(3)
    .notConsumable('1x #forge:dusts/ziegler_natta_catalyst')
    .inputFluids(safeFluidOf('gtceu:ethylene', 1250))
    .itemOutputs('1x #forge:dusts/plastic')
    .EUt(30)
    .duration(75)

  event.recipes.susy.polymerization_tank('awy6rxtnanoewg') // remapped from original line 34
    .circuit(4)
    .notConsumable('1x #forge:dusts/kaminsky_catalyst')
    .inputFluids(safeFluidOf('gtceu:ethylene', 1000))
    .itemOutputs('1x #forge:dusts/plastic')
    .EUt(30)
    .duration(30)

  event.recipes.susy.polymerization_tank('2thkm4rw7pifph') // remapped from original line 52
    .circuit(5)
    .notConsumable('1x #forge:dusts/ziegler_natta_catalyst')
    .inputFluids(safeFluidOf('gtceu:ethylene', 1000))
    .chancedOutput('5000x #forge:dusts/ultra_high_molecular_weight_polyethylene', 5000, 0)
    .EUt(1920)
    .duration(20)

  event.recipes.susy.polymerization_tank('omhczrjkk4wqgn') // remapped from original line 61
    .circuit(6)
    .notConsumable('1x #forge:dusts/kaminsky_catalyst')
    .inputFluids(safeFluidOf('gtceu:ethylene', 1000))
    .itemOutputs('1x #forge:dusts/ultra_high_molecular_weight_polyethylene')
    .EUt(1920)
    .duration(20)

  event.recipes.gtceu.extruder('iyu4ojwrvaltsg') // remapped from original line 70
    .notConsumable(metaitem('spinneret'))
    .inputFluids(safeFluidOf('susy:ultra_high_molecular_weight_polyethylene', 144))
    .itemOutputs('8x #forge:fibers/ultra_high_molecular_weight_polyethylene')
    .EUt(480)
    .duration(20)

  event.recipes.susy.polymerization_tank('talklqmlfltzp4') // remapped from original line 80
    .circuit(1)
    .notConsumable('1x #forge:dusts/philips_catalyst')
    .inputFluids(safeFluidOf('gtceu:propene', 2000))
    .itemOutputs('1x #forge:dusts/polypropylene')
    .EUt(30)
    .duration(500)

  event.recipes.susy.polymerization_tank('eg58wcbwlyofud') // remapped from original line 89
    .circuit(2)
    .notConsumable('1x #forge:dusts/ziegler_natta_catalyst')
    .inputFluids(safeFluidOf('gtceu:propene', 1500))
    .itemOutputs('1x #forge:dusts/polypropylene')
    .EUt(30)
    .duration(200)

  event.recipes.susy.polymerization_tank('d9fxhus0bkydv3') // remapped from original line 98
    .circuit(3)
    .notConsumable('1x #forge:dusts/kaminsky_catalyst')
    .inputFluids(safeFluidOf('gtceu:propene', 1000))
    .itemOutputs('1x #forge:dusts/polypropylene')
    .EUt(30)
    .duration(50)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // POLYMERIZATION = recipemap('polymerization_tank')
  // EXTRUDER = recipemap('extruder')
});