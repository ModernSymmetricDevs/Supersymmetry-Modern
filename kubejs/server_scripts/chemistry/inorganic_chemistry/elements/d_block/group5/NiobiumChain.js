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

  event.recipes.susy.gravity_separator('pf2r0ljjosedoc') // remapped from original line 22
    .itemInputs('1x #forge:dusts/pyrochlore')
    .itemOutputs('1x #forge:dusts/sifted_pyrochlore')
    .chancedOutput('2500x #forge:dusts/limestone_tailings', 2500, 0)
    .chancedOutput('2500x #forge:dusts/calcite', 2500, 0)
    .EUt(voltAmps[1])
    .duration(40)

  event.recipes.gtceu.electromagnetic_separator('fi9rti0jwcae4y') // remapped from original line 31
    .itemInputs('1x #forge:dusts/sifted_pyrochlore')
    .itemOutputs('1x #forge:dusts/concentrate_pyrochlore')
    .chancedOutput('2500x #forge:dusts/limestone_tailings', 2500, 0)
    .chancedOutput('2500x #forge:dusts/calcite', 2500, 0)
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.mixer('97rtnfxqili9dw') // remapped from original line 40
    .itemInputs('8x #forge:dusts/concentrate_pyrochlore')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_pyrochlore_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('jh6imxkorquwdn') // remapped from original line 48
    .notConsumable('1x #forge:dusts/oxalic_acid')
    .inputFluids(safeFluidOf('susy:impure_pyrochlore_slurry', 2000))
    .notConsumable(safeFluidOf('susy:hexafluorosilicic_acid', 100))
    .notConsumable(safeFluidOf('susy:one_amidoethyl_two_alkyl_two_imidazoline', 100))
    .notConsumable(safeFluidOf('susy:methyl_isobutyl_carbinol', 100))
    .outputFluids(safeFluidOf('susy:pyrochlore_slurry', 1000))
    .outputFluids(safeFluidOf('susy:limestone_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('wqtqccloftg39p') // remapped from original line 60
    .inputFluids(safeFluidOf('susy:pyrochlore_slurry', 1000))
    .itemOutputs('16x #forge:dusts/flotated_pyrochlore')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('ugcfhlq64p86zo') // remapped from original line 68
    .itemInputs('16x #forge:dusts/flotated_pyrochlore')
    .itemInputs('1x #forge:dusts/quicklime')
    .itemOutputs('16x #forge:dusts/roasted_pyrochlore')
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.chemical_bath('wqqxgqpaanzwu3') // remapped from original line 76
    .itemInputs('16x #forge:dusts/roasted_pyrochlore')
    .inputFluids(safeFluidOf('susy:hot_sulfuric_acid', 1000))
    .itemOutputs('16x #forge:dusts/digested_pyrochlore')
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.reaction_furnace('73mnzxx5ppv4ko') // remapped from original line 85
    .itemInputs('15x #forge:dusts/iron_iii_oxide')
    .itemInputs('7x #forge:dusts/digested_pyrochlore')
    .itemInputs('42x #forge:dusts/any_purity_aluminium')
    .inputFluids(safeFluidOf('susy:sodium_nitrate', 720))
    .itemOutputs('20x #forge:dusts/ferroniobium_tantalum')
    .itemOutputs('105x #forge:dusts/alumina')
    .itemOutputs('14x #forge:dusts/calcium')
    .outputFluids(safeFluidOf('susy:sodium_nitrite', 576))
    .duration(800)
    .EUt(voltAmps[4])

  event.recipes.gtceu.fluid_solidifier('lqpa7xgfawusp6') // remapped from original line 98
    .inputFluids(safeFluidOf('susy:sodium_nitrite', 144))
    .itemOutputs('1x #forge:dusts/sodium_nitrite')
    .duration(40)
    .EUt(voltAmps[1])

  event.recipes.susy.reaction_furnace('o5gihbg2hy0thn') // remapped from original line 105
    .itemInputs('10x #forge:dusts/ferroniobium_tantalum')
    .inputFluids(safeFluidOf('gtceu:chlorine', 54000)))
    .notConsumable(safeFluidOf('gtceu:salt', 1440))
    .notConsumable(safeFluidOf('gtceu:iron_iii_chloride', 1440))
    .outputFluids(safeFluidOf('gtceu:iron_iii_chloride', 1296))
    .outputFluids(safeFluidOf('susy:impure_niobium_pentachloride', 7000))
    .duration(400)
    .EUt(voltAmps[4])

  event.recipes.gtceu.DISTILLATION_TOWER('3b0rnxcdgn08md') // remapped from original line 116
    .inputFluids(safeFluidOf('susy:impure_niobium_pentachloride', 7000))
    .outputFluids(safeFluidOf('susy:tantalum_pentachloride', 500))
    .outputFluids(safeFluidOf('susy:niobium_pentachloride', 6500))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.gtceu.fluid_solidifier('swrjqqoxpdhtc6') // remapped from original line 124
    .inputFluids(safeFluidOf('susy:niobium_pentachloride', 1000))
    .itemOutputs('6x #forge:dusts/niobium_pentachloride')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('owq7vvev2mqb0y') // remapped from original line 131
    .itemInputs('12x #forge:dusts/niobium_pentachloride')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 17000))
    .itemOutputs('9x #forge:dusts/niobium_oxide_dihydrate')
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 10000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.gravity_separator('gcta8vbpt1q3oo') // remapped from original line 143
    .itemInputs('1x #forge:dusts/columbite')
    .itemOutputs('1x #forge:dusts/sifted_columbite')
    .chancedOutput('2500x #forge:dusts/pegmatite_tailings', 2500, 0)
    .chancedOutput('2500x #forge:dusts/nether_quartz', 2500, 0)
    .EUt(voltAmps[1])
    .duration(40)

  event.recipes.gtceu.electromagnetic_separator('aeko2cj3v6gi3v') // remapped from original line 152
    .itemInputs('1x #forge:dusts/sifted_columbite')
    .itemOutputs('1x #forge:dusts/concentrate_columbite')
    .chancedOutput('2500x #forge:dusts/pegmatite_tailings', 2500, 0)
    .chancedOutput('2500x #forge:dusts/nether_quartz', 2500, 0)
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.mixer('2qxmexdtehu1yy') // remapped from original line 161
    .itemInputs('8x #forge:dusts/concentrate_columbite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_columbite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('xzl1thl3ngkilu') // remapped from original line 169
    .notConsumable('1x #forge:dusts/sodium_fluorosilicate')
    .inputFluids(safeFluidOf('susy:impure_columbite_slurry', 2000))
    .notConsumable(safeFluidOf('susy:one_amidoethyl_two_alkyl_two_imidazoline', 100))
    .notConsumable(safeFluidOf('susy:methyl_isobutyl_carbinol', 100))
    .notConsumable(safeFluidOf('gtceu:hydrochloric_acid', 100))
    .outputFluids(safeFluidOf('susy:columbite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:pegmatite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('kodtbk2h3mvclw') // remapped from original line 181
    .inputFluids(safeFluidOf('susy:columbite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/flotated_columbite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.autoclave('knmxcg3pn8pypq') // remapped from original line 189
    .itemInputs('1x #forge:dusts/flotated_columbite')
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 14000))
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .outputFluids(safeFluidOf('susy:impure_fluoroniobic_acid_solution', 1000))
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('tikmmcv2fdrrkk') // remapped from original line 198
    .inputFluids(safeFluidOf('susy:impure_fluoroniobic_acid_solution', 1000))
    .inputFluids(safeFluidOf('susy:methyl_isobutyl_ketone', 6000))
    .outputFluids(safeFluidOf('susy:niobium_rich_extract', 6000))
    .outputFluids(safeFluidOf('susy:metal_sulfate_waste', 1000))
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('7sfr9weeipjdci') // remapped from original line 207
    .inputFluids(safeFluidOf('susy:niobium_rich_extract', 500))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 500))
    .outputFluids(safeFluidOf('susy:scrubbed_niobium_rich_extract', 500))
    .duration(5)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('fnyxswmoifkude') // remapped from original line 215
    .inputFluids(safeFluidOf('susy:scrubbed_niobium_rich_extract', 500))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 500))
    .outputFluids(safeFluidOf('susy:diluted_tantalum_extract', 500))
    .outputFluids(safeFluidOf('susy:fluoroniobic_acid_solution', 500))
    .duration(5)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('lnbaoaqdwnk3iz') // remapped from original line 224
    .inputFluids(safeFluidOf('susy:fluoroniobic_acid_solution', 6000))
    .inputFluids(safeFluidOf('susy:methyl_isobutyl_ketone', 1500))
    .outputFluids(safeFluidOf('susy:purified_fluoroniobic_acid_solution', 6000))
    .outputFluids(safeFluidOf('susy:niobium_rich_extract', 1500))
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.susy.batch_reactor('vmdxiurkzykczq') // remapped from original line 233
    .inputFluids(safeFluidOf('susy:purified_fluoroniobic_acid_solution', 6000) mol Nb
    .inputFluids(safeFluidOf('susy:ammonia_solution', 9450))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 4725))
    .chancedOutput('9x #forge:dusts/niobium_oxide_dihydrate', 6750, 0)
    .outputFluids(safeFluidOf('susy:ammonium_fluoride_solution', 9450))
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.susy.roaster('n6i1dtwzl72sc0') // remapped from original line 243
    .circuit(2)
    .itemInputs('6x #forge:dusts/ammonium_fluoride')
    .outputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.roaster('bsevvsascdijrh') // remapped from original line 252
    .itemInputs('9x #forge:dusts/niobium_oxide_dihydrate')
    .itemOutputs('7x #forge:dusts/niobium_oxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.susy.advanced_arc_furnace('mo0u5vjquutqjm') // remapped from original line 260
    .itemInputs('21x #forge:dusts/niobium_oxide')
    .itemInputs('10x #forge:dusts/any_purity_aluminium')
    .itemOutputs('25x #forge:dusts/alumina')
    .outputFluids(safeFluidOf('gtceu:niobium', 864))
    .duration(240)
    .EUt(voltAmps[4])

  event.recipes.gtceu.centrifuge('sqewmtzkqviogn') // remapped from original line 270
    .inputFluids(safeFluidOf('susy:diluted_niobium_extract', 9000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:methyl_isobutyl_ketone', 9000))
    .outputFluids(safeFluidOf('susy:purified_fluoroniobic_acid_solution', 1000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.roaster('zoiehyut67c4ez') // remapped from original line 279
    .inputFluids(safeFluidOf('susy:metal_sulfate_waste', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .chancedOutput('6x #forge:dusts/iron_sulfate', 5000, 0)
    .chancedOutput('6x #forge:dusts/manganese_ii_sulfate', 5000, 0)
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.gtceu.mixer('f7ozrqn0xaqrpc') // remapped from original line 288
    .itemInputs('6x #forge:dusts/manganese_ii_sulfate')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:manganese_ii_sulfate_solution', 1000))
    .duration(160)
    .EUt(voltAmps[1])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // FF = recipemap('froth_flotation')
  // GRAVITY_SEPARATOR = recipemap('gravity_separator')
  // ELECTROMAGNETIC_SEPARATOR = recipemap('electromagnetic_separator')
  // ROASTER = recipemap('roaster')
  // AUTOCLAVE = recipemap('autoclave')
  // CENTRIFUGE = recipemap('centrifuge')
  // ADVANCED_ARC_FURNACE = recipemap('advanced_arc_furnace')
  // FLUID_SOLIDIFIER = recipemap('fluid_solidifier')
  // BR = recipemap('batch_reactor')
  // MIXER = recipemap('mixer')
  // CLARIFIER = recipemap('clarifier')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // REACTION_FURNACE = recipemap('reaction_furnace')
});